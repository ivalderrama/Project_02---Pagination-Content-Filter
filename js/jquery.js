

var pg1 = document.querySelectorAll('.pagination li')[0];
pg1.addEventListener('click', function () {
    pageOne();
});

var pg2 = document.querySelectorAll('.pagination li')[1];
pg2.addEventListener('click', function () {
    pageTwo();
});

var pg3 = document.querySelectorAll('.pagination li')[2];
pg3.addEventListener('click', function () {
    pageThree();
});


var pg4 = document.querySelectorAll('.pagination li')[3];
pg4.addEventListener('click', function () {
    pageFour();
});

var pg5 = document.querySelectorAll('.pagination li')[4];
pg5.addEventListener('click', function () {
    pageFive();
});

var pg6 = document.querySelectorAll('.pagination li')[5];
pg6.addEventListener('click', function () {
    pageSix();
});


/*
$(document).ready(function() {
    $('#one').click(function(){
       pageOne();
    });
    $('#two').click(function(){
        pageTwo();
    });
    $('#three').click(function(){
        pageThree();
    });
    $('#four').click(function(){
        pageFour();
    });
    $('#five').click(function(){
        pageFive();
    });
    $('#six').click(function(){
        pageSix();
    });
});
*/

//pageSix();
// document.getElementsByTagName('a')[0].addEventListener("click", pageOne, false);
// document.getElementsByTagName('a')[1].addEventListener("click", pageTwo, false);
// document.getElementsByTagName('a')[2].addEventListener("click", pageThree, false);
// document.getElementsByTagName('a')[3].addEventListener("click", pageFour, false);
// document.querySelectorAll('.pagination li')[4].addEventListener("click", pageFive, false);
// document.querySelectorAll('.pagination li')[5].addEventListener("click", pageSix, false);

// document.getElementsByTagName('a')[2].addEventListener("click", pageThree, false);
// $('.pagination li:eq(0)').on('click', function () {
//     pageOne();
// });
// $('.pagination li:eq(1)').on('click', function () {
//     pageTwo();
// });
// $('.pagination li:eq(2)').on('click', function () {
//     pageThree();
// });
// $('.pagination li:eq(3)').on('click', function () {
//     pageFour();
// });
// $('.pagination li:eq(4)').on('click', function () {
//     pageFive();
// });
// $('.pagination li:eq(5)').on('click', function () {
//     pageSix();
// });


function pageOne () {
    var students = document.getElementsByClassName('student-item');
    for (let i = 10; i < students.length; i++) {
        students[i].hidden = true;
    }
}

function pageTwo () {
    var students = document.getElementsByClassName('student-item');
    for (let i = 0; i < 10; i++) {
        for (let j = 20; j <students.length; j++ ) {
            students[i].hidden = true;
            students[j].hidden = true;
        }
    }
}

function pageThree () {
    var students = document.getElementsByClassName('student-item');
    for (let i = 0; i < 20; i++) {
        for (let j = 30; j <students.length; j++ ) {
            students[i].hidden = true;
            students[j].hidden = true;
        }
    }
}

function pageFour () {
    var students = document.getElementsByClassName('student-item');
    for (let i = 0; i < 30; i++) {
        for (let j = 40; j <students.length; j++ ) {
            students[i].hidden = true;
            students[j].hidden = true;
        }
    }
}

function pageFive () {
    var students = document.getElementsByClassName('student-item');
    for (let i = 0; i < 40; i++) {
        for (let j = 50; j <students.length; j++ ) {
            students[i].hidden = true;
            students[j].hidden = true;
        }
    }
}

function pageSix () {
    var students = document.getElementsByClassName('student-item');
    for (let i = 0; i < 50; i++) {
        students[i].hidden = true;
    }
}


/*
function pageOne () {
    $(document).ready(function () {
        var students = document.getElementsByClassName('student-item');
        for (let i = 10; i < students.length; i++) {
            students[i].hidden = true;
        }
    });
}

function pageTwo () {
    $(document).ready(function () {
        var students = document.getElementsByClassName('student-item');
        for (let i = 0; i < 10; i++) {
            for (let j = 20; j <students.length; j++ ) {
                students[i].hidden = true;
                students[j].hidden = true;
            }
        }
    });
}

function pageThree () {
    $(document).ready(function () {
        var students = document.getElementsByClassName('student-item');
        for (let i = 0; i < 20; i++) {
            for (let j = 30; j <students.length; j++ ) {
                students[i].hidden = true;
                students[j].hidden = true;
            }
        }
    });
}

function pageFour () {
    $(document).ready(function () {
        var students = document.getElementsByClassName('student-item');
        for (let i = 0; i < 30; i++) {
            for (let j = 40; j <students.length; j++ ) {
                students[i].hidden = true;
                students[j].hidden = true;
            }
        }
    });
}

function pageFive () {
    $(document).ready(function () {
        var students = document.getElementsByClassName('student-item');
        for (let i = 0; i < 40; i++) {
            for (let j = 50; j <students.length; j++ ) {
                students[i].hidden = true;
                students[j].hidden = true;
            }
        }
    });
}

function pageSix () {
    $(document).ready(function () {
        var students = document.getElementsByClassName('student-item');
        for (let i = 0; i < 50; i++) {
            students[i].hidden = true;
        }
    });
}
*/

