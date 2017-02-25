let PhepTinh = require('../PhepTinh.js');

module.exports = (req, res) => {
  let {pheptinh, soa, sob} = req.body;
  let pt = new PhepTinh(pheptinh, soa, sob);
  res.send(pt.getResult());
};
