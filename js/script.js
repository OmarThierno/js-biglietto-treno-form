// Trovare il button 
const calcBtnElem = document.getElementById('calc-btn');
console.log(calcBtnElem); //object | null 

// Evento Listener 
calcBtnElem.addEventListener('click', function () {

  const priceAtKm = 0.21;

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

    if (userAgeValue < 18) {
      discount = 20;
    } else if (userAgeValue > 65) {
      discount = 40;
    }

    const totalDiscount = (basePrice * discount) / 100;
    console.log('Total discount:', totalDiscount);

    const finalPrice = basePrice - totalDiscount;
    console.log('Final price', finalPrice)
  } else {
    alert('Inserire numeri possitivi')
  }

  

})