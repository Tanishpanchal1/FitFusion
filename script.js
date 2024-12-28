const header = document.querySelector('.headerhead');
const summer = document.querySelector('.summer');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'white'; // Change to green
    header.style.color = 'black';
    summer.style.color='black';
    document.getElementById("loginbar").style.display="none"
    


  } 
  
});

window.addEventListener('scroll', () => {
if (window.scrollY ==0) {
    header.style.backgroundColor = 'black'; // Change to green
    header.style.color = 'white';
    summer.style.color='white';

}

});


document.getElementById("login").addEventListener("click", () =>{
    document.getElementById("loginbar").style.display="block"
    document.getElementById("loginbar").style.transition="5s"
    
})



