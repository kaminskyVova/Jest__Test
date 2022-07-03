const filter = (arr, key = '', val= '') => {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].email === key) {
      console.log(arr[i])
    }

    if(arr[i].company === val) {
      console.log(arr[i])
    }
  }
}

// let objects = [
//   { login: 'Maks', emali: 'maks@maks.com', company: 'METHED' },
//   { login: 'Methed', emali: 'info@methed.ru', company: 'METHED' },
//   { login: 'Humidor', emali: 'tomato@pomodoro.com', company: 'cucumber' },
// ];

filter(objects, 'info@methed.ru');
filter(objects, '', 'METHED');

