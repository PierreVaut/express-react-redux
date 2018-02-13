import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist'));


app.route('/')
	.get((req, res) => res.send('imageList'))
	.post((req, res) => {});

app.listen(port);

console.log(`listening on port ${port}`);
