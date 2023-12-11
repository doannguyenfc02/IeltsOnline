//funtion constructor
class NewsController{
    //GET /news
    index(req, res){
        res.render('news');
    }
    //GET /new/:slug
    show(req, res){
        res.send("NEW DETAIL!!!")

    }
}
//khởi tạo controller
module.exports=new NewsController;