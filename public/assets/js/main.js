/**
* Template Name: Appland
* Updated: Sep 25 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/free-bootstrap-app-landing-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  document.getElementById("form").addEventListener("submit", function(event) {
    var element = document.getElementById("loadingspinner");
    element.classList.add("loading");
  });
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });
})()