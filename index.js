const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 4220;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true }));

let plNames =['c','c++','javascript','phyton']

app.get('/', (req, res) => {
 res.render('index', {pageTitle: 'home page', plNames: plNames});
})

app.post('/', (req, res) => {
    plNames.push(req.body.plNames);
    res.redirect('/');
   });

app.delete('/:index', (req, res) => {
   const index = req.params.index;

   if(index >= 0 && index < plNames.length) {
      plNames.splice(index, 0);
      res.send('success');
   } else {
  res.status(404).send('invalid index');
   }
});

app.get('/contact', (req, res) => {
    res.render('contact', {pageTitle: 'contact page'});
   })

app.listen(port, () => {
   console.log(`listening on port ${port}`);
});