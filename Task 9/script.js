/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
  this.title = title,
  this.director = director,
  this.budget = budget
}

function wasExpensive() {
if(obj1.budget > 100000000) {
  return 'expensive'
} 
  return 'budget';
}


const obj1 = new Movie('Titanic', 'James Cameron', 200000000);
obj1.supsup = wasExpensive();

console.log(obj1);
