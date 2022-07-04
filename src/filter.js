export const filter = (arr, key = null, val) => {

  let result = []

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].email === key) {
      result.push(arr[i])
    }

    if(arr[i].company === val) {
      result.push(arr[i])
    }
  }
  // console.log(result)
      return result
}

// let objects = [
//   { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
//   { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
//   { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' },
// ];

// filter(objects, 'info@methed.ru');
// filter(objects, '', 'METHED');

