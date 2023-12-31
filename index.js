function checkResolution(){
    //Get the current window width
    var windowWidth = window.innerWidth;
    //Get the two items from the about us section
    var aboutUsText = document.getElementById('aboutustext');
    var aboutUsImage = document.getElementById('aboutusimage');

    //Check if the window widht is 767px or less
    if (windowWidth <= 1024){
        document.getElementById('paragraph2').style.display = 'none';
        document.getElementById('paragraph3').style.display = 'none';
        aboutUsText.insertAdjacentElement('beforebegin', aboutUsImage);

    }
}

document.addEventListener('DOMContentLoaded', function () {
    $('.candle-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});// Opens the sidebar, changes the width and left margin of the title,
// hides the off-canvas symbol, and changes the background color of the header and body
function openNav() {
    document.getElementById("SideNavID").style.width = "50%";
    document.getElementById("title").style.marginLeft = "50%";
    document.getElementById("offcanvasymbol").style.visibility = "hidden";
    document.getElementById("header").style.background = "#797979";
    document.body.style.backgroundColor = "#949494";
    for (var i = 0; i < document.images.length; i++) {
        // Setze den Filter für Helligkeit auf 50%
        document.images[i].style.filter = "brightness(0.5)";
      }
  }
  
  // Closes the sidebar, resets the width and left margin of the title,
  // shows the off-canvas symbol, and resets the background color of the header and body
  function closeNav() {
    document.getElementById("SideNavID").style.width = "0";
    document.getElementById("title").style.marginLeft = "0";
    document.getElementById("offcanvasymbol").style.visibility = "visible";
    document.getElementById("header").style.background = "#b76e79";
    var dropDownElements = document.querySelector('.drpdwn-content');
    dropDownElements.classList.remove('active-mobile');
    document.body.style.backgroundColor = "#f0f0f0";
    for (var i = 0; i < document.images.length; i++) {
        // Setze den Filter für Helligkeit auf 100%
        document.images[i].style.filter = "brightness(1)";
      }
  }
  
  // Shows the dropdown menu by adding the 'active' CSS class
  function showDropDown() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 767){
        var dropDownElements = document.querySelector('.drpdwn-content');
        dropDownElements.classList.add('active-mobile');
    }
    else{
        var dropDownElements = document.querySelector('.drpdwn-content');
        dropDownElements.classList.add('active');
    }
  }
  
  // Hides the dropdown menu by removing the 'active' CSS class
  function hideDropDown() {
    var windowWidth = window.innerWidth;
    if (windowWidth <= 767){
        var dropDownElements = document.querySelector('.drpdwn-content');
        dropDownElements.classList.remove('active-mobile');
    }
    else{
        var dropDownElements = document.querySelector('.drpdwn-content');
        dropDownElements.classList.remove('active');
    }

  }
  
  // Adds an event listener to reload the page when the window resolution changes
//   window.addEventListener('resize', function() {
//       location.reload();
//   });
  function toggleText() {
    var paragraph2 = document.getElementById('paragraph2');
    var paragraph3 = document.getElementById('paragraph3');
    var moreText = document.getElementById('more');

    if (paragraph2.style.display === 'none') {
      paragraph2.style.display = 'block';
      paragraph3.style.display = 'block';
      moreText.textContent = ' Show less';
    } else {
      paragraph2.style.display = 'none';
      paragraph3.style.display = 'none';
      moreText.textContent = '... Read more';
    }
  }
  