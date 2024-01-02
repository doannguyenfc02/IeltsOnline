//routes/index.js
const newsRouter=require('./news');
const khoahocRouter=require('./khoahoc');
const siteRouter=require('./site');
const examRouter=require('./exam');
const meRouter=require('./me');
const managementRouter=require('./management');
const loginRouter=require('./login');
const introductionRouter=require('./introduction')




function route(app) {

    app.use('/login',loginRouter);
    app.use('/management',managementRouter);
    app.use('/news',newsRouter);
    app.use('/courses',khoahocRouter);
    app.use('/me',meRouter);
    app.use('/exam',examRouter);
    app.use('/introduction', introductionRouter)
    app.use('/',siteRouter);

}


module.exports = route;