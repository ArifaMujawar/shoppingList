function loadData(){
let tasks = [
    {
        name: "Apples",
        qty: 5,
        id: 1
    },{
        name: "Broccoli",
        qty: 2,
        id: 2
    },{
        name: "Milk",
        qty: 1,
        id: 3
    },{
        name: "Tomatoes",
        qty: 10,
        id: 4

    },{
        name: "Cauliflower",
        qty: 1,
        id: 5
    }

];

    let data = document.getElementById('table');
    for( let i=0; i<tasks.length;i++){
        let row = document.createElement("tr");
        row.addEventListener('click',makeEdit,false);
        let button = document.createElement("button");
    // let button_text = document.createTextNode("X");
    // let button_text.className= "";
        let checkbox= document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
    //Object.keys(tasks[i])
        for(let key in tasks[i] ) {
            if(key == 'id'){
             break;
            }
            let cell = document.createElement("td");
        
            let cellText = document.createTextNode(tasks[i][key]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        // button.appendChild(button_text);
            button.className="deleteTask fa fa-close";
            button.addEventListener('click',deleteTask,false);
            row.appendChild(button);
            checkbox.addEventListener('click', handleChecked);
            row.appendChild(checkbox);
       
    }
    
    data.appendChild(row);
}
}

const addTask = () =>{
    let newItems= [];
   const name = document.getElementById('nameBox').value;
   const qty = document.getElementById('qtyBox').value;
   let modal = document.getElementById('myModal');
   
   if(name === "" || qty === ""){
    //alert("Please Enter correct values!");
        modal.style.display = "block";
        return;
   }
  
   const id = Math.floor(Math.random() * 100 +5);

    console.log("name: ",name, "qty:",qty);
    newItems[0]=name;
    newItems[1]=qty;
    newItems[2]=id;
    let data = document.getElementById('table');
    let row = document.createElement("tr");
    let button = document.createElement("button");
    //let button_text = document.createTextNode("X");
    let checkbox= document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    for(let i = 0;i < newItems.length; i++ ){
       
        if(i == 2){
            break;
        }
        let cell = document.createElement("td");
        let cellText= document.createTextNode(newItems[i]);
        cell.appendChild(cellText);       
        row.appendChild(cell);
        button.className="deleteTask fa fa-close";
        button.addEventListener('click',deleteTask,false);
        // button.className="deleteTask";
        // button.onclick = deleteTask;
        row.appendChild(button);
        checkbox.addEventListener('click', handleChecked);
        row.appendChild(checkbox);
    }
    data.appendChild(row);
    
    document.getElementById('nameBox').value="";
    document.getElementById('qtyBox').value="";
}
const close = () => {
    let modal = document.getElementById('myModal');
    console.log('modal', modal)
    modal.style.display = "none";
}

const modal = document.getElementById('myModal');

modal.addEventListener("click", function(e){
    if(e.currentTarget.id === "myModal"){
        modal.style.display = "none";
    }
});
const deleteTask = (e) =>{
    console.log('delete me');
    console.dir(e.target.parentElement.innerText);
    e.target.parentElement.innerHTML="";
}

const handleChecked = (e) => {
    let addrow = e.target.parentElement;
    let tablearea= document.getElementById('DoneTable');
    // let doneTable= document.createElement('table');

    addrow.lastChild.remove();
    let num= document.createElement('i');
    num.className="undo fa fa-undo";
    num.addEventListener('click',handleUndo);
    addrow.appendChild(num);
    // doneTable.appendChild(addrow);
    tablearea.appendChild(addrow);

}


function toggleContents(){
    let table = document.getElementById('DoneTable');
    let font = document.createElement("i");
    let label = document.getElementById('completedList');
    if(table.childNodes.length===1){
        return;
    }
    if (document.getElementById('DoneTable').style.visibility == "visible") {
        document.getElementById('DoneTable').style.visibility = "hidden";
        font.className="arrow fa fa-angle-up";
        label.lastChild.remove();
        label.appendChild(font);
    } else {
        document.getElementById('DoneTable').style.visibility = "visible";
        font.className="arrow fa fa-angle-down";
        label.lastChild.remove();
        label.appendChild(font);
    }
}
 
function handleUndo(e) {
    let data = document.getElementById('table');
    console.log(e.target.parentElement);
    let addrow = e.target.parentElement;
    addrow.lastChild.remove();

    let checkbox= document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.addEventListener('click', handleChecked);
    addrow.appendChild(checkbox);
    data.appendChild(addrow);

}
const makeEdit = (e) => {
    e.target.contentEditable = "true";
}
const uncheckAll = () =>{
    let data = document.getElementById('DoneTable');
    const new_array = Array.from(data.children);
    let Add_data = document.getElementById('table');
    for(let i=0;i<new_array.length;i++){
        new_array[i].lastChild.remove();
        let checkbox= document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.addEventListener('click', handleChecked);
        new_array[i].appendChild(checkbox);
        Add_data.appendChild(new_array[i]);
    }
}

const removechecked = () =>{
    let data = document.getElementById('DoneTable');
    data.innerHTML="";
}