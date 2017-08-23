const list       = ['home', 'resumes', 'projects'];
const clist      = ['cresumes', 'cprojects', 'skills'];
let counter = 1;

let changePage = (Name) => {
    let name = document.querySelector('.'+Name);
    for (let i = 0; i < list.length; i++) {
        document.querySelector('.'+list[i]).style.display = 'none';
        if(window.innerWidth < 400) {
            document.querySelector('#'+list[i]).style.color = 'white';
        } else {
            document.querySelector('#'+list[i]).style.color = 'rgba(128, 128, 128, 1.00)';
        }
    }
    name.style.display = 'block';
    document.querySelector('#'+Name).style.color = 'rgba(86, 201, 206, 1.00)';
}
let showImg = (event,direction) => {
    let parent  = event.target.parentElement.parentElement,
        items   = parent.children[0].children[1].childElementCount;
        console.log(items);
        if(direction == 'lt') {
            counter--;  
            if(counter == 0) {
                counter = items;    
            }
        } else {
            counter++;   
            if(counter == (++items)) {
                counter = 1
            }         
        }
    console.log(counter);
    parent.children[0].children[1].children[0].src = `images/0${counter}.jpeg`;
}

window.onload = () => {
    let a = document.querySelector('#project1');
    changePage('projects');
    document.querySelector('.icon-bars').addEventListener('click', () => {
        let mbars = document.querySelector('.bars');
        mbars.style.display = "inline-block";
        if(mbars.style.opacity == "0" || mbars.style.opacity == "" ) {
            mbars.classList.add('fadein');
            mbars.classList.remove('fadeout');
            mbars.style.opacity = "1";
        } else {
            mbars.classList.add('fadeout');  
            mbars.classList.remove('fadein');
        }
        console.log(mbars.style.opacity);
    });    

    Object.keys(document.querySelectorAll('.lt')).map(function(element){
        document.querySelectorAll('.lt')[element].addEventListener('click', (event) => {
            showImg(event,'lt');
        });
    });

    Object.keys(document.querySelectorAll('.gt')).map(function(element){
        document.querySelectorAll('.gt')[element].addEventListener('click', (event) => {
            showImg(event,'gt');
        });
    });

    for (let i = 0; i < list.length; i++) {
        document.querySelector('#'+ list[i]).addEventListener('click',function(){
            if(window.innerWidth < 400) {
                document.querySelector('.bars').style.display = 'none';
                document.querySelector('.bars').style.opacity = "0";
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