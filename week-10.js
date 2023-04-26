// set id =0 so that each recipe has its own id
let id = 0;
// called on the button with an ID of add, then instructed when clicked execute this function
document.getElementById('add').addEventListener('click', () => {
    // created a new Date, with no arguments it will set to current date
    let createdDate = new Date ();
    // created a new variable that references the table that we have id = list
    let table = document.getElementById('list');
    // created a variable that insets a row in the table variable that we just created at position 1.
    let row = table.insertRow(1);
    // set the row text to white 
    row.className = 'text-dark bg-light';
    // set attributes for the row that was just created
    row.setAttribute('id', `item-${id}`);
    // created a cell that references what date was chosen using templet literals to show the year, month, date
    row.insertCell(0).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth()+1}-${createdDate.getDate()}`
    // created 4 cells that reference their id and inputs the value
    row.insertCell(1).innerHTML = document.getElementById('new-recipe').value;
    row.insertCell(2).innerHTML = document.getElementById('new-ingredient').value;
    row.insertCell(3).innerHTML = document.getElementById('new-prep').value;
    row.insertCell(4).innerHTML = document.getElementById('new-meal-type').value;
    // created a variable that inserts a 5th row
    let actions = row.insertCell(5);
    // append a delete button  that references the increments each id to be deleted
    actions.append(createDeleteButton(id++));
    // referenced the 4 input boxes and set their values to "" to clear the box after clicking create recipe
    document.getElementById('new-recipe').value = '';
    document.getElementById('new-ingredient').value = '';
    document.getElementById('new-prep').value = '';
    document.getElementById('new-meal-type').value = '';
});
// created a function that deletes a button based on ID 
function createDeleteButton(id) {
    // using DOM manipulation created a button
    let btn = document.createElement('button');
    // set the class name to the new button so it will have bootstrap styles
    btn.className = 'btn btn-info';
    // set the buttons id to be id
    btn.id = id;
    // set the text on the button to be delete 
    btn.innerHTML = 'Delete';
    // created an event listener for when the button is clicked execute the function.
    btn.onclick =  () => {
        console.log(`Deleting row with id: item-${id}`);
        // created variable that references each row
        let elementToDelete = document.getElementById(`item-${id}`);
        // using DOM manipulation.remove  to delete row variable that we just created
        elementToDelete.remove(elementToDelete);
    };
    // returned the button 
    
    return btn;    
}



