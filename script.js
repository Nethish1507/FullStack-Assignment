// ---- Tab switching logic ----
  const tabButtons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(p => p.classList.remove('active'));
      document.getElementById('panel-' + target).classList.add('active');
    });
  });

  // ---- Settings toggle logic ----
  document.querySelectorAll('[data-toggle]').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
    });
  });

  // ---- Support deep-linking via #tabname (used for screenshots/demo) ----
  const initial = window.location.hash.replace('#', '');
  if (initial) {
    const match = document.querySelector('.tab-btn[data-tab="' + initial + '"]');
    if (match) match.click();
  }
