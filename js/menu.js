const menu1 = document.querySelector('.menu1')
const menu = document.querySelector('.menu-navegacion')


menu1.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != menu1){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})