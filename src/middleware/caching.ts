import express, { NextFunction } from 'express';
import { existsSync } from 'fs';
import path from 'path';

const caching = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void => {
  //filename parameters from 'req' object
  const file = req.query.filename as unknown as string;

  file === undefined
    ? res.send('incorrect parameters. Expected "filename" parameter in URL')
    : '';
  req.query.width === undefined
    ? res.send('incorrect parameters. Expected "width" parameter in URL')
    : '';
  req.query.height === undefined
    ? res.send('incorrect parameters. Expected "height" paramete" in URL')
    : '';

  //File path to get image
  const filePath = `assets/thumb/${file}_${req.query.width}x${
    req.query.height
  }${file.slice(-4)}`;

  //Conidition for serving cached files (using the existsSync method)
  const fileExists: boolean = existsSync(path.resolve(filePath));

  try {
    if (fileExists) {
      res.sendFile(path.resolve(filePath));
    } else {
      next();
    }
  } catch (err) {
    throw `${err} from caching`;
  }
};

export default caching;
