const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




// Modal functionality
  function openProject(projectId) {
    const modal = document.getElementById("projectModal");
    const modalContent = document.getElementById("modalContent");
    
    // Clear old content
    modalContent.innerHTML = "";

    // Example: Load screenshots based on project
    let screenshots = [];
    if (projectId === "project1") {
      screenshots = ["./ss1.png", "./ss2.png", "./ss3.png", "./ss4.png", "./ss5.png", "./ss6.png", "./ss7.png", "./ss8.png", "./ss9.png", "./ss10.png", "./ss11.png", "./ss12.png", "./ss13.png", "./ss14.png", "./ss15.png", "./ss16.png", "./ss17.png", "./ss18.png", "./ss19.png", "./ss20.png", "./ss21.png", "./ss22.png", "./ss23.png", "./ss24.png", "./ss25.png", "./ss26.png", "./ss27.png", "./ss28.png", "./ss29.png"];
    } else if (projectId === "project2") {
      screenshots = ["./sp1.png", "./sp2.png","./sp3.png", "./sp4.png", "./sp5.png"];
    } else if (projectId === "project3") {
      screenshots = ["./ms_player.png"];
    }

    // Add screenshots to modal
    screenshots.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      modalContent.appendChild(img);
    });

    modal.style.display = "block";
  }

  function closeProject() {
    document.getElementById("projectModal").style.display = "none";
  }

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('Message sent successfully! 🎉');
      document.getElementById('contact-form').reset(); // clear form
    }, function(error) {
      alert('Oops! Something went wrong...', error);
    });
});
