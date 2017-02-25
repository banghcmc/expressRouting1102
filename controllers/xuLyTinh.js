let xuLyTinh = (req, res) => {
  res.render('home', {
    mang: ['Android', 'iOS', 'Node'],
    isAdmin: false
 });
}

module.exports = xuLyTinh;
