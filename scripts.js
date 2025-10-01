// change color theme when button is clicked
function button_one_function(){
  console.log("Button one clicked!");

  document.body.classList.add('button-clicked');

}

const button1 = document.getElementById("button-one");
button1.addEventListener('click', button_one_function);

// Time of day change heading
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.body-text h1');
  const hour = new Date().getHours();
  let greeting = "Hi, I'm AnnaMarie!";

  if (hour < 12) {
    greeting = "Good morning, I'm AnnaMarie!";
  } else if (hour < 18) {
    greeting = "Good afternoon, I'm AnnaMarie!";
  } else {
    greeting = "Good evening, I'm AnnaMarie!";
  }

  header.textContent = greeting;
});

// Hide / show hobby list
document.getElementById('toggle-hobbies').addEventListener('click', () => {
  const list = document.querySelector('.body-text ul');
  list.classList.toggle('hidden');
});
