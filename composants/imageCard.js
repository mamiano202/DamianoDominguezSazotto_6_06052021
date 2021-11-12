class ImageCard{
    constructor(domTarget, props){
        this.DOM = document.createElement("article");
        this.DOM.className="ph-work-elt";
        domTarget.appendChild(this.DOM);
        for( const [key, value] of Object.entries(props) ){
            this[key] = value;
        }
        this.render();
    }

    render(){
        this.DOM.innerHTML = `
          <a href="#" title="${this.title}">
            <img src="Sample Photos/${this.path}/${this.image}" alt="${this.title}" role="button" class="ph-media">
          </a>
 
          <div class="ph-work-elt-text">
            <h2 class="ph-work-title">${this.title}</h2>
            <span class="ph-work-price">${this.price}€</span>
            <div class="ph-elt-like">
              <span class="ph-work-like">
                <a class="like-counter">${this.likes}</a>
              </span>
              <i class="far fa-heart heart-btn" aria-label="likes" role="button" data-value="88"></i>
            </div>
          </div>
        `;
    }
}