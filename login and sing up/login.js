document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // TODO: Patikrinti prisijungimo duomenis ir atlikti būtinas veiksmas
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;

  // TODO: Patikrinti registracijos duomenis ir atlikti būtinas veiksmas
});