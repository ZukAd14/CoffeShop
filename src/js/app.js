/* eslint-disable no-unused-vars */
import { settings, select, templates, classNames } from './settings.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;

    /* add class 'active' to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
     
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class 'active' to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
     
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },
  initData: function(){
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },
  initHome: function(){
    const thisApp = this;

    const homeElem = document.querySelector(select.containerOf.homePage);
    thisApp.homePage = new Home(homeElem);
  },
  initProducts: function(){
    const thisApp = this;

    const prodElem = document.querySelector(select.containerOf.products);
    thisApp.productsPage = new Products(prodElem);
  },
  initContact: function(){
    const thisApp = this;

    const contactElem = document.querySelector(select.containerOf.contact);
    thisApp.contactPage = new Contact(contactElem);
  },
  init: function(){
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
    thisApp.initHome();
    thisApp.initProducts();
    thisApp.initContact();
  },
};

app.init();