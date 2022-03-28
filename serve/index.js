const express = require('express');

const app = express();
const port = process.env.PORT || 4500




app.use(express.static('build'));
app.get('**',(req, res)=>res.sendFile(require('path').resolve(__dirname, '../build/index.html')))

console.log(require('path').resolve(__dirname, '../build/index.html'));
app.listen(port, ()=>console.log('app runnig on port '+3000));