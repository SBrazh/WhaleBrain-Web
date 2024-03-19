// JavaScript code to handle language selection
document.getElementById('tg-button-link').addEventListener('click', function() {
  window.location.href = 'https://t.me/whalebrain_bot';
});

// Add event listeners to language buttons
document.querySelectorAll('.flag-button').forEach(function(button) {
  button.addEventListener('click', function() {
      var selectedLanguage = this.getAttribute('data-lang');
      if (selectedLanguage === 'en') {
          // Reload the page with English content
          window.location.href = 'index.html'; // Replace 'index.html' with your English page URL
      } else if (selectedLanguage === 'ru') {
          // Fetch and load the Russian version of the page
          fetch('index_ru.html')
              .then(response => response.text())
              .then(html => {
                  document.open();
                  document.write(html);
                  document.close();
              })
              .catch(error => console.error('Error fetching Russian content:', error));
      }
  });
});
