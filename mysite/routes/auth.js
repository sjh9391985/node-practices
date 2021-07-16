module.exports = function(role){
    return function(req, res, next){
        if(req.session.auth && (role !== 'ADMIN' || req.session.auth.role === 'ADMIN')){
        next()
        return;
    }

    if(req.accepts('html')){
        res.redirect(req.session.auth ? '/' : '/user/login');
        return;
    }

    res.send({
        result: 'fail',
        data: null,
        message: 'Access Denied'
    })
    
}
}