document.getElementById('volbutton').addEventListener('click', function() {
    var forms = document.getElementById('inputForms');
    if (forms.classList.contains('hidden')) {
      forms.classList.remove('hidden');
      document.getElementById('volbutton').textContent = 'Close Volunteer Contact Forms';
    } else {
      forms.classList.add('hidden');
      document.getElementById('volbutton').textContent = 'Open Volunteer Contact Forms';
    }
  });