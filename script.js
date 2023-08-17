



window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Function to open the PDF file when the link is clicked
/*function openPDF() {
  // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
  var pdfFilePath = 'panducv.pdf';

  // Open the PDF in a new window/tab
  window.open(pdfFilePath, '_blank');
}

// Add a click event listener to the link
var pdfLink = document.getElementById('x');
pdfLink.addEventListener('click', openPDF);*/


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


