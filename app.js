
// JavaScript for smooth scrolling and navigation
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar');
  
    window.addEventListener("scroll", function () {
      const scrolled = window.scrollY > 50;
      navbar.classList.toggle('scrolled', scrolled);
    });
  });
 

  //scroll to Top

  window.onscroll = function () {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
  };

  let currentTestimonial = 0;

  function changeTestimonial(n) {
      const testimonials = document.getElementsByClassName('testimonial-slide');
      currentTestimonial += n;
 
      if (currentTestimonial >= testimonials.length) {
          currentTestimonial = 0;
      } else if (currentTestimonial < 0) {
          currentTestimonial = testimonials.length - 1;
      }
 
      for (let i = 0; i < testimonials.length; i++) {
          testimonials[i].classList.remove('active');
      }
 
      testimonials[currentTestimonial].classList.add('active');
  }