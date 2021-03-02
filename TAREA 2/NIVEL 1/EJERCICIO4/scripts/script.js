function miFun() {
  let nombre = 'ALEJANDRO';
  let surname = 'KALE';
  let nombre_ = [];
  let surname_ = [];
  let fullname = [];
  let i, j;
  for (i = 0; i < nombre.length; i++) {
    nombre_[i] = nombre.substring(i, i + 1);
  }
  for (j = 0; j < surname.length; j++) {
    surname_[j] = surname.substring(j, j + 1);
  }

  fullname = nombre_.concat(' ', surname_);

  console.log(fullname);
}
