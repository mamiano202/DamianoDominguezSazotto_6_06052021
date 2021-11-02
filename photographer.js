// Récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

// //méthode 1 - pour extraire juste l'id
// const leid = queryString_url_id.slice(4);
// console.log(leid);

// méthode 2 - pour extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url_id);
// console.log(urlSearchParams);

const id = urlSearchParams.get("id");
// console.log(id);

// Récupération liste des photographes
window.onload = function () {
  $.get("data.json", function (data) {
    // console.log(data);
    // console.log(data["photographers"]);
    // console.log(data["media"]);

    const photograph = data["photographers"].find(
      (photograph) => photograph.id == id
    );
    // console.log(photograph);

    profilFunction(photograph);
    function profilFunction(duval) {
      // console.log(duval);
      const section = document.querySelector(".ph-infos");

      section.innerHTML = /*html*/ `
                
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
        myArticle2.innerHTML = /*html*/ `
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
        myArticle2.innerHTML = /*html*/ `
      
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

        const likes = document.querySelector(".like-counter");
        let nbLikes = likes.textContent;
        const likesPlus = ++nbLikes;
        const likesMinus = --nbLikes;
        console.log(likesMinus);
        console.log(likesPlus);

        $(function () {
          $(".far").on("click", function () {
            if ($(this).hasClass("far fa-heart")) {
              $(this).removeClass("far fa-heart").addClass("fas fa-heart");
              console.log(likesPlus);
              document.querySelector(".like-counter").innerText = likesPlus;
            } else {
              $(this).removeClass("fas fa-heart").addClass("far fa-heart");
              document.querySelector(".like-counter").innerText = likesMinus;
            }
          });
        });

        myArticle2.classList.add("ph-work-elt");
        section2.appendChild(myArticle2);
      });

      //Création div pour likes
      main = document.querySelector("main");
      var listLikes = document.querySelectorAll(".like-counter");
      console.log(listLikes);
      listLikes.forEach((corazon) => {
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
