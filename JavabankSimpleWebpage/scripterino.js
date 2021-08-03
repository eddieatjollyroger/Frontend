var customerData = [
    {"id":1,"firstName":"Rui","lastName":"Ferrão","email":"rui@gmail.com","phone":"777888"},
    {"id":2,"firstName":"Sergio","lastName":"Gouveia","email":"sergio@gmail.com","phone":"777999"},
    {"id":3,"firstName":"Bruno","lastName":"Ferreira","email":"bruno@gmail.com","phone":"777666"},
    {"id":4,"firstName":"Rodolfo","lastName":"Matos","email":"rodolfo@gmail.com","phone":"777333"}
];
window.onload = function(){
var usersTable = document.getElementById('users-table');

for (let i = 0; i < customerData.length; i++) {
    usersTable = document.getElementById('users-table');
// get the table's DOM object

// create a new table row, added to the end of the table
var row = usersTable.insertRow(-1);
var firstNameCell = row.insertCell(0);
var lastNameCell = row.insertCell(1);
var emailCell = row.insertCell(2);
var phoneCell = row.insertCell(3);

// modify the table row HTML
firstNameCell.innerHTML = customerData[i].firstName;
lastNameCell.innerHTML = customerData[i].lastName;
emailCell.innerHTML = customerData[i].email;
phoneCell.innerHTML = customerData[i].phone;
}
}