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


function handleSubmit() {
    // Get the form element
    const form = document.getElementById('contact-form');
    
    // Perform form submission (e.g., using AJAX)
    // For demo purposes, we'll simply clear the form
    
    // Clear the textarea
    document.getElementById('message').value = '';
    
    // Prevent the default form submission
    return false;
}


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
