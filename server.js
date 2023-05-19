const express =require('express');
const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

require('./routes/allNotes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);