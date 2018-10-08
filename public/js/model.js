document.addEventListener('DOMContentLoaded', slideShow);


//Slideshow
 function slideShow() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems, {
        fullWidth: true,
        duration: 400,
        noWrap: false,
        indicators: true,
        numVisible: 2
      });
  }

  // Carousel
pauseSlide();
function pauseSlide() {
    const elem = document.querySelector('.carousel')
    const slide = setInterval(() => {
        var instance = M.Carousel.getInstance(elem);
        instance.next();
}, 8000)
elem.addEventListener('mousedown', () => {
    clearInterval(slide);
})
elem.addEventListener('mouseup', () => {
    pauseSlide();
})
}

//SideNav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

// Modal
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  });

  document.querySelector('.modal-trigger').addEventListener('click', getMaterialDate);

  function getMaterialDate() {

  }



//fixed nav on scroll
window.onscroll = () => {myFunction()};

const navbar = document.querySelector('nav');
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

// Google Map
  let map;
  let marker;
  function initMap() {
      const loc = {lat: 30.403844, lng: -86.878235};
    map = new google.maps.Map(document.querySelector('.maps'), {
      center: loc,
      zoom: 15
    });

     marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: 'Hello World!'
      });
  }


//Form

const form = document.querySelector('.formed');
form.addEventListener('submit', subForm);

function subForm(e) {
  e.preventDefault();
const validation = document.querySelectorAll('[data-invalid]');

let checker;

validation.forEach(item => {
  if (item.value.length == 0) {
    item.classList.add('invalid');
    item.placeholder = 'Cannot be empty';
    return checker = false;
  }
})
if (!checker) return;
const inputs = document.querySelectorAll('input');
let names = [];
inputs.forEach(input => {
  names.push({name: input.dataset.name, value: input.value});
})
const userSub = names.reduce((obj, item) => {
  obj[item.name] = item.value;
  return obj;
}, {});
delete userSub.undefined

const elems = document.querySelector('.modal');

(async () => {
  const response = await fetch('/client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userSub)
  });
  const content = await response.json();
})();

if (!form.querySelector('.form-success')) {
const successDiv = document.createElement('h5');
successDiv.classList.add('form-success')
successDiv.textContent = 'Success! See you then!';
elems.appendChild(successDiv);
}


const instance = M.Modal.getInstance(elems);
  setTimeout(() => {
    instance.close();
    this.reset();
  }, 2000)
}



// Date Picker
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {});
});


const navButtons = document.querySelectorAll('.gobot');

navButtons.forEach(item => item.addEventListener('click', scroller));

function scroller() {
  if (this.classList.value.includes('cntact')) {
    const contactInfo = document.querySelector('.contact');
    const divHeight = contactInfo.clientHeight;
    window.scrollTo(0, contactInfo.offsetHeight + (divHeight / 2));
  } 
  if (this.classList.value.includes('cost')) {
    const pricingInfo = document.querySelector('.pricing');
    const divHeight = pricingInfo.clientHeight;
    window.scrollTo(0, pricingInfo.offsetHeight + (window.innerHeight - divHeight));
  }
}