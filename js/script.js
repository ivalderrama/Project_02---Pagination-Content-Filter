var students = document.getElementsByClassName('student-item'); // get a list of students and assign to students array
var studentCount = students.length;                             // get students count
var totalPages = Math.ceil(studentCount/10);                    // dividing by 10 to get number of pages and rounding up

var page = document.querySelector(".page");                     // assigning page class to a variable
var pageDiv = document.createElement("div");                    // creating div element and assigning to a variable
var pageUL = document.createElement("ul");                      // creating ul element and assigning to a variable

var pageLI = document.createElement("li");                      // creating li element and assigning to a variable

//pageOne()
fetchPage(0);                                                   // calling the fetchPage function and assigning the pageNumber parameter

pageDiv.className = "pagination";                               // adding classname to the div element
page.appendChild(pageDiv);                                      // appending div to page (div with page classname)
pageDiv.appendChild(pageUL);                                    // appending ul to pageDiv

for (let i = 1; i <= totalPages; i++) {                         // creating a for loop that will determine the amount of pages
    var pageLI = document.createElement("li");                  // within the for loop li is appended as child to ul and a appended as child to li
    pageUL.appendChild(pageLI);                                 // to give create the following:
    var pageLink = document.createElement("a");                 //  <li>
    pageLink.textContent = i;                                   //    <a>i</a>  (i being the number)
    pageLI.appendChild(pageLink);                               //  </li>
}

var pageLinks = document.querySelectorAll('.pagination li');    // getting a list of pagination li's and assigning to pageLinks array

// creating a for loop (similar to what i did before, but instead of creating an event listener for each one, have placed it in a for loop)
for (let i = 0; i < pageLinks.length; i++) {
    pageLinks[i].addEventListener('click', function () {        // and assigning an event listener to each li element
        fetchPage(i);                                           // function is called with i as the argument
    });
}

// the function below is similar to the functions I had created below, but instead of having a seperate function for each, have placed it
// a for loop and incorporating the logic
// the parameter within the function will be the argument i from the above for loop
function fetchPage(pageNumber) {
    var students = document.getElementsByClassName('student-item');
    for (let i = 0; i < students.length; i++) {
        if (i >= (pageNumber * 10) && i <= (pageNumber * 10) + 9) {     // checking if 'i' fell within the number range to determine whether student will be displayed
            students[i].hidden = false;
        } else {
            students[i].hidden = true;
        }
    }
}

/*
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
*/

// Functions below created to load display 10 items per page
/*
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
*/
