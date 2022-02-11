function addTable(){
    removeTable();
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('columns').value;

    var body = document.body,
        tbl  = document.createElement('table');
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