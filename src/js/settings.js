export const select = {
  templateOf: {
    products: '#template-products',
    about: '#template-about',
    contact: '#template-contact',
    productsHeader: '#template-productsHeader',
  },
  containerOf: {
    homePage: '.home-page',
    products: '.products-page',
    contact: '.contact-page',
    pages: '#pages',
  },
  nav: {
    links: '.page-nav a',
  },
  products: {
    wrapper: '.product-wrapper',
    prize: '.prize',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  products: {
    even: 'even',
  },
  prize: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
  about: Handlebars.compile(document.querySelector(select.templateOf.about).innerHTML),
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
  productsHeader: Handlebars.compile(document.querySelector(select.templateOf.productsHeader).innerHTML),
};