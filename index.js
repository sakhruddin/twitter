const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.use(express.json());
app.use(require("./routes/users.routes"));
app.use(require("./routes/twitts.route"));
app.use(require('./routes/comments.route'))




mongoose.connect("mongodb+srv://sakhruddin:faros095@cluster0.z8yq6.mongodb.net/twitter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(4000, () => {
    console.log('Сервер запущен успешно')
});