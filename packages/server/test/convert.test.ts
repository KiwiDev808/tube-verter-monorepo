import { YoutubeConverter } from '../src/converter';
describe('Converter Module', () => {
  let converter: YoutubeConverter;
  const ytbDlWrapperMock = {
    execStream: jest.fn(),
  };

  beforeEach(() => {
    converter = new YoutubeConverter(ytbDlWrapperMock as any);
  });
  it('should call .execStream with passed url and default parameters', async () => {
    const mockUrl = 'url';
    await converter.getVideoStream(mockUrl);
    expect(ytbDlWrapperMock.execStream).toHaveBeenCalledWith([
      mockUrl,
      '-f',
      'best[ext=mp4]',
    ]);
    expect(ytbDlWrapperMock.execStream).toHaveBeenCalledTimes(1);
  });
});
