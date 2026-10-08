document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const subject = this.querySelector('select').value;
  const message = this.querySelector('textarea').value.trim();

  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href =
    `mailto:youssef.3m.zidan@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
