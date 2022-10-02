/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

const person = {
    title: this.title,
    director: this.title,
    budget: this.budget
  };

  person.title= 'Titanic';
  person.director= 'esfaltas';
  person.budget= '100,000,000$'

  function createObj() {
    const obj = Object.create(person);
    console.log(obj);
  }

  createObj()