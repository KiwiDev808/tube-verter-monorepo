import express from 'express';
import path from 'path';
import YTDlpWrap from 'yt-dlp-wrap';
import { YoutubeConverter } from './converter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/convert', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      throw new Error('url is required');
    }

    const folderPath = path.join(__dirname, '../', 'bin');

    YoutubeConverter.createYtDlpBinaries(folderPath);
    const ytbDlWrapper = new YTDlpWrap(folderPath);
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
    console.log(err);
    res.status(500).send(err);
  }
});

export { app };
