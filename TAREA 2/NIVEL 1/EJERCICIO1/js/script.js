function miFun() {
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

  alert(`${text}`);
  console.log(`${text}`);
  resultado.innerHTML = `${text_}`;
}