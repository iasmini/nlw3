// framework em node para lidar com requisicao e resposta
// yarn add @types/express -D
import express from 'express';

import './database/connection';
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
