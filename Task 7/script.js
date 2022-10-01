/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys() { 
try { 
let keys = Object.keys(audi);
let newArray = [keys.join()];
console.log(newArray);
} catch(error) {
  console.log(error);
}};

showObjectKeys()