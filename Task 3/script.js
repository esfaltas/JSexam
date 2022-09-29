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

const fetchData = async() => {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    document.querySelector('button').style.visibility = "hidden";
    data.forEach((user) => {
      const userInfo = `${user.login} ${user.avatar_url}`;
      console.log(userInfo);
      document.querySelector('#output').innerHTML = userInfo;
    })
  }
  
  document.querySelector('button').addEventListener('click', fetchData);