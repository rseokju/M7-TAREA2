function miFun() {
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

  alert(`${text}`);
  console.log(`${text}`);
  document.getElementById("resultado").innerHTML = `${text_}`;
}