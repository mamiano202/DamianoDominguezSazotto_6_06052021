class Component{
    constructor(domTarget, props, tag){
        this.DOM = document.createElement(tag);
        domTarget.appendChild(this.DOM);
        for (const [key, value] of Object.entries(props)) {
          this[key] = value;
        }
    }
}