// Style table
function button_two_function(){
    console.log("Button two clicked!");
    
    const rows = document.querySelectorAll('table tr');
    
    rows.forEach((row, i) => {
      if (i>0 && i%2 ===0){
        row.classList.add('even');
      }
    });
    
  }
  const button2 = document.getElementById("button-two");
  button2.addEventListener('click', button_two_function);
