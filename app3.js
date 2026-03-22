//  Axios 
// Updating Query String
//  go to the github/university domail list   
// 
let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
let p = document.querySelector("p");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr =  await getData(country);
  console.log(colArr);
   p.innerText = "University List for " + country + " :";
  show(colArr);
 
});

function show(colArr){
    let list = document.querySelector("ul");

    // clear previous list items
    list.innerHTML = "";
for(col of colArr){
    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
    console.log(col.name);
}

}
 
async function getData(country){
    try{
     let res= await axios.get(url + country);
   return res.data ;
    }
    catch(e){
        console.log("Error - " + e);
        return "Not found";
    }
}

