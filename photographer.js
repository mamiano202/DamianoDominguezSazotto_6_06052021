// Récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

// //méthode 1 - pour extraire juste l'id
// const leid = queryString_url_id.slice(4);
// console.log(leid);

// méthode 2 - pour extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
// console.log(urlSearchParams);

/**
 * l'id du photographe
 * @type {Number}
 */
const id = parseInt(urlSearchParams.get("id"));
// console.log(id);
const section = document.querySelector(".ph-infos");

/**
 * la liste des media
 * @type {Array}
 */
let media;

/**
 * nombre de likes
 * @type {Number}
 */
let totalInc = 0;

let activeFilter = "Popularité";

let photographerName;

// Récupération liste des photographes
window.onload = async function () {
  const response = await fetch("data.json");
  const data = await response.json();

  const photograph = data["photographers"].find(
    (photograph) => photograph.id === id
  );

  photographerName = photograph.name;

  media = data["media"].filter((media) => media.photographerId === id);

  initSection(photograph);
  showMedia();
};

function showMedia() {
  // Boucle pour photo
  const section2 = document.querySelector("#ph-works");
  section2.innerText = "";
  totalInc = 0;
  media.forEach((element) => {
    element.path = photographerName;
    if (element.image) new ImageCard(section2, element);
    if (element.video) new VideoCard(section2, element);
    totalInc += element.likes;
  });
  document.getElementById("total-likes").innerText = totalInc;
}

/**
 * construit / rempli la structure de base de la page
 * @param {*} photograph
 */
function initSection(photograph) {
  section.innerHTML = /*html*/ `
                
  <div class="AAA"><h2>${photograph.name}</h2>
  <p class="ph-city">${photograph.city}, ${photograph.country}</p>
  <p class="ph-tagline">${photograph.tagline}</p>
  </div>

<img src="Sample Photos/Photographers ID Photos/${photograph.portrait}" alt="${photograph.name}">



`;
  document.getElementById("priceTjm").innerText = `${photograph.price} €/jour`;
  //liste pour les tags
  const AAA = document.querySelector(".AAA");
  const allTag = document.createElement("ul");
  allTag.classList.add("tags");

  // boucle pour les tags
  var superTags = photograph.tags;

  // console.log(superTags);
  for (var j = 0; j < superTags.length; j++) {
    var listItem = document.createElement("li");
    listItem.textContent = "#" + superTags[j];

    allTag.appendChild(listItem);
    AAA.appendChild(allTag);

    section.appendChild(AAA);
  }
}

/**
 *
 * @param {Boolean} inc incrémente (true) ou décrémente (false)
 */
function updateLike(inc) {
  if (inc) totalInc++;
  else totalInc--;
  document.getElementById("total-likes").innerText = totalInc;
}

function orderMedia() {
  let tri;
  switch (activeFilter) {
    case "Popularité":
      tri = function (a, b) {
        return a.likes - b.likes;
      };
      break;
    case "Date":
      tri = function (a, b) {
        if ( a.date < b.date ){
          return -1;
        }
        if ( a.date > b.date ){
          return 1;
        }
        return 0;
      };
      break;
    case "Titre":
      tri = function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      };
      break;
    default:
      tri = function (a, b) {
        return a.likes - b.likes;
      };
      break;
  }
  console.log(tri);
  media = media.sort(tri);
  showMedia();
}

/*
window.onload =  function () {
  $.get("data.json", function (data) {
    // console.log(data);
    // console.log(data["photographers"]);
    // console.log(data["media"]);

    const photograph = data["photographers"].find(
      (photograph) => photograph.id == id
    );
    // console.log(photograph);

    showMedia(photograph);
    function showMedia(duval) {
      // console.log(duval);
      const section = document.querySelector(".ph-infos");

      section.innerHTML = `
                
      <div class="AAA"><h2>${photograph.name}</h2>
      <p class="ph-city">${photograph.city}, ${photograph.country}</p>
      <p class="ph-tagline">${photograph.tagline}</p>
      </div>
    
    <img src="Sample Photos/Photographers ID Photos/${photograph.portrait}" alt="${photograph.name}">
    
    

    `;

document.getElementById(
"priceTjm"
).innerText = `${photograph.price} €/jour`;
//liste pour les tags
var AAA = document.querySelector(".AAA");
var allTag = document.createElement("ul");
allTag.classList.add("tags");

// boucle pour les tags
var superTags = photograph.tags;

// console.log(superTags);
for (var j = 0; j < superTags.length; j++) {
var listItem = document.createElement("li");
listItem.textContent = "#" + superTags[j];

allTag.appendChild(listItem);
AAA.appendChild(allTag);

section.appendChild(AAA);
}

//Photos des réalisations des photographes

const media = data["media"].filter((media) => media.photographerId == id);
const media1 = media.filter((media) => media.image);
const media2 = media.filter((media) => media.video);

// Boucle pour photo

media1.forEach((element) => {
const section2 = document.querySelector("#ph-works");
var myArticle2 = document.createElement("article");
myArticle2.innerHTML = `
<a href="#" title="${element.title}">
  <img src="Sample Photos/${photograph.name}/${element.image}" alt="${element.title}" role="button" class="ph-media">
</a>

<div class="ph-work-elt-text">
  <h2 class="ph-work-title">${element.title}</h2>
  <span class="ph-work-price">${element.price}€</span>
  <div class="ph-elt-like">
    <span class="ph-work-like">
      <a class="like-counter">${element.likes}</a>
    </span>
    <i class="far fa-heart heart-btn" aria-label="likes" role="button" data-value="88"></i>
  </div>
</div>
`;

myArticle2.classList.add("ph-work-elt");

section2.appendChild(myArticle2);
});

// boucle video
media2.forEach((video) => {
const section2 = document.querySelector("#ph-works");
var myArticle2 = document.createElement("article");
myArticle2.innerHTML =  `

<a href="#" title="${video.title}">
<video controls="controls" src="Sample Photos/${photograph.name}/${video.video}"role="button" class="ph-media"></video>
</a>
<div class="ph-work-elt-text">
<h2 class="ph-work-title">${video.title}</h2>
<span class="ph-work-price">${video.price}€</span>
<div class="ph-elt-like">
<span class="ph-work-like">
<a class="like-counter">${video.likes}</a>
</span>
<i class="far fa-heart" aria-label="likes" role="button" ></i>
</div>
</div>
`;
//remplissage coeur

$(function () {
$(".far").on("click", function () {
  const counter = this.parentNode.querySelector(".like-counter");
  let totalInc=document.querySelector("#total-likes")

  if ($(this).hasClass("far fa-heart")) {
    $(this).removeClass("far fa-heart").addClass("fas fa-heart");
    counter.innerText++
    totalInc.innerText++
  } else {
    $(this).removeClass("fas fa-heart").addClass("far fa-heart");
    counter.innerText--
    totalInc.innerText--
  }
});
});

myArticle2.classList.add("ph-work-elt");
section2.appendChild(myArticle2);
});

//Création div pour likes
var likes = document.querySelectorAll(".like-counter");
console.log(likes);
likes.forEach((corazon) => {
const likeQuantity = Number(corazon.textContent);
console.log(likeQuantity);
const existingTotal = Number(
document.getElementById("total-likes").innerText
);
console.log(existingTotal);
const newTotal = existingTotal + likeQuantity;
console.log(`${likeQuantity} + ${existingTotal} = ${newTotal}`);
document.getElementById("total-likes").innerText = newTotal;
});
}
});
};
*/
