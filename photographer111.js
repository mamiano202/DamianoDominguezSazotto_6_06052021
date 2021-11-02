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
      // var myArticle = document.createElement("article");

      
      section.innerHTML = /*html*/ `
                
                <div class="AAA"><h2>${photograph.name}</h2>
                <p class="ph-city">${photograph.city}, ${photograph.country}</p>
                <p class="ph-tagline">${photograph.tagline}</p>
                </div>
              
              <img src="Sample Photos/Photographers ID Photos/${photograph.portrait}" alt="${photograph.name}">
              
              

              `; 
      //liste pour les tags
      var AAA= document.querySelector(".AAA")
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
var copie=[];

media1.forEach(image=>console.log(image));
console.log(media1)


      for (var k = 0; k < media1.length; k++) {
        const section2 = document.querySelector("#ph-works");
        var myArticle2 = document.createElement("article");
        myArticle2.innerHTML = /*html*/ `
      
  <a href="#" title="${media1[k].title}">
  <img src="Sample Photos/${photograph.name}/${media1[k].image}" alt="${
          media1[k].title
        }" role="button"
      class="ph-media">
       
      
  </a>
 
<div class="ph-work-elt-text">
  <h2 class="ph-work-title">${media1[k].title}</h2>
  <span class="ph-work-price">${media1[k].price}€</span>
  <div class="ph-elt-like">
      <span class="ph-work-like">
          <a class="like-counter">${media1[k].likes}</a>
      </span>
      <i class="far fa-heart heart-btn" aria-label="likes" role="button" data-value="88"></i>
  </div>
</div>
            
<div id="box" aria-label="photographer likes and price">

<span id="total-likes">
// ${
//           media[1].likes +
//           media[2].likes +
//           media[3].likes +
//           media[4].likes +
//           media[5].likes +
//           media[6].likes +
//           media[7].likes +
//           media[8].likes +
//           media[9].likes
         1 }
         
</span>
<i class="fas fa-heart" aria-label="likes"></i>
<span>${photograph.price} €/ jour</span>


</div>
          `;

        myArticle2.classList.add("ph-work-elt");
        
        section2.appendChild(myArticle2);
      }



      // boucle video
      for (var l = 0; l < media2.length; l++) {
        // console.log(media2)
        const section2 = document.querySelector("#ph-works");
        var myArticle2 = document.createElement("article");
        myArticle2.innerHTML = /*html*/ `
      
  <a href="#" title="${media2[l].title}">
  <video controls="controls" src="Sample Photos/${photograph.name}/${media2[l].video}"
                        role="button" class="ph-media"></video>
       
      
  </a>
 <div class="ph-work-elt-text">
  <h2 class="ph-work-title">${media2[l].title}</h2>
  <span class="ph-work-price">${media2[l].price}€</span>
  <div class="ph-elt-like">
      <span class="ph-work-like">
          <a class="like-counter">${media2[l].likes}</a>
      </span>
      <i class="far fa-heart heart-btn" aria-label="likes" role="button" data-value="88"></i>
  </div>
</div>

            

          `;

        myArticle2.classList.add("ph-work-elt");
        
        section2.appendChild(myArticle2);
      }


    }

    
  });


};

