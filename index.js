const menuButton = document.querySelectorAll('#action');
console.log('menuButton', menuButton);

menuButton.forEach(button =>
  button.addEventListener('click', _ => {
    console.log('You clicked me!');
    document.getElementById('sidebar').classList.toggle('collapsed');
  })
);
