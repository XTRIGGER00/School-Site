anime({
  targets: '.cover_caption_copy_text',
  duration: 1300,
  translateY: ['-300', '0']
});

anime({
  targets: '.cover_button',
  duration: 1000,
  scale: ['0,2', '1'],
  easing: 'easeInOutQuad',
});
anime({
  targets: '.cover_button',
  duration: 3000,
  delay: 700,
  borderRadius: ['0px', '100px'],
  easing: 'easeInOutQuad'
});



const cover_button = document.getElementById("cover_button")

function mouseOver() {
  cover_button.style.background = "black";
  cover_button.style.color = "white";
}

function mouseOut() {
  cover_button.style.background = "white";
  cover_button.style.color = "black";
}
