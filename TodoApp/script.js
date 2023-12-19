let input = document.getElementById("input");
let addBtn = document.getElementById("button");
let task = document.getElementById("items");

addBtn.addEventListener("click", function (e){
    let val = input.value;
    displayItems(val);
})

function displayItems(text) {
    let div = document.createElement("div");
    div.classList.add("item");
    task.appendChild(div);

    let span = document.createElement("span");
    span.classList.add("text");
    span.innerText = text;
    div.appendChild(span)

    let markBtn = document.createElement("button");
    markBtn.classList.add("mark-button");
    markBtn.innerHTML = "✅";
    div.appendChild(markBtn)

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.innerHTML = "🗑️";
    div.appendChild(deleteBtn);
}

task.addEventListener("click", (e) => {
    let btnClicked = e.target;

    if(btnClicked.classList.contains("mark-button"))
    btnClicked.parentElement.firstChild.classList.toggle("completed");

    else if(btnClicked.classList.contains("delete-button"))
    btnClicked.parentElement.remove();
})
