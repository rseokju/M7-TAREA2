function miFun() {
  let nombre = 'ALEJANDRO';
  let nombre_ = [];
  let myMap = new Map();
  let i;
  for (i = 0; i < nombre.length; i++) {
    nombre_[i] = nombre.substring(i, i + 1).replace(',', '');
  }

  myMap.set(nombre_[0], nombre.match(/A/gi).length);
  myMap.set(nombre_[1], nombre.match(/L/gi).length);
  myMap.set(nombre_[2], nombre.match(/E/gi).length);
  myMap.set(nombre_[3], nombre.match(/J/gi).length);
  myMap.set(nombre_[5], nombre.match(/N/gi).length);
  myMap.set(nombre_[6], nombre.match(/D/gi).length);
  myMap.set(nombre_[7], nombre.match(/R/gi).length);
  myMap.set(nombre_[8], nombre.match(/O/gi).length);

  console.log(myMap);
}