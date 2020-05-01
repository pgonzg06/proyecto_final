var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

var myArray = [
  {
    nombre: 'Patri',
    asignatura: 'AW'
  },
  {
    nombre: 'Zeus',
    asignatura: 'Otra'
  }
]

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/data', function (req, res)){
  console.log('Peticiones POST a /data con parametros: ', req.body)

  if(req.body.nombre){
    var obj = {
      nombre: req.body.nombre,
      asignatura: req.body.asignatura
    }
    myArray.push(obj)
  }

  res.json(req.body)
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});