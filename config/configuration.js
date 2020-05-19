module.exports = {
    mongodbUrl: "mongodb://localhost:27017/blog",
    PORT: process.env.PORT || 3000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('Success-message');
        res.locals.error_message = req.flash('error-message');

        next();
    }

};