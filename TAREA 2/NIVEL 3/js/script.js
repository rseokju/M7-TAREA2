// NIVEL 1 ( EJERCICIO 1 )

function ejercicio1() {
  let nombre = ['ALEJANDRO'];

  let nombre_ = [];
  let text = '';
  let text_ = '';

  let i;
  for (i = 0; i < nombre[0].length; i++) {
    nombre_[i] = nombre[0].substring(i, i + 1).replace(',', '');
    text += `${nombre_[i]}\n`
    text_ += `${nombre_[i]}<br>`
  }

  alert(`EJERCICIO 1`);
  console.log(`${text}`);
}

// NIVEL 1 ( EJERCICIO 2 )

function ejercicio2() {
  let nombre = ['ALEJ3ANDRO'];
  let vocal = ['A', 'E', 'I', 'O', 'U'];
  let nombre_ = [];
  let text = '';
  let text_ = '';
  let i;
  for (i = 0; i < nombre[0].length; i++) {
    nombre_[i] = nombre[0].substring(i, i + 1).replace(',', '');
    if (nombre_[i] == vocal[0]) {
      text += `He encontrado la VOCAL : ${nombre_[i]}\n`;
      text_ += `He encontrado la VOCAL : ${nombre_[i]}<br>`;
    } else if (nombre_[i] == vocal[1]) {
      text += `He encontrado la VOCAL : ${nombre_[i]}\n`;
      text_ += `He encontrado la VOCAL : ${nombre_[i]}<br>`;
    } else if (nombre_[i] == vocal[2]) {
      text += `He encontrado la VOCAL : ${nombre_[i]}\n`;
      text_ += `He encontrado la VOCAL : ${nombre_[i]}<br>`;
    } else if (nombre_[i] == vocal[3]) {
      text += `He encontrado la VOCAL : ${nombre_[i]}\n`;
      text_ += `He encontrado la VOCAL : ${nombre_[i]}<br>`;
    } else if (nombre_[i] == vocal[4]) {
      text += `He encontrado la VOCAL : ${nombre_[i]}\n`;
      text_ += `He encontrado la VOCAL : ${nombre_[i]}<br>`;
    } else if (!isNaN(nombre_[i])) {
      text += `los nombres de personas no contienen el numero : ${nombre_[i]}\n`;
      text_ += `los nombres de personas no contienen el numero : ${nombre_[i]}<br>`;
    } else {
      text += `He encontrado la CONSONANTE : ${nombre_[i]}\n`;
      text_ += `He encontrado la CONSONANTE : ${nombre_[i]}<br>`;
    }
  }

  alert(`EJERCICIO 2`);
  console.log(`${text}`);
}

// NIVEL 1 ( EJERCICIO 3 )

function ejercicio3() {
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

  alert(`EJERCICIO 3`);
  console.log(myMap);
}

// NIVEL 1 ( EJERCICIO 4 )

function ejercicio4() {
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

  alert(`EJERCICIO 4`);
  console.log(fullname);
}

// NIVEL 2

let str = ['hola@hola.com']; //email inicio

function ejercicio5() {
  let email = prompt('Indroduzca el email que crear');
  let val_email = /[a-zA-Z0-9._-]+@[a-zA-ZñÑ0-9._-]+\.[a-zA-Z]+/;
  let registrada = false;
  let text = '';
  let i;

  for (i = 0; i < str.length; i++) {
    if (str[i] == email && val_email.test(email) && email != null) {
      alert(`USTED YA ESTA REGISTRADA\n${str[i]}`);
      registrada = true;
    }
  }

  if (!registrada && email != "" && val_email.test(email)) {
    str.push(email);
    text += `BIENVENIDO\n${email}`;
    alert(`${text}`);
  } else if (!(val_email.test(email)) || email == null) {
    alert(`Has puesto mal introducido email, intenta otra vez por fabor`);
  }

  console.log(str);
}