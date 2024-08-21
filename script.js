function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablink" and remove the class "active"
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Display the first tab by default
document.getElementById("Education").style.display = "block";


document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-list').classList.toggle('active');
});


document.getElementById('viewCvBtn').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;

  // Create a new PDF document
  const doc = new jsPDF();

  // Add CV content to the PDF
  doc.text("Curriculum Vitae", 10, 10);
  doc.text("Name: John Doe", 10, 20);
  doc.text("Email: john.doe@example.com", 10, 30);
  doc.text("Phone: +1234567890", 10, 40);
  // Add more CV details here as needed

  // Save the PDF
  doc.save('cv.pdf');
});