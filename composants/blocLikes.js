class BlocLikes extends Component{

    //likes;

    /**
     * [constructor description]
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  props      [props description]
     * @param   {Number}  props.likes;
     *
     * @constructor
     */
    constructor(domTarget, props){
        super(domTarget, props, "div");
        this.DOM.className = "ph-elt-like";
        this.liked = false;
        this.render();

    }

    render(){
        this.DOM.innerHTML = `
          <span class="ph-work-like">
              <a class="like-counter">${this.likes}</a>
          </span>`;
        new Coeur(this.DOM, {"liked":this.liked, callback:this.click.bind(this)});
    }

    click(){
        this.liked = !this.liked;
        if (this.liked) this.likes++;
        else this.likes--;
        updateLike(this.liked);
        this.render();
    }
}