(function () {
  const checks = document.querySelectorAll('#quickChecklist input[type="checkbox"]');
  const status = document.getElementById('checklistStatus');

  if (!checks.length || !status) {
    return;
  }

  const keyPrefix = 'portfolio_e45_';

  checks.forEach((cb) => {
    const key = keyPrefix + cb.dataset.key;
    const saved = localStorage.getItem(key);
    cb.checked = saved === '1';

    cb.addEventListener('change', () => {
      localStorage.setItem(key, cb.checked ? '1' : '0');
      updateStatus();
    });
  });

  function updateStatus() {
    const total = checks.length;
    const done = Array.from(checks).filter((cb) => cb.checked).length;
    status.textContent = done + '/' + total + ' valide';
    status.style.color = done === total ? '#1f8b4c' : '#0f8b8d';
  }

  updateStatus();
})();
