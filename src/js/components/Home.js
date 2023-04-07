import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.renderProducts(element);
    thisHome.renderAbout(element);
  }

  renderProducts(){
    const thisHome = this;

    const generatedProducts = templates.products();
   

    thisHome.element = utils.createDOMFromHTML(generatedProducts);
    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.containerOf.homePage);
    thisHome.dom.wrapper.appendChild(thisHome.element);
  }

  renderAbout(){
    const thisHome = this;

    const generatedAbout = templates.about();
   

    thisHome.element = utils.createDOMFromHTML(generatedAbout);
    thisHome.dom.wrapper = document.querySelector(select.containerOf.homePage);
    thisHome.dom.wrapper.appendChild(thisHome.element);
  }
}

export default Home;