import { select, templates } from '../settings.js';
import { utils } from '../utils.js';


export class Home {
  constructor(id, data){
    const thisHome = this;
    thisHome.id = id;
    thisHome.data = data;


    thisHome.renderProducts();
    
    
  }

  renderProducts(){
    const thisHome = this;

    const generatedProducts = templates.products(thisHome.data);
   

    thisHome.element = utils.createDOMFromHTML(generatedProducts);
    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.containerOf.homePage);
    thisHome.dom.wrapper.appendChild(thisHome.element);
  }
}

export class HeaderHome {
  constructor(){
    const thisHeaderHome = this;

    thisHeaderHome.render();
  }
  render(){
    const thisHeaderHome = this;

    const generatedHeader = templates.productsHeader();
    thisHeaderHome.element = utils.createDOMFromHTML(generatedHeader);
    const headerContainer = document.querySelector(select.containerOf.homePage);
    headerContainer.appendChild(thisHeaderHome.element);
  }
}
export class About {
  constructor(){
    const thisAbout = this;

    thisAbout.render();
  }
  render(){
    const thisAbout = this;

    const generatedAbout = templates.about();
   

    thisAbout.element = utils.createDOMFromHTML(generatedAbout);
    const aboutContainer = document.querySelector(select.containerOf.homePage);
    aboutContainer.appendChild(thisAbout.element);
  }
}
