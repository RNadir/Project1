document.getElementById("IzbornikDugme").onclick =  function() {Izlazi()};

var ID = 0;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

function Izlazi() {
    var x = document.getElementById("Izbornik");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function dodajRed() {
   "use strict";
    
    var table = document.getElementById("tabelaID");
    var red= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td"); 
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td"); 

    td1.innerHTML = ++ID;
    td2.innerHTML = today;
    td3.innerHTML  = document.getElementById("dostavaIme").value;
    td4.innerHTML  = document.getElementById("dostavaAdresa").value;
    td5.innerHTML  = document.getElementById("dostavaPostanskiBroj").value;
    td6.innerHTML  = document.getElementById("dostavaTelefon").value;
    td7.innerHTML  = document.getElementById("napomena").value;
 
    red.appendChild(td1);
    red.appendChild(td2);
    red.appendChild(td3);
    red.appendChild(td4);
    red.appendChild(td5);
    red.appendChild(td6);
    red.appendChild(td7);

    table.children[0].appendChild(red);
};