function addTable(){
    removeTable();
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('columns').value;

    var body = document.body,
        tbl  = document.createElement('table');
        tbl.onclick="clickEvent(event)";
    tbl.className='class-table';
    tbl.id='table';

    for(var i = 0; i < rows; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < columns; j++){
            var td = tr.insertCell();
                td.appendChild(document.createTextNode(''));
        }
    }
    body.appendChild(tbl);
}
addTable();
function removeTable(){
    var table = document.getElementById("table");
    if(typeof(table) != 'undefined' && table != null){
        table.remove();
    }    
}
function filler(){
    var table = document.getElementById("table");
    if(typeof(table) != 'undefined' && table != null){
        var allTr=table.querySelectorAll("tr");
        var i = 1;
        allTr.forEach(function(tr){
            var j=1;
            tr.querySelectorAll('td').forEach(function(td) {
                td.textContent=i+""+j;
                j++;
            });
            i++;
        })
    }    
}
filler();
function random(number) {
    return Math.floor(Math.random() * (number+1));
  }

function addChangeColour(){
    var actionTd=document.getElementById("table").querySelectorAll("td");
    actionTd.forEach(function(tr) {
        tr.Change=false;
        tr.addEventListener('click', function()
        {
            
            if(this.Change==false)
            {
                this.lastColour=this.style.backgroundColor;
                const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
                this.style.backgroundColor = rndCol;
                this.Change=true;
            }
            else{
                this.style.backgroundColor = this.lastColour;
                this.Change=false;
            }
        })
      });    
}
addChangeColour();
