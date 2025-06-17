
document.getElementById("greeting").textContent = "This there this is the example text!";

document.getElementById("h1").textContent = " This is the text i changed ";

let items = document.getElementsByClassName("redclass");
for ( let i = 0; i < items.length; i++)
{
    items[i].textContent= "text change";

}
const header = document.querySelector("h1");
console.log(header);

const red = document.querySelectorAll(".redclass");
console.log(red);

document.getElementById("click").addEventListener("click" ,funciton());
{
    alert("CLICKED BUTTON!");
}