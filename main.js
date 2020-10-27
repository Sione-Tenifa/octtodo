const todos = document.querySelector("#newList")
const form  = document.querySelector("#todoForm")

todos.addEventListener('click', function(e){
    const lineRemove = e.target.tagName.toLowerCase()
    // console.log(target)
    switch(lineRemove){
        case "li":
            console.log("list was clicked")
            if(e.target.style.textDecoration == "line-through"){
                e.target.style.textDecoration = ""
            }else {
                e.target.style.textDecoration = "line-through"
            }
            break;
        case "button":
            console.log("Button was clicked")
            e.target.parentNode.remove()
            break;
    }
})

form.addEventListener("submit", function(e){
    e.preventDefault()

    let remove = document.createElement("button")
    remove.innerText = "REMOVE"
    let todo = document.createElement("li")
    todo.innerText = document.getElementById("list").value;
    


    console.log(todo)
    todos.appendChild(todo)
    todo.appendChild(remove)
    form.reset()

} )



