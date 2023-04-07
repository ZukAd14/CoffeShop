import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Products {
  constructor(element){
    const thisProducts = this;

    thisProducts.renderProducts(element);
  }

  renderProducts(){
    const thisProducts = this;

    const generatedProducts = templates.products();
   

    thisProducts.element = utils.createDOMFromHTML(generatedProducts);
    thisProducts.dom = {};
    thisProducts.dom.wrapper = document.querySelector(select.containerOf.products);
    thisProducts.dom.wrapper.appendChild(thisProducts.element);
  }
}

export default Products;