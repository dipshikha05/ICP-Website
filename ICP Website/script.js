        function includeHTML() {
      var elements = document.querySelectorAll("[include-html]");
      elements.forEach(function(el) {
        var file = el.getAttribute("include-html");
        fetch(file)
          .then(response => {
            if (!response.ok) return;
            return response.text();
          })
          .then(data => {
            el.innerHTML = data;
          });
      });
    }
    includeHTML();


var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });