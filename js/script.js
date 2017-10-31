// defaults
function _(query) {
  return document.querySelector(query);
}
function _all(query) {
  return document.querySelectorAll(query);
}
// /////////////////


// makes boubbles
$(function () {
  $("#frame1").to3DBubbleCloud();
  $("#frame2").to3DBubbleCloud();
});
// /////////////////
// init headroom
var button = _('.to-top');
var header = _('.header');
var headroom1 = new Headroom(button, {
  'offset': 25,
  'tolerance': 10,
  'classes': {
    'initial': 'animated',
    'pinned': 'slideDown',
    'unpinned': 'slideUp',
    'preventDrag': 'true'
  }
});
var headroom2 = new Headroom(header, {
  'offset': 25,
  'tolerance': 10,
  'classes': {
    'initial': 'animated',
    'pinned': '',
    'unpinned': 'run',
    'preventDrag': 'true'
  }
});
headroom1.init();
headroom1.destroy();
headroom2.init();
headroom2.destroy();
// /////////////////

// scrolls to element
function scrollTo(input) {
  var elem = _(input);
  console.log('scrolling to ' + input);
  elem.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
}

_('.to-top').addEventListener('click', function () {
  scrollTo('header');
});
_('.header-title').addEventListener('click', function () {
  scrollTo('header');
});
_('#about').addEventListener('click', function () {
  scrollTo('.content-about');
});
_('#contact').addEventListener('click', function () {
  scrollTo('.content-contacts');
});
// /////////////////

// toggle main-menu
var menuToggles = _all('.can-toggle-menu');
function toggleMainmenu() {
  console.log('toggling main menu');
  var menu = _('.main-menu');
  var background = _('.background-fixed');
  var body = _('body');
  menu.classList.toggle('run');
  body.classList.toggle('run');
  background.classList.toggle('run');
}

menuToggles.forEach(function (toggle) {
  return toggle.addEventListener('click', function () {
    toggleMainmenu();
  });
});
// //////////////////////////////////////// 

// toggle education
var eduToggles = _all('.can-toggle-edu');
function toggleEdu() {
  var background = _('.background-fixed');
  var body = _('body');
  var edu = _('#timeline-main');
  body.classList.toggle('run');
  background.classList.toggle('run');
  edu.classList.toggle('run');
}

eduToggles.forEach(function (toggle) {
  return toggle.addEventListener('click', function () {
    toggleEdu();
  });
});
// //////////////////////////////////////// 

// hide indication

var indicationToggle = _('.can-toggle-ind');
function hideIndication() {

  var indication = _('.swipe')
  if (indication.classList.contains('hidden')) {
    return;
  }
  indication.classList.toggle('hidden');
}

indicationToggle.addEventListener('mousedown', function () {
  hideIndication();
});
indicationToggle.addEventListener('touchmove', function () {
  hideIndication();
});

// //////////////////////////////////////// 
