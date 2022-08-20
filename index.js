let myLeads = [] 
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBTN = document.getElementById("tab-btn")

if (leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBTN.addEventListener("click", function() {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        
     })
   
} ) 

function render(leads)
{
    let listItems = ""
 
    for (i=0; i<leads.length; i++)
    {
        listItems += `<li> 
        <a href=' ${leads[i]}  'target='_blank'> 
        ${ leads[i] } 
        </a> 
        </li>`
    }

    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function (){
        
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        inputEl.value =" "

})

deleteBtn.addEventListener("dblclick", function (){
  
  myLeads=[]
    localStorage.clear();
    render(myLeads)
})




