/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const mainCont = document.querySelector('#output')
const cardCont = document.createElement('div')

const getCars = async () => {
try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    data.forEach((carBrand) => {
        const masina = carBrand.brand;
        const marke = carBrand.models;
        const brand = document.createElement('div');
        brand.setAttribute('id', 'newoutput');
        mainCont.append(brand);

        const list = document.createElement('h3');
        list.textContent = masina;
        brand.append(list);

        marke.forEach((element) => {        
        const display = document.createElement('p');
        display.textContent = element;
        brand.append(display);
})  
})
} catch(error) {
        console.log(error);
    }
}

getCars();