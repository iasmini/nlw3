// yarn add @types/multer -D
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename(req, file: Express.Multer.File, callback: (error: (Error | null), filename: string) => void) {
      const fileName = `${Date.now()}-${file.originalname}`;
      
      // callback recebe como primeiro parametro o erro e estamos considerando que nao vai ter erro
      callback(null, fileName)
    }
  })
};