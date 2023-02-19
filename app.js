// Switch between rating and thank you 

const ratingComp = document.getElementById("rating-comp");
const thankComp = document.getElementById("thank-comp");
const ratingsRes = document.getElementById("rating-rslt");

let buttons = document.querySelectorAll('.rating__btn');



function show_btn(){
    thankComp.style.display = 'block';
    ratingComp.style.display = 'none';
}

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let result = buttons[i].value
        ratingsRes.textContent = `You selected ${result} out of 5`
  
    })   
}

// Extra Added Feature 
// Need to figure out how to add an alert when a rating is not selected
// but the submit button is clicked 
// Also add a close icon that returns to rating-comp block
