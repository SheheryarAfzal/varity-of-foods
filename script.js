document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')

    })
})
const icons = document.querySelectorAll('.section-1-icons i');
let i = 0;

setInterval(() => {
    
    const currentIcon = document.querySelector('.section-1-icons .change');
    if (currentIcon) {
        currentIcon.classList.remove('change');
    }

    
    icons[i].classList.add('change');

    i++;

 
    if (i >= icons.length) {
        i = 0;
    }
}, 4000); 