//Victor Anna Holly
//purpose: create a web page that shows your knowledge of client side web coding.
//this is for the support a project page, and it calculates the time I did for these.

const store = [
    {
        name:"This website",
        description:"This is a website started in my senior year to house my portfolio.",
        date:"Spring 2021",
        languages:"HTML, CSS, JS, JSON",
        color:"red"
    },
    {
        name:"First website",
        description:"This was the first website I had. It was not as interactive and it was static in nature. It did have some nice areas to it with how it flowed and taught me the ropes of web programming.",
        date:"Fall 2018",
        languages:"HTML, CSS, JS",
        color:"green"
    },
    {
        name:"PHP website",
        description:"This was the website from my last pure web class. It involved a local database and it is a lot more interactive and less rigid. However it is a prototype and I can not go to the server to edit it anymore.",
        date:"Spring 2019",
        languages:"HTML, CSS, JS, PHP, SQL",
        color:"red"
    },
    {
        name:"C++ Adventure Game",
        description:"This is a little game that is text based. You enter different areas of the woods and then from there can do different actions.",
        date:"Spring 2019",
        languages:"C++",
        color:"lightblue"
    
    },
    {
        name:"GrenciCPA Form application",
        description:"This is a project that I did for my capstone and it was based in C# .Net forms, and it was for the billing software for a local tax firm.",
        date:"Fall 2020",
        languages:"C#, SQL",
        color:"darkred"
    },
    {
        name:"Pokemon Battle Sim",
        description:"This is a java program that is used to display knowledge of OOP and it has a GUI where you select Pokemon then Fight.!!",
        date:"Spring 2020",
        languages:"Java",
        color:"blue"
    },
    {
        name:"Maze Game",
        description:"This is a game I made in assembly that is a maze, it uses an array as a map and has a jailbreak mode that avoids walls.",
        date:"Fall 2018",
        languages:"Assembly",
        color:"red"
    },
    {
        name:"Crime Solver",
        description:"This was a project where we input several facts into a file and made functions help narrow down facts to what is useful or not. In the end there was a way to solve the crime.",
        date:"Spring 2021",
        languages:"Prolog",
        color:"yellow"
    },
    {
        name:"Parallel Sorter",
        description:"This was a test of parallel and not messing the data up.",
        date:"Spring 2021",
        languages:"C#",
        color:"yellow"
    },
    {
        name:"Muse Engine",
        description:"This involved taking in an STL file and outputing XYZ intercepts. From there they were sent to an Arduino to react accordingly.",
        date:"Spring 2021",
        languages:"C++, Arduino, Python",
        color:"darkred"
    },
    {
        name:"Zelda Tile Run",
        description:"This was a game that I teamlead, we made a tilescroller game where you chase after tiles in an order while avoiding a skeleton.",
        date:"Spring 2020",
        languages:"Java",
        color:"red"
    },
    {
        name:"Quiz games",
        description:"I have had to make a few quiz games in my time where there were questions, math or multiple choise and it then would grade the user.",
        date:"2018-2020",
        languages:"C#, C++, Java",
        color:"green"
    },
]


document.addEventListener("DOMContentLoaded", displayProducts);

function displayProducts(){
    document.getElementById("projectDiv").innerHTML = 
    `
    <div class="row">
    ${store.map(getProject).join("")}

    </div>
    `
}

function getProject(project){
    return `
    <div class= "infoCard ${project.color} col-12 col-lg-3 col-sm-10 col-md-4">
        
        <h6>${project.name}</h6> 
        <p>${project.description} </p>
        <p>${project.date}</p>
        <span>${project.languages}</span>
        
    </div>
    
    `

}
