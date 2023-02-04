const humberger = document.querySelector('.humberger');
const navLink=document.querySelector('.nav-link')

humberger.addEventListener('click',() => {
   navLink.classList.toggle('hide')
});