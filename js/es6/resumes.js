const list       = ['home', 'resumes', 'projects'];
const clist      = ['cresumes', 'cprojects', 'skills'];
let   changePage = (Name) => {
    let name = document.querySelector('.'+Name);
    for (let i = 0; i < list.length; i++) {
        document.querySelector('.'+list[i]).style.display = 'none';
        if(window.innerWidth < 400) {
            document.querySelector('#'+list[i]).style.color = 'white';
        } else {
            console.log(window.innerWidth)
            document.querySelector('#'+list[i]).style.color = 'rgba(128, 128, 128, 1.00)';
        }
    }
    name.style.display = 'block';
    document.querySelector('#'+Name).style.color = 'rgba(86, 201, 206, 1.00)';
} 

window.onload = () => {
    document.querySelector('.icon-bars').addEventListener('click', () => {
        let mbars = document.querySelector('.bars');
        if(mbars.style.display == '' || mbars.style.display == 'none') {
            mbars.style.display = 'inline-block';            
        } else {
            mbars.style.display = 'none';            
        }
    });

    for (let i = 0; i < list.length; i++) {
        document.querySelector('#'+ list[i]).addEventListener('click',function(){
            if(window.innerWidth < 400) {
                document.querySelector('.bars').style.display = 'none';
            }
            changePage(this.id);
        },false);
        
    }
    for (let j = 0; j < clist.length; j++) {
        document.querySelector('#'+ clist[j]).addEventListener('click',function(){    
            if(clist[j] == 'cprojects') {
                changePage('projects');
            } else {
                changePage('resumes');
            }
        },false);
    }
}