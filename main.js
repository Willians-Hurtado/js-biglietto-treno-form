
const nameEl = document.getElementById('fullName')
const kmEl = document.getElementById('km')
const ageEl = document.getElementById('age')
const btnGenera = document.getElementById('genera')
const btnAnnulla = document.getElementById('annulla')

console.log(nameEl, kmEl, ageEl, btnGenera);
console.log(nameEl.value, kmEl.value, ageEl.value);


btnGenera.addEventListener('click', function(){
    console.log(nameEl.value, kmEl.value, ageEl.value);
    
})











