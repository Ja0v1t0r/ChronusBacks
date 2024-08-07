const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  let button = document.getElementsByClassName(".contatobtn");
  let Contato = document.getElementById("#Contato");
  button.addEventListener('click', ()=>{
    window.scrollTo("Contato")
  })

function visitPage()
{
   addEventListener
}