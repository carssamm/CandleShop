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
  }
  
  // Closes the sidebar, resets the width and left margin of the title,
  // shows the off-canvas symbol, and resets the background color of the header and body
  function closeNav() {
    document.getElementById("SideNavID").style.width = "0";
    document.getElementById("title").style.marginLeft = "0";
    document.getElementById("offcanvasymbol").style.visibility = "visible";
    document.getElementById("header").style.background = "#d9d9d9";
    document.body.style.backgroundColor = "#f0f0f0";
  }
  
  // Shows the dropdown menu by adding the 'active' CSS class
  function showDropDown() {
      var dropDownElements = document.querySelector('.drpdwn-content');
      dropDownElements.classList.add('active');
  }
  
  // Hides the dropdown menu by removing the 'active' CSS class
  function hideDropDown() {
      var dropDownElements = document.querySelector('.drpdwn-content');
      dropDownElements.classList.remove('active');
  }
  
  // Adds an event listener to reload the page when the window resolution changes
  window.addEventListener('resize', function() {
      location.reload();
  });
  