import express from 'express';
import multer from 'multer';
import {baseUrl, isAdmin, isAuth} from '../utils.js';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, isAdmin, upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    res.status(200).json({
      message: 'Файл успешно загружен',
      filePath: baseUrl() + "/img/" + file.filename
    });
  } catch (error) {
    console.error(error);
    res.status(error.http_code || 500).send({ message: error.message });
  }
});


export default uploadRouter;
