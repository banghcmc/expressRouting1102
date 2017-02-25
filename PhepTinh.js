class PhepTinh {
  constructor(pt, soa, sob) {
    this.pt = pt;
    this.soa = soa;
    this.sob = sob;
  }
  getResult(){
    let chuoi = `${this.soa} ${this.getPt(this.pt)} ${this.sob}`;
    let kq = eval(chuoi);
    return `${chuoi} = ${kq}`;
  }
  getPt(str){
    switch (str) {
      case 'cong':
        return '+';
      case 'tru':
        return '-';
      case 'nhan':
        return '*';
      case 'chia':
        return '/';
    }
  }
}

module.exports = PhepTinh;
