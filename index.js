import {fileURLToPath} from 'url';
import {
  logger,
  notFoundHandler,
  errorHandler,
} from './src/middlewares/middlewares.mjs';
import authRouter from './src/routes/auth-router.mjs';
import menuRouter from './src/routes/menu-router.mjs';
import userRouter from './src/routes/user-routers.mjs';
import path from 'path';
import cors from 'cors';
import express from 'express';

const hostname = '127.0.0.1';
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// simple custom middleware logging/debugging all requests
app.use(logger);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/docs', express.static(path.join(__dirname, './docs')));

app.get('/', (req, res) => {
  const values = {
    title: 'REST API media',
    message: 'Media items gonna be here',
  };
  res.render('home', values);
});

// app.get('/success-page', authenticateToken, (req, res) => {
//   res.sendFile(path.join(__dirname, '../docs/success-page.html'));
// });

// auth endpoints
app.use('/api/auth', authRouter);

// user endpoints
app.use('/api/user', userRouter);

// menu endpoints
app.use('/api/menu', menuRouter);

// 404 & error handler
app.use(notFoundHandler);
app.use(errorHandler);

// app.use((req, res, next) => {
//   res.sendStatus(404);
// });

// app.use((err, req, res, next) => {
//   res.status(500).json({ message: "Something went wrong" });
// });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
