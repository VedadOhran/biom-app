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
    
    window.addEventListener('scroll',verticalScroll);


   //Reviews slider

    const reviews = document.querySelectorAll('.single-review');
    const dots = document.querySelectorAll('.dot');
    const current = 0;
   

    function init(n) {
  reviews.forEach((review, index) => {
    review.style.display = 'none';
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
    });
  });
  reviews[n].style.display = 'block';
  dots[n].classList.add('active');
}

  dots.forEach((dot,index) =>{
    dot.addEventListener('click', () => {
      init(index)
      current = i;
    })
  })


  const horizontalSection = document.querySelector('.horizontal-scroll');
  const horizontalScroll = document.querySelector('.horizontal-scroll__container');

  let distance = 0;

  distance = horizontalScroll.scrollWidth;

  horizontalSection.style.height = `${distance}px`;
 

  window.addEventListener('scroll', () =>{
    let vwTop = horizontalSection.getBoundingClientRect().top;
    
    if(vwTop < 0 && vwTop > -distance + horizontalSection.getBoundingClientRect().width){
      horizontalScroll.style.transform = `translateX(${vwTop}px)`;
    }
  })

  window.addEventListener('resize', () => {
    distance = horizontalScroll.scrollWidth;
    horizontalSection.style.height = `${distance}px`;
});


 
