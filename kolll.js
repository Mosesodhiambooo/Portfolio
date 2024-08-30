function toggleNav() {
    var sidenav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("mainContent");
    if (sidenav.style.width === "250px") {
      closeNav();
    } else {
      sidenav.style.width = "250px";
      mainContent.classList.add("open");
    }
  }
  
  function closeNav() {
    var sidenav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("mainContent");
    sidenav.style.width = "0";
    mainContent.classList.remove("open");
  }
  
  function scrollToSection(sectionId) {
    closeNav(); // Close the sidenav when a link is clicked
    var hash = "#" + sectionId;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900);
  }
  
  $(document).ready(function(){
    // Close the sidenav if clicking outside of it
    $(document).click(function(event) {
      if (!$(event.target).closest("#mySidenav, .navbar-toggle").length) {
        closeNav();
      }
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stats-number');
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = 2000; // Duration in milliseconds
            
            const updateCounter = () => {
                const increment = target / (speed / 100);
                count += increment;
                if (count < target) {
                    counter.textContent = Math.floor(count);
                    setTimeout(updateCounter, 100);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // Start animation on page load
    animateCounters();
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          form.reset(); // Clear the form fields
          alert("Thank you for your message! Moses We'll get back to you soon.");
      } else {
          alert("There was a problem with your submission. Please try again.");
      }
  }).catch(error => {
      alert("There was a problem with your submission. Please try again.");
  });
});


const services = document.querySelectorAll('.service');

services.forEach(service => {
    service.addEventListener('mouseover', () => {
        service.parentElement.style.animationPlayState = 'paused';
    });

    service.addEventListener('mouseout', () => {
        service.parentElement.style.animationPlayState = 'running';
    });

    service.addEventListener('click', () => {
        // Add your click event logic here
        alert(service.textContent + ' clicked!');
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('.toggle-description');

  toggleButtons.forEach(button => {
      button.addEventListener('click', function (event) {
          event.preventDefault();
          const targetId = this.getAttribute('data-target');
          const moreContent = document.getElementById(targetId);
          if (moreContent.style.display === 'block') {
              moreContent.style.display = 'none';
              this.textContent = 'Read More';
          } else {
              moreContent.style.display = 'block';
              this.textContent = 'Read Less';
          }
      });
  });
});


document.onkeydown = function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'a')) {
        e.preventDefault();
    }
};
