const express = require('express');

const app = express();
app.use(express.static(__dirname + '/public'))

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get('/', (req, res) => {
//     // console.log(req.query)
//     // req.body
//     // console.log(req.header);
//     console.log(req.params);
//     res.status(404).send("not found");
// });

app.listen(3000);
