let express = require('express');
let app = express();
let PhepTinh = require('./PhepTinh.js');
let parser = require('body-parser').urlencoded({extended: false});

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send('Hello'));

// app.get('/signup', (req, res) => {
//   res.send(`
//     <form action="/dangky" method="post">
//       <input type="text" name="name1" placeholder="Username">
//       <br/>
//       <input type="password" name="password" placeholder="Password">
//       <input type="submit" value="Sign up">
//     </form>
//   `);
// })
//
// app.post('/dangky', parser, (req, res) => {
//   console.log(req.body);
//   res.send('Dang ky thanh cong');
// });

app.get('/tinh', (req, res) => {
  res.send(`
    <form action="/xuly" method="post">
      <input type="text" name="pheptinh" placeholder="Phep Tinh">
      <br><br>
      <input type="text" name="soa" placeholder="So a">
      <br><br>
      <input type="text" name="sob" placeholder="So b">
      <br><br>
      <input type="submit" value="Tinh">
    </form>`);
});

app.post('/xuly', parser, (req, res) => {
  let {pheptinh, soa, sob} = req.body;
  let pt = new PhepTinh(pheptinh, soa, sob);
  res.send(pt.getResult());
});
