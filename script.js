const toggleButton = document.querySelector('.toggle-btn');
const menu = document.querySelector('.smaller-screen-navbar');

toggleButton.addEventListener('click' ,() =>{
  menu.classList.toggle('show');
})



//Meet biom vertical text scroll
const verticalText = document.getElementById('vertical-meet-biom-text');
const meetBiom = document.querySelector('.meet-biom__container');

   const verticalScroll = () => {
    let meetBiomTopSection = meetBiom.getBoundingClientRect().top;

    if(meetBiomTopSection < 1){
      verticalText.classList.add('active');
    }
      else{
         verticalText.classList.remove('active');
  } console.log(meetBiomTopSection)
    }
    
    window.addEventListener('scroll',verticalScroll)




 
