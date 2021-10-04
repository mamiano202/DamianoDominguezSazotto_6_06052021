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

// Récupération liste des photographes
window.onload = function () {
  $.get("data.json", function (data) {
    console.log(data);
    console.log(data["photographers"]);

    const photograph = data["photographers"].find(photograph => photograph.id == id);
    console.log(photograph);
  });
};





