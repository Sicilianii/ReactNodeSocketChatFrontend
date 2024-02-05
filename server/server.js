const express = require('express');
const app = express();


app.get('', (req, res) => {
    res.send('Yep Yep');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening 3000 port . . .'));