class VideoCard {
  constructor(domTarget, props) {
    this.DOM = document.createElement("article");
    this.DOM.className = "ph-work-elt";
    domTarget.appendChild(this.DOM);
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
    this.render();
  }

  render() {
    this.DOM.innerHTML = `
      
        <a href="#" title="${this.title}">
          <video controls="controls" src="Sample Photos/${this.path}/${this.video}"role="button" class="ph-media"></video>
        </a>
       
                `;
    const zoneRafraichir = document.createElement("div");
    this.DOM.appendChild(zoneRafraichir);
    zoneRafraichir.className = "ph-work-elt-text";
    zoneRafraichir.innerHTML = `<h2 class="ph-work-title">${this.title}</h2>
                <span class="ph-work-price">${this.price}€</span>`;
    new BlocLikes(zoneRafraichir, { likes: this.likes });
  }
}
