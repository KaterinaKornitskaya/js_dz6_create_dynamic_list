"use strict"

let mainDiv = document.getElementById("mainDiv");
let createListBtn = document.getElementsByClassName("createListBtn")[0];
let myList;

createListBtn.addEventListener("click", (event, myList)=>{
    myList = document.createElement("ul");
    myList.classList.add("myList");
    let newLi = document.createElement("li");
    newLi.textContent = txtFirstElemName.value;
    myList.append(newLi);
    document.getElementsByClassName("inputWrapperList")[0].appendChild(myList);
    
    // выбор
    myList.addEventListener("click", (ev)=>{
        if(document.getElementById("rdBtnInsSameLvl").checked){
            addSameLevelElement(ev);
        } else if(document.getElementById("rdBtnInsNest").checked){
        addNestedElement(ev);
        } else if(document.getElementById("rdBtnChangeTxtContent").checked) {
            changeElementContent(ev);
        } else if(document.getElementById("rdBtnInsSameLvlSlctPos").checked){
            addSameLevelElemBeforeSelected(ev);
        }
        else if(document.getElementById("rdBtnDeleteElem").checked){
            deleteElem(ev);
        }
    })
});

// добавить элемент на том же уровне
function addSameLevelElement(ev) {
    let thisElem = ev.target;
    console.log(thisElem);
    let newL = document.createElement("li");
    newL.textContent = txtInsSameLvl.value;
    thisElem.parentElement.append(newL);
}

// добавить эл-т на том же уровне перед выбранным элементом
function addSameLevelElemBeforeSelected(ev) {
    let thisElem = ev.target;
    console.log(thisElem);   
    let newL = document.createElement("li");
    newL.textContent = txtInsSameLvlSlctPos.value;
    thisElem.parentElement.insertBefore(newL,thisElem);    
}

// удаление эл-та списка
function deleteElem(ev) {
    let thisElem = ev.target;
    console.log(thisElem);
    thisElem.parentElement.removeChild(thisElem);
}

//добавить дочерний элемент, если таковых нет
function addNestedElement(ev) {
    let thisElem = ev.target;
    console.log(thisElem);
    if(thisElem.children.length>0) {
        return;
    }
    else {
        let newUl = document.createElement("ul");
        let newLi = document.createElement("li");
        newLi.textContent = txtBtnInsNest.value;
        thisElem.append(newUl);
        newUl.append(newLi);
    }
}

// изменить содержимое элемента
function changeElementContent(ev) {
    ev.target.childNodes[0].textContent = txtChangeTxtContent.value;
    console.log(ev.target);
}
