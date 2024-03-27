// Trovare il button 
const calcBtnElem = document.getElementById('calc-btn');
console.log(calcBtnElem); //object | null 

// Evento Listener 
calcBtnElem.addEventListener('click', function () {

  const priceAtKm = 0.21;

  const userNameElem = document.getElementById('user-name'); //object | null
  console.log(userNameElem);

  const userNameValue = userNameElem.value; //string
  console.log(userNameValue);

  const userKmElem = document.getElementById('kilometers-to-travel'); //object | null 
  console.log(userKmElem);

  const userKmValue = parseInt(userKmElem.value); //number
  console.log('kilometers to travel:', userKmValue);

  const userAgeElem = document.getElementById('user-age'); //object | null 
  console.log(userAgeElem);

  const userAgeValue = parseInt(userAgeElem.value); //number
  console.log('User Age:', userAgeValue);

  if(userKmValue > 0 && userAgeValue > 0){
    const basePrice = priceAtKm * userKmValue; //number
    console.log('Base Price:' , basePrice)

    let discount = 0;

    let randomCarriage = Math.floor(Math.random() * 11) + 1;

    if (userAgeValue < 18) {
      discount = 20;
      document.getElementById('tipe-ticket').innerHTML = 'Biglietto minorenne';
    } else if (userAgeValue > 65) {
      discount = 40;
      document.getElementById('tipe-ticket').innerHTML = 'Biglietto over 65anni';
    } else {
      document.getElementById('tipe-ticket').innerHTML = 'Biglietto standard';
    }

    const totalDiscount = (basePrice * discount) / 100;
    console.log('Total discount:', totalDiscount);

    const finalPrice = basePrice - totalDiscount;
    console.log('Final price', finalPrice)

    document.getElementById('name').innerHTML = userNameValue;

    document.getElementById('final-price').innerHTML = finalPrice.toFixed(2) + '€'; //string
    document.getElementById('num-carriage').innerHTML = randomCarriage;

  } else {
    alert('Inserire numeri possitivi')
  }

  

})