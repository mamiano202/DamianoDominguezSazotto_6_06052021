
const section = document.querySelector("#Photographers");

var requestURL = "data.json";

var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  var photographers = request.response;
  showPhotograph(photographers);
};

function populateHeader(jsonObj) {
  var myPara = document.createElement("p");
}

function showPhotograph(jsonObj) {
  var photographer = jsonObj["photographers"];

  for (var i = 0; i < photographer.length; i++) {
    var myArticle = document.createElement("div");
    myArticle.classList.add("cards")
    myArticle.innerHTML = /*html*/ `
        
        <a  href="./photographer.html?id=${photographer[i].id}">
            <img src="Sample Photos/Photographers ID Photos/${photographer[i].portrait}" alt="${photographer[i].name}">
        </a>
        <div class="name">${photographer[i].name}</div>
        <div class="localisation">${photographer[i].city}, ${photographer[i].country}</div>
        <div class="slogan">${photographer[i].tagline}</div>
        <div class="price">${photographer[i].price}€/jour</div>
    `;

    //liste pour les tags
    var myList = document.createElement("ul");
    myList.classList.add("tags");

    // boucle pour les tags
    var superTags = photographer[i].tags;
    for (var j = 0; j < superTags.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = "#" + superTags[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

