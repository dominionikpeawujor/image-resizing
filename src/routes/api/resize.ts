import express from 'express';
import { promises as fs } from 'fs';
import sharp from 'sharp';
import caching from './caching';

const resize = express.Router();
resize.use(caching);

resize.get('/', (req: express.Request, res: express.Response) => {
  try {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height as unknown as number;

    const neww = parseInt(width);
    const fullPath = `assets/full/${filename}`;
    const image = sharp(fullPath);

    image
      .resize({ width: neww, height: height })
      .toBuffer()
      .then(async (data) => {
        const makeFile = fs.open(
          `assets/thumb/${filename}_${width}x${height}.jpg`,
          'w+'
        );
        (await makeFile).writeFile(data);
      });

    res.send('Converting file in process');
  } catch (err) {
    throw `${err}`;
  }
});

export default resize;
