const headerHTML = ` <section class="navigation">
    
      <nav class="navigation">
      <img class="cs--logo" src="images/comScience_logo.png" alt="logo">
        <div class="navbar">
          <ul>
            <i id="menu-close" class="fa fa-times"></i>
            <li><a class="active" href="Home.html">Home</a></li>
            <li><a href="About.html">About</a></li>
          <li><a href="undergraduate.html">Undergraduate</a></li>
          <li><a href="Faculty.html">Faculty</a></li>
          <li><a href="Research.html">Research</a></li>
          <li><a href="Resources.html">Resources</a></li>
          <li><a href="Events.html">Events</a></li>
          <li><a href="Contact Us.html">Contact Us</a></li>
          </ul>
          <i id="menu-btn" class="fa fa-bars"></i>
        </div>
      </nav>
    </section>
`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar ul li a");
  const currentPage = window.location.pathname;

  navLinks.forEach(function (link) {
    const linkPath = link.getAttribute("href");
    // Check if the link's path is part of the current page's path
    if (currentPage.includes(linkPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
