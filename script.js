let Name = document.getElementById("name")
let profession = document.getElementById("proff")
let age = document.getElementById("age")

let btnAdd = document.getElementById("addUser")
let errorDisplay = document.getElementsByClassName("Errordisplay")
let AllareFilled = document.getElementById("iftrue"); // the green line
let NotAllareFilled = document.getElementById("ifFalse");  //the red line to show 

// delete button

let idNumber = document.getElementById("inputID");
let deleteBtn = document.getElementById("delete");

btnAdd.addEventListener('click' , validation);

// check wheather all field are filled or not 

function validation(){
    if(Name.value == "" || profession.value == "" || age.value == ""){
        NotAllareFilled.style.display = "block"
        AllareFilled.style.display = "none" 
        
    }
    else{
        AllareFilled.style.display = "block"
        NotAllareFilled.style.display = "none"


        addData();
    }
}

    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];

    var n = 0;
    var x = 0;
    let id = 1;
    function addData(){

        var table = document.getElementById("table");

        var newRow = table.insertRow();

        list1[x] = id++;
        list2[x] = Name.value;
        list3[x] = profession.value;
        list4[x] = age.value;

        var cell1 = newRow.insertCell();
        var cell2 = newRow.insertCell();
        var cell3 = newRow.insertCell();
        var cell4 = newRow.insertCell();

        cell1.innerHTML = list1[x];
        cell2.innerHTML = list2[x];
        cell3.innerHTML = list3[x];
        cell4.innerHTML = list4[x];

        n++;
        x++;      
        
    }


//    deleteBtn.addEventListener("click" , deleteRowNo);

//    function deleteRowNo(){
//         newRow.
//    }