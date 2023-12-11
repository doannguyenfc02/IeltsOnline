const newsRouter=require('./news');
const khoahocRouter=require('./khoahoc');
const siteRouter=require('./site');
const meRouter=require('./me');
const introductionRouter=require('./introduction')



function route(app) {
    app.use('/news',newsRouter);
    app.use('/courses',khoahocRouter);
    app.use('/me',meRouter);
    app.use('/introduction', introductionRouter)
    app.use('/',siteRouter);

}


module.exports = route;