//Victor Stahlman cis 270
//purpose: create a web page that shows your knowledge of client side web coding.

//this is used for having a constant header/footer for the pages of the site

//event listener that runs the header when the page gets loaded
document.addEventListener("DOMContentLoaded", displayheader);

// sets up a header and nav that is shared between all the pages
function displayheader() {
    try {
        document.getElementById("headerid").innerHTML =
            '<div class="fluid container" id="pagetop"> ' +
            '<header class= "pagehead"> <h1 id ="titlehead" > V.Stahlman </h1> </header><!--the little rectagle with V.Stahlman at the top left of the header of the page, and the background to the header is done with css--> ' +

            '<nav class="navbar navbar-expand-md navbar-dark"><!--sets up a nav and uses some bootstrap-->' +
            '<a class="navbar-brand   d-lg-block" href="home.html">Couple Home</a>' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
            '</button><!--this is stuff for that "hamburger" button-->' +

            '<div class="collapse navbar-collapse" id="navbarSupportedContent"><!--stuff that is dynamic, as in it can go in and out of the hamburger-->' +
            '<ul class="navbar-nav mr-auto">' +
            '<li class="nav-item ">' +
            '<a class="nav-link" href="../view/homeV.html"> My Home</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/aboutVictor.html">About</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/contactVictor.html">Contacts</a>' +
            '</li>' +

            '<!--dropdown with likely additions for the site-->' +
            '<li class="nav-item dropdown">' +
            '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
            'Projects' +
            '</a>' +
            '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
            '<p class="dropdown-item "> These are under construction. </p>' +
            '<div class="dropdown-divider"></div>' +
            '<a class="dropdown-item" href="projects.html">Projects Overview</a>' +
            '<a class="dropdown-item" href="https://vcisprod.clarion.edu/~s_vcstahlman/">Link to Old PHP Website</a>' +
            '</div>' +
            '</li>' +

            '<!--dropdown for the admin stuff including grading-->' +


            '</ul>' +
            '</div>' +
            '</nav>'
    }
    //       '<header  class="pagehead">' +
    //         '<h1 id="titlehead"> VCStahlman</h1> '+
    //       '</header> ' +
    //       '<nav class="navhead">' +
    //         '<a href="home.html"> Home  </a>' +
    //         '<a href="about.html">| About Me  </a>' +
    //        '<div class="dropdown"><a href="project.html">  <u>| Projects </u></a>' +//this is a dropdown in the nav that has links to stuff in the project page
    //         '<p class="dropdown-content">' +
    //           '<a href=""> project 1 </a> <br>' +
    //           '<a href="" > Project 2 </a> <br>' +
    //           '<a href="https://vcisprod.clarion.edu/~s_vcstahlman/" >  Old PHP website </a> <br>' +
    //           '<a href=""> Project 4 </a>' +
    //         '</p>' +
    //        '</div>' +
    //       '</nav>'}
    catch (load) {
        //if not able to find display header it will continue without trying agian till new page
    }
}


//event listener that runs the header when the page gets loaded
document.addEventListener("DOMContentLoaded", displayheaderM);

// sets up a header and nav that is shared between all the pages
function displayheaderM() {
    try {
        document.getElementById("headeridM").innerHTML =
            '<div class="fluid container" id="pagetop"> ' +
            '<header class= "pageheadM"> <h1 id ="titleheadM" > M.Williams </h1> </header>' +

            '<nav class="navbar navM navbar-expand-md navbar-dark"><!--sets up a nav and uses some bootstrap-->' +
            '<a class="navbar-brand   d-lg-block" href="home.html">Couple Home</a>' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
            '</button><!--this is stuff for that "hamburger" button-->' +

            '<div class="collapse navbar-collapse" id="navbarSupportedContent"><!--stuff that is dynamic, as in it can go in and out of the hamburger-->' +
            '<ul class="navbar-nav mr-auto">' +
            '<li class="nav-item ">' +
            '<a class="nav-link" href="../view/homeM.html">My Home </a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/aboutMaddie.html">About</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/contactMaddie.html">Contacts</a>' +
            '</li>' +
            '<li class="nav-item">' +
            '<a class="nav-link" href="../view/lessons.html">Lessons</a>' +
            '</li>' +

            '<!--dropdown for the admin stuff including grading-->' +


            '</ul>' +
            '</div>' +
            '</nav>'
    }
    
    catch (load) {
        //if not able to find display header it will continue without trying agian till new page
    }
}

//sets up a footer that is constant between the pages
document.addEventListener("DOMContentLoaded", displayfooter);

function displayfooter() {
    try {
        document.getElementById("footerid").innerHTML =
            '<div class=" fluid container" id="pagebottom"> <!-- div for styling and responsiveness-->' +
            '<footer>' +
            '<h6 class="text-center">Made by <a href="mailto:vicstahlman@gmail.com">Victor Stahlman</a></h6>    <!--has an email link after saying it was made by me-->' +
            '<p class="text-center"> V.Stahlman 2021</p>   ' + //Copyright &copy;
            '<p class="text-center">Brought to you by my need to have a job XD</p>' +
            '</footer>' +
            '</div>'
    } catch (load) {}
}

document.addEventListener("DOMContentLoaded", displayfooterM);

function displayfooterM() {
    try {
        document.getElementById("footeridM").innerHTML =
            '<div class=" fluid container" id="pagebottomM"> <!-- div for styling and responsiveness-->' +
            '<footer>' +
            '<h6 class="text-center">Made for <a href="mailto:ms.willaimswonderfulworld@gmail.com">Maddie Willaims </a></h6>    <!--has an email link after saying it was made by me-->' +
            '<p class="text-center"> V.Stahlman 2021</p>   ' + //Copyright &copy;
            '<p class="text-center">Thank you for visiting!!</p>' +
            '</footer>' +
            '</div>'
    } catch (load) {}
}