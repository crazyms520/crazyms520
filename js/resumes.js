'use strict';

var list = ['home', 'resumes', 'projects'];
var clist = ['cresumes', 'cprojects', 'skills'];
var changePage = function changePage(Name) {
    var name = document.querySelector('.' + Name);
    for (var i = 0; i < list.length; i++) {
        document.querySelector('.' + list[i]).style.display = 'none';
        if (window.innerWidth < 400) {
            document.querySelector('#' + list[i]).style.color = 'white';
        } else {
            document.querySelector('#' + list[i]).style.color = 'rgba(128, 128, 128, 1.00)';
        }
    }
    name.style.display = 'block';
    document.querySelector('#' + Name).style.color = 'rgba(86, 201, 206, 1.00)';
};

window.onload = function () {
    changePage('projects');
    document.querySelector('.icon-bars').addEventListener('click', function () {
        var mbars = document.querySelector('.bars');
        mbars.style.display = "inline-block";
        if (mbars.style.opacity == "0" || mbars.style.opacity == "") {
            mbars.classList.add('fadein');
            mbars.classList.remove('fadeout');
            mbars.style.opacity = "1";
        } else {
            mbars.classList.add('fadeout');
            mbars.classList.remove('fadein');
        }
        console.log(mbars.style.opacity);
    });

    Object.keys(document.querySelectorAll('.lt')).map(function (element) {
        document.querySelectorAll('.lt')[element].addEventListener('click', function (event) {
            var parent = event.target.parentElement.parentElement;
            parent.children[0].children[1].children[0].src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=300%C3%97300&w=300&h=300";
        });
    });

    for (var i = 0; i < list.length; i++) {
        document.querySelector('#' + list[i]).addEventListener('click', function () {
            if (window.innerWidth < 400) {
                document.querySelector('.bars').style.display = 'none';
                document.querySelector('.bars').style.opacity = "0";
            }
            changePage(this.id);
        }, false);
    }

    var _loop = function _loop(j) {
        document.querySelector('#' + clist[j]).addEventListener('click', function () {
            if (clist[j] == 'cprojects') {
                changePage('projects');
            } else {
                changePage('resumes');
            }
        }, false);
    };

    for (var j = 0; j < clist.length; j++) {
        _loop(j);
    }
};
//# sourceMappingURL=resumes.js.map
