module.exports.index=function(req,res){
    res.render('index', { title: 'About' });
};

module.exports.signin=function(req,res){
    res.render('signin', { title: 'SignIn' });
};
module.exports.review=function(req,res){
    res.render('review', { title: 'Review' });
};