const Nexmo = require('nexmo');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static("./web"));
app.use(bodyParser.json());


const nexmo = new Nexmo({
  apiKey: '6897e0c4',
  apiSecret: 'X4TPO7cNnauqLGZM',
});

const from = 'SMS API';
// const to = '201061466493'; //this number must be in test numbers since this is the free version
const text = 'Hello  Mohammed from API ';




app.get('/web',function(req,res) 
{
    res.sendFile(path.join(__dirname, './web/html/index.html'));
})

app.post('/sms',function(req,res) 
{
    
    console.log(req.body);
    res.send("SMS sent");
    nexmo.message.sendSms(from, req.body.phone, text);
    
})




const server = app.listen(PORT, () => {});