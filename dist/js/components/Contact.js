import { select, templates } from '../settings.js';
import { utils } from '../utils.js';

class Contact {
  constructor(element){
    const thisContact = this;

    thisContact.renderContact(element);
  }

  renderContact(){
    const thisContact = this;

    const generatedContact = templates.contact();
   

    thisContact.element = utils.createDOMFromHTML(generatedContact);
    thisContact.dom = {};
    thisContact.dom.wrapper = document.querySelector(select.containerOf.contact);
    thisContact.dom.wrapper.appendChild(thisContact.element);
  }
}

export default Contact;