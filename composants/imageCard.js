class ImageCard extends Component{
  constructor(domTarget, props) {
    super(domTarget, props, "article");
    this.DOM.className = "ph-work-elt";
    this.render();
  }

  render() {
    this.DOM.innerHTML = `
          <a href="#" title="${this.title}">
            <img src="Sample Photos/${this.path}/${this.image}" alt="${this.title}" role="button" class="ph-media">
          </a>`;
    const zoneRafraichir = document.createElement("div") ;
    this.DOM.appendChild(zoneRafraichir);
    zoneRafraichir.className = "ph-work-elt-text";
    zoneRafraichir.innerHTML = `<h2 class="ph-work-title">${this.title}</h2>
    <span class="ph-work-price">${this.price}€</span>`;
    new BlocLikes(zoneRafraichir, {"likes":this.likes});
  }
}
