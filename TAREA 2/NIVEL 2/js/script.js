let str = ['hola@hola.com']; //email inicio

function miFun() {
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