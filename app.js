
let todo = [];

if (localStorage.getItem("todo") === null) {
   localStorage.setItem("todo", JSON.stringify(todo)); 
}
else{
    todo = JSON.parse(localStorage.getItem("todo"));   
}

function add(){

    let list = document.getElementById('addTodoItem').value
    todo.push(list);   
         
    document.getElementById('todoList').innerHTML='';


    for(var i=0; i<=todo.length-1; i++){
       let listItem=document.createElement('li')

       let span1=document.createElement('span')
       let spanTxt=document.createTextNode(todo[i])
       span1.appendChild(spanTxt) 


       var att0 = document.createAttribute("onclick");
       att0.value = "linethrough(this)";
       span1.setAttributeNode(att0);    

       listItem.appendChild(span1);

       document.getElementById('todoList').appendChild(listItem)
       var btn = document.createElement("a");
       var att = document.createAttribute("onclick");
       att.value = "deleteme(this)";
       btn.setAttributeNode(att);    
       var t = document.createTextNode("Delete");
       btn.appendChild(t);
       listItem.appendChild(btn);

       localStorage.setItem("todo", JSON.stringify(todo)); 
   }
}

function deleteme(listi){ 

    var index = todo.indexOf(listi.parentElement.innerText.replace("Delete",""));
    todo.splice(index, 1);    

    document.getElementById('todoList').innerHTML='';
    for(var i=0; i<=todo.length-1; i++){
       let listItem=document.createElement('li')

       let span1=document.createElement('span')
       let spanTxt=document.createTextNode(todo[i])
       span1.appendChild(spanTxt) 

       var att0 = document.createAttribute("onclick");
       att0.value = "linethrough(this)";
       span1.setAttributeNode(att0);    

       listItem.appendChild(span1);

       document.getElementById('todoList').appendChild(listItem)
       var btn = document.createElement("a");
       var att = document.createAttribute("onclick");
       att.value = "deleteme(this)";
       btn.setAttributeNode(att);    
       var t = document.createTextNode("Delete");
       btn.appendChild(t);
       listItem.appendChild(btn);

       localStorage.setItem("todo", JSON.stringify(todo)); 
   }

}

function linethrough(span1){
    span1.classList.toggle("to-cut");
}

function alreadydata(){
    document.getElementById('todoList').innerHTML='';
    for(var i=0; i<=todo.length-1; i++){
        let listItem=document.createElement('li')

        let span1=document.createElement('span')
        let spanTxt=document.createTextNode(todo[i])
        span1.appendChild(spanTxt) 

        var att0 = document.createAttribute("onclick");
        att0.value = "linethrough(this)";
        span1.setAttributeNode(att0);    
        
        listItem.appendChild(span1);

        document.getElementById('todoList').appendChild(listItem)
        var btn = document.createElement("a");
        var att = document.createAttribute("onclick");
        att.value = "deleteme(this)";
        btn.setAttributeNode(att);    
        var t = document.createTextNode("Delete");
        btn.appendChild(t);
        listItem.appendChild(btn);
    }
}
