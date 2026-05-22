// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal-on-scroll for timeline items, stats, edu cards
const revealTargets = document.querySelectorAll(
    '.timeline-item, .stat, .edu-card, .skill-group, .about-text'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => io.observe(el));
