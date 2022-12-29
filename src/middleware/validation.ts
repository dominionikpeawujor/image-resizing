import express, { NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const validation = express();

validation.get(
  '/',
  (req: express.Request, res: express.Response, next: NextFunction): void => {
    try {
      const file = req.query.filename as unknown as string;

      file === undefined ? res.send('Invalid input') : '';

      !fs.existsSync(path.resolve(`assets/full/${file}`))
        ? res.send('File not found.')
        : '';
      next();
    } catch (err) {
      throw `${err} from validation`;
    }
  }
);

export default validation;
