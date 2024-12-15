import express from 'express';

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: express.Request, res: express.Response) => {})

app.listen(8080, () => console.log('Listening on port 8080'));