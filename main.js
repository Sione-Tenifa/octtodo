const todos = document.querySelector("#newList")
const form  = document.querySelector("#todoForm")


todos.addEventListener('click', function(e){
    // console.log(e.target)
    if(e.target.style.textDecoration == "line-through"){
        e.target.style.textDecoration = ""
    }else{
        e.target.style.textDecoration = "line-through"
    }
})

form.addEventListener("submit", function(e){
    e.preventDefault()

    let todo = document.createElement("li")
    todo.innerText = document.getElementById("list").value;
    console.log(todo)

    todos.appendChild(todo)
    
} )



