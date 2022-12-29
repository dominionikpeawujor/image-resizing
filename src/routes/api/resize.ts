import express from 'express';
import caching from '../../middleware/caching';
import processing from '../../functionalities/resize-processing';
import path from 'path';
import validation from '../../middleware/validation';

const resize = express();
resize.use(validation, caching);

resize.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const file: string = req.query.filename as unknown as string;
      const width: string = req.query.width as unknown as string;
      const height: string = req.query.height as unknown as string;

      const request = { file: file, width: width, height: height };
      const filepath = await processing(request);

      res.sendFile(path.resolve(filepath));
    } catch (err) {
      res.send('Invalid parameters. Check the parameters.');
      throw `${err} from resize`;
    }
  }
);

export default resize;
