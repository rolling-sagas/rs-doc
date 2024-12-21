function uwufy(string) {
  let uwuString = string.replace(/oo/g, 'owo')
  uwuString = uwuString.replace(/Oo/gi, 'Owo')
  uwuString = uwuString.replace(/(Uh|U|Ou)/g, 'UwU')
  uwuString = uwuString.replace(/(uh|u|ou)/g, 'uwu')
  uwuString = uwuString.replace(/r/g, 'w')
  uwuString = uwuString.replace(/R/g, 'W')
  return uwuString
}