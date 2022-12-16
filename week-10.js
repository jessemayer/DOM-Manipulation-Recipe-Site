let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createdDate = new Date ();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.className = 'text-white';
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`
    row.insertCell(1).innerHTML = document.getElementById('new-recipe').value;

    row.insertCell(2).innerHTML = document.getElementById('new-ingredient').value;
    row.insertCell(3).innerHTML = document.getElementById('new-prep').value;
    row.insertCell(4).innerHTML = document.getElementById('new-meal-type').value;
    let actions = row.insertCell(5);
    actions.append(createDeleteButton(id++));
    document.getElementById('new-recipe').value = '';
    document.getElementById('new-ingredient').value = '';
    document.getElementById('new-prep').value = '';
    document.getElementById('new-meal-type').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-info';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick =  () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.remove(elementToDelete);
    };
    return btn;    
}



