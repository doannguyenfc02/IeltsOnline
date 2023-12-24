//funtion constructor
class NewsController{
    //GET /news
    index(req, res){
        res.render('news');
    }
}
//khởi tạo controller
module.exports=new NewsController;