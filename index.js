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
    let button = document.createElement("button");
    let button_text = document.createTextNode("X");
    let checkbox= document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    //Object.keys(tasks[i])
    for(let key in tasks[i] ) {
       
    //    console.log(tasks[i][key]);
        
        let cell = document.createElement("td");
        
        let cellText = document.createTextNode(tasks[i][key]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        button.appendChild(button_text);
        button.className="deleteTask";
        button.addEventListener('click',deleteTask,false);
        row.appendChild(button);
        row.appendChild(checkbox);
       
    }
    
    data.appendChild(row);
}
}

const addTask = () =>{
    let newItems= [];
   const name = document.getElementById('nameBox').value;
   const qty = document.getElementById('qtyBox').value;
    console.log("name: ",name, "qty:",qty);
    newItems[0]=name;
    newItems[1]=qty;
    let data = document.getElementById('table');
    let row = document.createElement("tr");
    let button = document.createElement("button");
    let button_text = document.createTextNode("X");
    let checkbox= document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    for(let i = 0;i < newItems.length; i++ ){
        let cell = document.createElement("td");
        let cellText= document.createTextNode(newItems[i]);
        cell.appendChild(cellText);
    
        // cellText=document.createTextNode(qty);
        // cell.appendChild(cellText);
        row.appendChild(cell);
        row.appendChild(button);
        button.appendChild(button_text);
        button.className="deleteTask";
        button.addEventListener('click',deleteTask,false);
         row.appendChild(checkbox);
    }
    data.appendChild(row);
    

}

const deleteTask=() =>{
console.log('delete me');
console.log();
}