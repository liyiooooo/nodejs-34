const express = require('express');
//利用 express 這個框架建立一個 web app
const app=express();

//app.[Method]
//get, post, put, patch, delete, option, head
app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(3002, () => {
    console.log('server is running at 3002');
});