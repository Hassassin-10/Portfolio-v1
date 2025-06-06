const projectVideos = document.querySelectorAll('.project-vidbox video');
const hoverSigns = document.querySelectorAll('.hover-sign');

projectVideos.forEach((video, index) => {
    const hoverSign = hoverSigns[index];
    
    video.addEventListener('mouseover', () => {
        video.play();
        if (hoverSign) hoverSign.classList.add('active');
    });
    
    video.addEventListener('mouseout', () => {
        video.pause();
        if (hoverSign) hoverSign.classList.remove('active');
    });
});

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeIcon = document.querySelector('.close-icon');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('active');
});