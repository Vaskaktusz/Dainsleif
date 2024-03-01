function addRow() {
    let table = document.getElementById('dataTable');
    let newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = document.getElementById('script').value;
    newRow.insertCell(1).innerHTML = document.getElementById('file').value;
    newRow.insertCell(2).innerHTML = document.getElementById('folder').value;
    newRow.insertCell(3).innerHTML = document.getElementById('location').value;
    newRow.insertCell(4).innerHTML = document.getElementById('password').value;
    newRow.insertCell(5).innerHTML = document.getElementById('username').value;
    newRow.insertCell(6).innerHTML = '<button type="button" onclick="deleteRow(this)">Delete</button>';

    reset();
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function reset() {
    document.getElementById('script').value = '';
    document.getElementById('file').value = '';
    document.getElementById('folder').value = '';
    document.getElementById('location').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').value = '';
}