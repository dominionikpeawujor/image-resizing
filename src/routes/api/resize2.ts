import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';
import caching from '../../middleware/caching';

const resize = express();
resize.use(caching);

//Resize Endpoint
resize.get('/', (req: express.Request, res: express.Response) => {
  try {
    //Parameters from the 'req' object
    const file: string = req.query.filename as unknown as string;
    const width: number = parseInt(req.query.width as unknown as string);
    const height: number = parseInt(req.query.height as unknown as string);

    width === undefined
      ? res.send('incorrect parameters. Expected "width" in parameter')
      : '';
    height === undefined
      ? res.send('incorrect parameters. Expected "height" in parameter')
      : '';

    //File Directories for operations
    const fullPath = `assets/full/${file}`;
    const filename = `${file}_${width}x${height}.jpg`;
    const fileDir = `assets/thumb/${filename}`;

    //Using the sharp module
    const image = sharp(path.resolve(fullPath));

    //Resizing pictures
    image
      .resize({ width: width, height: height })
      .toBuffer()
      .then(async (data) => {
        const makeFile = fs.open(path.resolve(fileDir), 'w+');
        (await makeFile).writeFile(data);
      })
      .then(() => res.sendFile(path.resolve(fileDir)));
  } catch (err) {
    throw `${err}`;
  }
});

export default resize;