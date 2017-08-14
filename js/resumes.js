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
            console.log(window.innerWidth);
            document.querySelector('#' + list[i]).style.color = 'rgba(128, 128, 128, 1.00)';
        }
    }
    name.style.display = 'block';
    document.querySelector('#' + Name).style.color = 'rgba(86, 201, 206, 1.00)';
};

window.onload = function () {
    document.querySelector('.icon-bars').addEventListener('click', function () {
        var mbars = document.querySelector('.bars');
        if (mbars.style.display == '' || mbars.style.display == 'none') {
            mbars.style.display = 'inline-block';
        } else {
            mbars.style.display = 'none';
        }
    });

    for (var i = 0; i < list.length; i++) {
        document.querySelector('#' + list[i]).addEventListener('click', function () {
            if (window.innerWidth < 400) {
                document.querySelector('.bars').style.display = 'none';
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
