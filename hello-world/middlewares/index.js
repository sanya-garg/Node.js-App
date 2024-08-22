function middlewareFunction(){
    return (req, res, next) =>{
        console.log('hello from middleware 1');
        next(); // It will redirect to route
    }
}

module.exports = {
    middlewareFunction
}