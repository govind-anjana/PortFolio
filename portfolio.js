let sections =document.querySelectorAll('section');
let navlink =document.querySelectorAll('ul li a');
window.onscroll =()=>{
    // console.log("run");
    
    sections.forEach(sec=>{
        let top= window.scrollY;
        let offset=sec.offsetTop-200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset +height){
            navlink.forEach(links => {
                links.classList.remove('active');
            })
               const  g= document.querySelector(`ul li a[href='#${id}']`).classList.add('active');
          
               
        }
        
    })
}
