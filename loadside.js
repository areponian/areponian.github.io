// loadside.js
// Requires js-yaml (CDN link in HTML)

fetch('sidebar.yaml')
  .then(response => response.text())
  .then(text => {
    const data = jsyaml.load(text);
    const list = document.getElementById('sidebar-list');
    data.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.label;
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Failed to load sidebar:', err));
