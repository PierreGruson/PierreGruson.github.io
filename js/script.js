//Source code Tasks page
function init() {
    //Task4
    let flower = document.createElement("img");
    flower.src = "img/flower2.png";
    document.getElementById("new_element").appendChild(flower);

    //Tas5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (let i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }

    //Task6
    let changeFlower = function (event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename === "flower1.png") {
                event.target.src = "img/flower2.png";
            } else
                event.target.src = "img/flower1.png";
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeFlower);
}

//Source code Shopping page
//Add an item
function addItem() {
    let item = document.getElementById("itemName").value;
    let isImportant = document.getElementById("isImportant").valueOf();
    let groceries = document.getElementById("groceries").valueOf();
    if (/^[a-zA-Z]+$/.test(item)) //If the item is not alphas it won't be add to the list
    {
        let addItem = document.createElement("li");
        addItem.appendChild(document.createTextNode(item + "\t["+ (document.getElementById("list").childElementCount + 1) +"]"));
        if (isImportant.checked)
            addItem.style.color = "#B71C1C";
        if (groceries.checked)
            addItem.style["text-decoration"] = "underline";
        document.getElementById("list").appendChild(addItem);
    }
    document.getElementById("itemName").value = '';
}

//Remove an item
function removeItem() {
    let index = document.getElementById("itemRemove").value;
    let length = document.getElementById("list").childElementCount;
    if (index <= length && index > 0)
    {
        let removeItem = document.getElementById("list").getElementsByTagName("li")[index-1];
        document.getElementById("list").removeChild(removeItem);
    }

}