const header = document.querySelector('header');
const section = document.querySelector('.profil');

        
        var requestURL = 'data2.json';


        var request = new XMLHttpRequest();


        request.open('GET', requestURL);


        request.responseType = 'json';
        request.send();


        request.onload = function () {
            var superHeroes = request.response;
            populateHeader(superHeroes);
            showHeroes(superHeroes);
        }


        function populateHeader(jsonObj) {
            // var myH1 = document.createElement('h1');
            // myH1.textContent = jsonObj['squadName'];
            // header.appendChild(myH1);

            var myPara = document.createElement('p');
            myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + jsonObj['formed'];
            header.appendChild(myPara);
        }


        function showHeroes(jsonObj) {
  var heroes = jsonObj['photographers'];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myPara7 = document.createElement('p');
    var myPara8 = document.createElement('image')


    var myList = document.createElement('ul');

    // myH2.textContent = heroes[i].name; //futuro lugar de la foto
    myPara1.textContent = heroes[i].name;
    myPara2.textContent = 'id ' + heroes[i].id;
    myPara3.textContent = heroes[i].city;
    myPara4.textContent = heroes[i].country;
    myPara5.textContent = heroes[i].tags;
    myPara6.textContent = heroes[i].tagline;
    myPara7.textContent = heroes[i].price+"€";
    myPara8.textContent = heroes[i].portrait;
    

    // var superPowers = heroes[i].powers;
    // for (var j = 0; j < superPowers.length; j++) {
    //   var listItem = document.createElement('li');
    //   listItem.textContent = superPowers[j];
    //   myList.appendChild(listItem);
    // }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
