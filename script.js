console.log("JavaScript is connected!");
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
        //change button text based on mode 
        if (document.body.classList.toggle contains( 'dark-mode' )) {
            toggle.Btn.textContent = 'Light Mode';
        } else {
            toggle.BtntextContent = 'Dark Mode'
              }
    });
    const texts = [
        "Welcome to Voltcare Batteries!",
        "Your trusted source for quality reconditioned batteries.",
        "Powering your devices with reliability and sustainability.",
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  const typingElement = document.getElementById('typing-headline');

    function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        }  else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    typeEffect();
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 250) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.classList.remove('hidden');
                } else {
                    project.classList.add('hidden');
                }
            });
        });
    });
    const revealFactButton = document.getElementById('reveal-fact');
    const funfact= document.getElementById('fun-fact');
    revealFactButton.addEventListener('click', function() {
        funfact.textContent = "Did you know? Reconditioned batteries can save up to 80% of the energy and resources compared to new ones!";
   //toggle the fact visibility
   funfact.classList.toggle('visible');
   // change button text based on visibility
   if(funfact.classList.contains('visible')) {
       revealFactButton.textContent = 'Hide Fun Fact';
   } else {
       revealFactButton.textContent = 'Reveal Fun Fact';
   }

