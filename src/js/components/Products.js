import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

export class Products {
  constructor(id, data){
    const thisProducts = this;
    thisProducts.id = id;
    thisProducts.data = data;

    thisProducts.renderProducts();
    
  }

  renderProducts(){
    const thisProducts = this;

    const generatedProducts = templates.products(thisProducts.data);
   

    thisProducts.element = utils.createDOMFromHTML(generatedProducts);
    
    const productsContainer = document.querySelector(select.containerOf.products);
    productsContainer.appendChild(thisProducts.element);


    console.log(generatedProducts);
  }
}

export class ProductsHeader {
  constructor(){
    const thisProductsHeader = this;

    thisProductsHeader.render();
  }
  render(){
    const thisProductsHeader = this;

    const generatedHeader = templates.productsHeader();
    thisProductsHeader.element = utils.createDOMFromHTML(generatedHeader);
    const headerContainer = document.querySelector(select.containerOf.products);
    headerContainer.appendChild(thisProductsHeader.element);
  }
}
