var mobileMenubtn=document.querySelector("#mobile-menu-btn");
var mobile_menu=document.querySelector('.mobile-menu');

mobileMenubtn.addEventListener("click",()=>{
    if(mobile_menu.style.display=='none')
    {
        mobile_menu.style.display='flex';
        mobileMenubtn.innerHTML='Close';
    }
    else
    {
        mobile_menu.style.display='none';
        mobileMenubtn.innerHTML='Menu';
    }
})

