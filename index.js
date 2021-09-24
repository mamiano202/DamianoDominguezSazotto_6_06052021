const header = document.querySelector("header");
const section = document.querySelector(".profil");

var requestURL = "data2.json";

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
        <a  href="/photographer.html?id=112344">
            <img src="Sample Photos/Photographers ID Photos/MimiKeel.jpg" alt="MimiKeel">
        </a>
        <div class="name">${heroes[i].name}</div>
                    
        <div class="localisation">${heroes[i].city}, ${heroes[i].country}</div>

        <div class="slogan">${heroes[i].tagline}</div>

        <div class="price">${heroes[i].price}€</div>
                    
        <div class="allTag">
            <ul class="tag">
                    
                    
                    <li data-filter="tags">${heroes[i].tags[0]}</li>
                    <li data-filter="tags">${heroes[i].tags[1]}</li>
                    <li data-filter="tags">${heroes[i].tags[2]}</li>
                    <li data-filter="tags">${heroes[i].tags[3]}</li>
                    
                
            </ul>
              
        </div>
    `;

    // var myList = document.createElement("ul");

    

    section.appendChild(myArticle);
  }
}
