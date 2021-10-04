const header = document.querySelector("header");
const section = document.querySelector(".profil");

var requestURL = "data.json";

var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(jsonObj) {
  var myPara = document.createElement("p");
}

function showHeroes(jsonObj) {
  var heroes = jsonObj["photographers"];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement("article");
    myArticle.innerHTML = /*html*/ `
        <a  href="./photographer.html?id=${heroes[i].id}">
            <img src="Sample Photos/Photographers ID Photos/${heroes[i].portrait}" alt="${heroes[i].name}">
        </a>
        <div class="name">${heroes[i].name}</div>
                    
        <div class="localisation">${heroes[i].city}, ${heroes[i].country}</div>

        <div class="slogan">${heroes[i].tagline}</div>

        <div class="price">${heroes[i].price}€</div>
        
                    
      
              
        </div>
        
    `; //liste pour les tags
    var myList = document.createElement("ul");
    myList.classList.add("tags");

    // boucle pour les tags
    var superPowers = heroes[i].tags;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = "#" + superPowers[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// Récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

// //méthode 1 - pour extraire juste l'id
// const leid = queryString_url_id.slice(4);
// console.log(leid);

// méthode 2 - pour extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
console.log(urlSearchParams);

const id = urlSearchParams.get("id");
console.log(id);

// // Récupération liste des photographes
// window.onload = function () {
//   $.get("data.json", function (data) {
//     console.log(data);
//     console.log(data["photographers"]);
//   });

// };

//Utilisation de la méthode .find()
