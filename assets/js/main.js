// === Update this to your real domain when known ===
window.SITE_URL = "https://namrathaandvamsi.com"; // e.g., "https://yourdomain.com"

// mobile nav
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// RSVP success interstitial (Formspree returns a redirect-less success with JS fetch; keep simple)
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', async (e) => {
    // If action is left as placeholder, let normal submit happen to show a warning on Formspree
    if (rsvpForm.action.includes('your-form-id')) return;
    e.preventDefault();
    const data = new FormData(rsvpForm);
    try {
      const res = await fetch(rsvpForm.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        document.getElementById('rsvpThanks')?.removeAttribute('hidden');
        rsvpForm.reset();
      } else {
        alert('There was an issue sending your RSVP. Please try again or email us.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  });
}
