// yarn add @types/cors -D
import cors from 'cors';
// framework em node para lidar com requisicao e resposta
// yarn add @types/express -D
import express from 'express';
import 'express-async-errors';
import path from 'path';

import './database/connection';
import errorHandler from "./errors/handler";
import routes from "./routes";

const app = express();

// em producao devemos listar os enderecos que terao acesso
// app.use(cors({
//   origin: ['https://...']}
// ));
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);
