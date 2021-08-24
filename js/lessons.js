//Victor Anna Holly
//purpose: create a web page that shows your knowledge of client side web coding.
//this is for the support a project page, and it calculates the time I did for these.

const store = [
    {
        name:"Butterfly unit",
        description:"This unit taught about the life cycle and anatomy of butterflies.",
        date:"Spring 2021",
        subjects:"Science",
        color:"green"
    },
    {
        name:"Escape rooms",
        description:"These usually involce multiple subjects and they are themed on the time or what the kids just learned",
        date:"Spring 2021",
        subjects:"Multiple subjects",
        color:"darkred"
    },
    {
        name:"Coins and money",
        description:"This was done through the school shope that I made. In it I had some deskpets and toys for them to play with. For good work students would get coins and would be able to use it to get mini erasers at the shop",
        date:"Spring 2021",
        subjects:"Math",
        color:"blue"
    }

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
        <span>${project.subjects}</span>
        
    </div>
    
    `

}
