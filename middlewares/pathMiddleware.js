const pathMiddleware = (req, res)=>{
    console.log("path middleware started");
    next();
    console.log("Global middleware ended");
};

module.exports = {
    pathMiddleware,
};