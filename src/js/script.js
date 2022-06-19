// TABS
$('.tabs-wrapper').each(function () {
  let ths = $(this);
  ths.find('.tab-item').not(':first').hide();
  ths
    .find('.tab')
    .click(function () {
      ths
        .find('.tab')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
      ths.find('.tab-item').hide().eq($(this).index()).fadeIn();
    })
    .eq(0)
    .addClass('active');
});

// BURGER

const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const body = document.body;

const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle('open');
  hamb.classList.toggle('hamb-active');
  body.classList.toggle('noscroll');
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener('click', closeOnClick);
});

function closeOnClick() {
  popup.classList.remove('open');
  hamb.classList.remove('active');
  body.classList.remove('noscroll');
}
