require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const chaptersRouter = require('./routes/chapters');
const lessonsRouter = require('./routes/lessons');
const imageCoursesRouter = require('./routes/imageCourses');
const myCoursesRouter = require('./routes/myCourses');
const reviewsRouter = require('./routes/reviews');
const paymentsRouter = require('./routes/payments');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const refreshTokensRouter = require('./routes/refreshTokens')
const mentorsRouter = require('./routes/mentors');
const webhookRouter = require('./routes/webhook');

const verifyToken = require('./middlewares/verifyToken');
const access = require('./middlewares/permission');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/chapters', verifyToken, access('admin'), chaptersRouter);
app.use('/lessons', verifyToken, access('admin'), lessonsRouter);
app.use('/media', verifyToken, access('admin', 'student'), mediaRouter);
app.use('/image-courses', verifyToken, access('admin'), imageCoursesRouter);
app.use('/my-courses', verifyToken, access('admin', 'student'), myCoursesRouter);
app.use('/payments', paymentsRouter);
app.use('/orders', verifyToken, access('admin', 'student'), ordersRouter);
app.use('/refresh-tokens', refreshTokensRouter);
app.use('/mentors', verifyToken, access('admin'), mentorsRouter);
app.use('/reviews', verifyToken, access('admin', 'student'), reviewsRouter);
app.use('/webhook', webhookRouter);

module.exports = app;