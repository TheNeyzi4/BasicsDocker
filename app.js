// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Hello Docker!');
});

app.listen = () => {
	console.log(`App is running on PORT:${port}`);
});