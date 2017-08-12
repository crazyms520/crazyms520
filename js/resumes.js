'use strict';

window.onload = function () {
    document.querySelector('.icon-bars').addEventListener('click', function () {
        var result = document.querySelector('.mbars').style.display;
        console.log(document.querySelector('.mbars').style.display);
        console.log(result);
        if (result == '' || result == 'none') {
            document.querySelector('.mbars').style.display = 'block';
        } else {
            document.querySelector('.mbars').style.display = 'none';
        }
    });
};
//# sourceMappingURL=resumes.js.map
