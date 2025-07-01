// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Dark/Light theme toggle
// const themeToggle = document.createElement('button');
// themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
// themeToggle.className = 'theme-toggle';
// document.body.appendChild(themeToggle);

// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('light-theme');
//     const icon = themeToggle.querySelector('i');
//     icon.classList.toggle('fa-moon');
//     icon.classList.toggle('fa-sun');
// });

// // Project cards with modal
// const projectCards = document.querySelectorAll('.project-card');
// projectCards.forEach(card => {
//     card.addEventListener('click', () => {
//         const title = card.querySelector('h3').textContent;
//         const description = card.querySelector('p').textContent;
        
//         const modal = document.createElement('div');
//         modal.className = 'modal';
//         modal.innerHTML = `
//             <div class="modal-content">
//                 <span class="close">&times;</span>
//                 <h2>${title}</h2>
//                 <p>${description}</p>
//             </div>
//         `;
        
//         document.body.appendChild(modal);
        
//         modal.querySelector('.close').addEventListener('click', () => {
//             modal.remove();
//         });
        
//         modal.addEventListener('click', (e) => {
//             if (e.target === modal) {
//                 modal.remove();
//             }
//         });
//     });
// });

// // Scroll progress indicator
// const progressBar = document.createElement('div');
// progressBar.className = 'progress-bar';
// document.body.appendChild(progressBar);

// window.addEventListener('scroll', () => {
//     const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = (window.scrollY / windowHeight) * 100;
//     progressBar.style.width = `${scrolled}%`;
// });

// // AJAX form submission for better UX
// const contactForm = document.getElementById('contactForm');
// const formStatus = document.getElementById('formStatus');

// if (contactForm) {
//     contactForm.addEventListener('submit', async (e) => {
//         e.preventDefault();
//         formStatus.textContent = 'Sending...';
//         const formData = new FormData(contactForm);
//         try {
//             const response = await fetch(contactForm.action, {
//                 method: 'POST',
//                 body: formData,
//                 headers: {
//                     'Accept': 'application/json'
//                 }
//             });
//             if (response.ok) {
//                 formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
//                 contactForm.reset();
//             } else {
//                 formStatus.textContent = 'Oops! There was a problem submitting your form.';
//             }
//         } catch (error) {
//             formStatus.textContent = 'Oops! There was a problem submitting your form.';
//         }
//     });
// }

// // Hamburger menu functionality for mobile navigation
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.getElementById('mainNav');

// if (hamburger && navMenu) {
//     hamburger.addEventListener('click', () => {
//         navMenu.classList.toggle('show');
//     });
//     // Close menu when a link is clicked (on mobile)
//     navMenu.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', () => {
//             navMenu.classList.remove('show');
//         });
//     });
// }

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark/Light theme toggle
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Project cards with modal
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        const description = card.querySelector('p').textContent;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${title}</h2>
                <p>${description}</p>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.close').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    });
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${scrolled}%`;
});

// AJAX form submission for better UX
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        formStatus.textContent = 'Sending...';
        const formData = new FormData(contactForm);
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                contactForm.reset();
            } else {
                formStatus.textContent = 'Oops! There was a problem submitting your form.';
            }
        } catch (error) {
            formStatus.textContent = 'Oops! There was a problem submitting your form.';
        }
    });
}

// Hamburger menu functionality for mobile navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('mainNav');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
}

