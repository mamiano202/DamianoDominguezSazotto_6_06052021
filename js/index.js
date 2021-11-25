let allPhotographers;
const section = document.querySelector("#Photographers");

const requestURL = "data.json";

const request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  allPhotographers = request.response["photographers"];
  addTags();
  const filter = window.location.hash.slice(1);
  showPhotograph(filter);
};

function addTags(){
  let content = "";
  let listOfTags = [];
  allPhotographers.forEach(photographer=>{
    listOfTags = listOfTags.concat(photographer.tags);
  });
  const list =  [...new Set(listOfTags)];
  list.forEach(tag=>{
    content += /*html */`<a href="#${tag}" onclick="showPhotograph('${tag}')">${"#"+tag}</a>`;
  });
  document.querySelector("nav.filters").innerHTML = content;
}

// function populateHeader() {
//   var myPara = document.createElement("p");
// }

function filteredByTag(filter){
  if (filter === "") return allPhotographers;

  const list = [];
  allPhotographers.forEach(photographer => {
    if (photographer.tags.indexOf(filter) > -1) list.push(photographer);
  });
  return list;
}

function showPhotograph(filter) {
  section.innerText="";
  const photographers = filteredByTag(filter);
  for (var i = 0; i < photographers.length; i++) {
    var myArticle = document.createElement("div");
    myArticle.classList.add("cards")
    myArticle.innerHTML = /*html*/ `
        
        <a  href="./photographer.html?id=${photographers[i].id}">
            <img src="Sample Photos/Photographers ID Photos/${photographers[i].portrait}" alt="${photographers[i].name}">
        </a>
        <div class="name">${photographers[i].name}</div>
        <div class="localisation">${photographers[i].city}, ${photographers[i].country}</div>
        <div class="slogan">${photographers[i].tagline}</div>
        <div class="price">${photographers[i].price}€/jour</div>
    `;

    //liste pour les tags
    var myList = document.createElement("ul");
    myList.classList.add("tags");

    // boucle pour les tags
    var superTags = photographers[i].tags;
    for (var j = 0; j < superTags.length; j++) {
      var listItem = document.createElement("li");
      listItem.textContent = "#" + superTags[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

