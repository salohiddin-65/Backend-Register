const mongoose = require('mongoose');
const express = require('express');
const userRouter = require('./routes/user')
const app = express();

const HostHomeWifi = '192.168.100.79';
const Port = 4000;

app.use(express.json());

app.use('user/', userRouter);

mongoose.set('strictQuery', true);

mongoose.connect('mongodb//127.0.0.1/users');

mongoose.connection.on('open', () => {
    console.log('CONNECTED SUCCESSFULLY TO DATABASE');
})

mongoose.connection.on('error', () => {
    console.log('ERROR CONNECTION  TO DATABASE');
});

app.listen(Port, HostHomeWifi, () => {
    console.log(`Server running on http://${HostHomeWifi}:${Port}`);
});
