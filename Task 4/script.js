/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const booty = document.querySelector('#output')

const getCars = async () => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    data.forEach((carBrand) => {
        const masina = carBrand.brand;
        const marke = carBrand.models;
        console.log(marke);
        console.log(masina);
        const brand = document.createElement('div');
        brand.setAttribute('id', 'newoutput');
        const list = document.createElement('ul');
        const display = document.createElement('li');
        list.textContent = masina;
        display.textContent = marke;
        list.append(display);
        booty.append(brand);
        brand.append(list);   
    })
}

getCars();
