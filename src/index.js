/**
 * Created by Alejandro on 12.03.2017.
 */
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({
        hello: 'JS World',
    });
});

app.get('/task_01', (req, res) => {
    const a = +req.query.a || 0,
        b = +req.query.b || 0,
        sum = a + b;
    res.send(sum.toString());
});

app.listen(3000, () => {
    console.log('Your app listening on port 3000!');
});
