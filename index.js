let express = require('express');
let app = express();

let parser = require('body-parser').urlencoded({extended: false});

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Hello'));

app.get('/signup', (req, res) => {
  res.send(`<form action="/dangky" method="post">
    <input type="text" name="name" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" value="Sign up">
  </form>
`);
})

app.post('/dangky', parser, (req, res) => {
  console.log(req.body);
  res.send('Dang ky thanh cong');
});
