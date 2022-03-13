import YTDlpWrap, { YTDlpReadable } from 'yt-dlp-wrap';
export class YoutubeConverter {
  constructor(private readonly ytbDlWrapper: YTDlpWrap) {}

  public async getVideoStream(url: string): Promise<YTDlpReadable> {
    return this.ytbDlWrapper.execStream([url, '-f', 'best[ext=mp4]']);
  }
}
