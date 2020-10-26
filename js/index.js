const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo = document.getElementById('logo-img');
logo.setAttribute('src','/img/logo.png');

const bigLogo = document.getElementById('cta-img');
bigLogo.setAttribute('src', '/img/header-img.png');
bigLogo.style.marginLeft = '4rem'


const logoh1 = document.querySelector('.cta-text h1');
logoh1.textContent = 'DOM Is Awesome';
logoh1.innerText = siteContent.cta.h1.split(' ').join('\n');




const navLinks = document.querySelector('header nav a');
navLinks.textContent = "Services";
navLinks.style.color = 'green'

const navLinks2 = navLinks.nextElementSibling;
navLinks2.textContent = "Product";
navLinks2.style.color = 'green'

const navLinks3 = navLinks2.nextElementSibling
navLinks3.textContent = "Vision";
navLinks3.style.color = 'green';

const navLinks4 = navLinks3.nextElementSibling
navLinks4.textContent = "Features";
navLinks4.style.color = 'green';

const navLinks5 = navLinks4.nextElementSibling;
navLinks5.textContent = "About";
navLinks5.style.color = 'green';

const navLinks6 = navLinks5.nextElementSibling;
navLinks6.textContent = "Contact";
navLinks6.style.color = 'green';

const more = navLinks6.cloneNode(true);
more.textContent = 'More';
document.querySelector('header nav').appendChild(more);

const evenmore = more.cloneNode(true);
evenmore.textContent = "Even More";
document.querySelector('header nav').appendChild(evenmore);

const ctaButton = document.querySelector('button');

ctaButton.textContent = 'Get Started';

const h4features = document.querySelector('.text-content h4');
h4features.textContent = "Features";

const featuresText = document.querySelector('.text-content p')
featuresText.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// const h4about = h4features.cloneNode(true);
// document.querySelector('.top-content').appendChild(h4about);
// h4about.textContent = 'About';

// const aboutText = featuresText.cloneNode(true);
// aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const h4about = document.querySelector('.text-content:nth-of-type(2) h4');
h4about.textContent = "About";

const aboutText = document.querySelector('.text-content:nth-of-type(2) p');
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


const middleimg = document.querySelector('.middle-img');
middleimg.src = '/img/mid-page-accent.jpg';



const h4Services = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
h4Services.textContent = "Services";

const servicesText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const h4Product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
h4Product.textContent = "Product";

const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."


const h4Vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
h4Vision.textContent = "Vision";
 
const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
// visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
visionText.textContent = siteContent['main-content']['vision-content'];
// ^plugs in from top of page selector.

// const maincontent = siteContent['main-content']
// alt + shift + down/up copy line to next line
//alt + down/up move line to next line. 




const contacth4 = document.querySelector('.contact h4');
contacth4.textContent = "Contact";

const address = document.querySelector('.contact p:nth-of-type(1)');
address.innerText = "123 Way 456 Street \n Somewhere, USA"

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = "1 (888) 888-8888";

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = "sales@greatidea.io";


const copyright = document.querySelector('footer p');
copyright.textContent = "Copyright Great Idea! 2018";