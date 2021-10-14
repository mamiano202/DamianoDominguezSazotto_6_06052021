// Images page photographes

const section = document.querySelector("#ph-works");

var requestURL = "data.json";

var request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";
request.send();

request.onload = function () {
  var photoStar = request.response;
//   console.log(superHeroes)
imgPhotographer(photoStar);
  
};



function imgPhotographer(jsonObj) {
    var imgphotograph = jsonObj["photographers"];
    var medPhotograph = jsonObj["media"]
  
    for (var i = 0; i < medPhotograph.length; i++) {
      var myArticle = document.createElement("article");
      myArticle.innerHTML = /*html*/ `
          
              <img src="Sample Photos/${imgphotograph[i].name}/${medPhotograph[i].image}" alt="${imgphotograph[i].name}">
          
              `;
              section.appendChild(myArticle);}}





              <div class="allTag">
              <ul class="tag">
                  <a href='#'>
                      <li data-filter="portrait">#portrait</li>
                  </a>
              </ul>


              <ul class="tag">
                  <a href='#'>
                      <li data-filter="events">#events</li>
                  </a>
              </ul>
              <ul class="tag">
                  <a href='#'>
                      <li data-filter="travels">#travels</li>
                  </a>
              </ul>
              <ul class="tag">
                  <a href='#'>
                      <li data-filter="animals">#animals</li>
                  </a>
              </ul>
            </div>



