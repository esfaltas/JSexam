/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';
const body = document.querySelector('.output-cointainer');
const cardCont = document.createElement('div');
cardCont.setAttribute('id', 'newCont');
body.append(cardCont);

const fetchData = async () => {
try {  const response = await fetch(ENDPOINT);
  const data = await response.json();
  document.querySelector('#output').style.visibility = "hidden";
  data.forEach((user) => {
    const userInfo = `${user.login}`;
    const newCard = document.createElement('div');
    newCard.setAttribute('id', 'newoutput');
    cardCont.append(newCard);

    const infoo = document.createElement('p');
    infoo.textContent = userInfo;
    newCard.append(infoo);

    const pics = document.createElement('img');
    pics.setAttribute("src", user.avatar_url);
    pics.setAttribute("width", "150px");
    newCard.append(pics);
  })
} catch(error) {
  console.log(error);
  }
}

document.querySelector('button').addEventListener('click', fetchData);