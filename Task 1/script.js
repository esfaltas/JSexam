/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("output").style.visibility = "hidden";

function converte(e) {
    e.preventDefault()

    const skaicius = document.querySelector('#search');
    const svoris = Number(skaicius.value);
    if (!svoris || isNaN(svoris)) {
      alert("Please enter weight");
      return;
    }

    document.getElementById("output").style.visibility = "visible";

    let lb = svoris.value * 2.2046; // .toFixed() neveikia?
    let num1 = document.getElementById("pounds").innerHTML = lb.toFixed(2);
    let g =  svoris.value / 0.0010000;
    let num2 = document.getElementById("gram").innerHTML = g.toFixed(0);
    let oc =  svoris.value * 35.274;
    let num3 = document.getElementById("ounce").innerHTML = oc.toFixed(2);
    svoris.value = '';
  }
  
  document.querySelector('#submit-btn').addEventListener('click', converte);