// Create a "Close" btn and append it to each list item
var myList = document.getElementsByTagName("LI");
var i;

for (i = 0; i < myList.length; i++) {
    var span = document.createElement("span");
    var txt  = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);

}

// Check the close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++){
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a checked symbol when clisking on the current list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, flase);

// Create  a new list item when clicking on the add btn
function addTask() {//mistake
    var li = document.createElement("li");
    var inputVal  = document.getElementById("myInput").value;
    var t = document.createTextNode(inputVal);
    li.appendChild(t);
    if (inputVal === ''){
        alert('Please Enter Your Task');
    }else{
        document.getElementById("myUL").appendChild(li);

    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i< close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;//mistake
            div.style.display = "none";
        }
    }
}