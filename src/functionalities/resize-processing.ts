import path from 'path';
import sharp from 'sharp';
import { promises as fs } from 'fs';

const processing = async (request: {
  file: string;
  width: number;
  height: number;
}) => {
  try {
    const file = request.file;
    const width = request.width;
    const height = request.height;

    const fullPath = `assets/full/${file}`;
    const filename = `${file}_${width}x${height}.jpg`;
    const fileDir = `assets/thumb/${filename}`;

    //Using the sharp module
    const image = sharp(path.resolve(fullPath));

    //Resizing pictures
    await image
      .resize({ width: width, height: height })
      .toBuffer()
      .then(async (data) => {
        const makeFile = fs.open(path.resolve(fileDir), 'w+');
        (await makeFile).writeFile(data);
      });

    return path.resolve(fileDir);
  } catch (err) {
    throw `${err}`;
  }
};

export default processing;
