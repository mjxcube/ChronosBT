// Tab switching
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const tabId = tab.dataset.tab;
    tabContents.forEach(tc => {
      tc.classList.toggle('active', tc.id === tabId);
    });
  });
});

// Dropdown toggle
const toggles = document.querySelectorAll('button.toggle');
toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const sub = btn.parentElement.nextElementSibling;
    if(sub) sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
    btn.textContent = btn.textContent === '+' ? '−' : '+';
  });
});
