class Coeur{
    constructor(domTarget, callback){
        this.DOM = document.createElement("i");
        this.DOM.className="far fa-heart";
        domTarget.appendChild(this.DOM);
        this.DOM.onclick = ()=>{
            this.active = !this.active;
            callback(this.active);
            this.DOM.classList.toggle("far");
            this.DOM.classList.toggle("fas");
        }
        this.active = false;
    }
}