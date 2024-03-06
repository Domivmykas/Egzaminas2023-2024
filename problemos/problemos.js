let dropdown = document.getElementById('dropdownMenu');
let button = document.getElementById('dropdownButton');

button.addEventListener('click', function() {
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
    dropdown.style.display = 'block';
    dropdown.style.animation = 'slide-in 0.5s forwards';
  } else {
    dropdown.style.display = 'none';
  }
});

function closeDropdown(event) {
  dropdown.style.display = 'none';
}