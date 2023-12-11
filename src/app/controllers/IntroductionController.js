//funtion constructor
class IntroductionController{
    //GET /news
    index(req, res){
        res.render('introduction');
    }
    //GET /new/:slug
    show(req, res){
        res.send("NEW DETAIL!!!")

    }
}
//khởi tạo controller
module.exports=new IntroductionController;