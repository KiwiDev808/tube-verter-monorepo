import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import YTDlpWrap from 'yt-dlp-wrap';
import { YoutubeConverter } from './converter';
import { errorHandler, pageNotFoundHandler } from './middlewares';

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/convert', async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) {
      throw new Error('Url is Required');
    }

    const binaryPath = path.join(__dirname, '../', 'bin', 'yt-dlp');
    const ytbDlWrapper = new YTDlpWrap(binaryPath);
    const converter = new YoutubeConverter(ytbDlWrapper);

    const videoStream = await converter.getVideoStream(url);
    const headers = {
      'Accept-Ranges': 'bytes',
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, headers);
    return new Promise((resolve, reject) => {
      videoStream.on('data', (chunk) => {
        res.write(chunk);
      });
      videoStream.on('end', () => {
        res.end();
        resolve();
      });
      videoStream.on('error', (err) => {
        reject(err);
      });
    });
  } catch (err) {
    next(err);
  }
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(errorHandler);
app.use(pageNotFoundHandler);

export { app };
