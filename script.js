const navToggleBtn = document.querySelector('.nav-btn-toggle');
const nav = document.querySelector('.nav');


navToggleBtn.addEventListener('click',() => { 
  const visible = nav.getAttribute('data-visibility');
  const active = navToggleBtn.getAttribute('data-active');

  if(visible === 'false'){
        nav.setAttribute('data-visibility', true);
        navToggleBtn.setAttribute('data-active', true);
    } else{
        nav.setAttribute('data-visibility', false);
        navToggleBtn.setAttribute('data-active', false);
    }
})