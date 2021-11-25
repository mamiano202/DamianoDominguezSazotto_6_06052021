class Coeur extends Component{

    /**
     * [constructor description]
     *
     * @param   {HTMLElement}  domTarget  [domTarget description]
     * @param   {Object}  props      [props description]
     * @param   {Boolean} props.liked
     * @param   {Function} props.callback
     *
     * @constructor
     */
    constructor(domTarget, props){
        super(domTarget, props, "i");
        let classes = "fa-heart ";
        if (props.liked) classes+= " fas";
        else classes+=" far";
        this.DOM.className= classes;
        this.DOM.onclick = props.callback;
    }
    
}