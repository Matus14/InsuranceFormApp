class Person {
  constructor(firstName, lastName, age, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phone = phone;
  }

}

const people = [];

const tableBody = document.querySelector('#peopleTable tbody');
const form = document.getElementById('personForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const phone = document.getElementById('phone').value.trim();

  if (firstName && lastName && age && phone) {
    const newPerson = new Person(firstName, lastName, age, phone);
    people.push(newPerson);
    updateTable();
    form.reset();
  }
});

function updateTable() {
  tableBody.innerHTML = '';
  people.forEach((person, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.age}</td>
      <td>${person.phone}</td>
      <td><button class="btn btn-sm btn-danger" onclick="deletePerson(${index})">Delete</button></td>
    `;

    tableBody.appendChild(row);
  });
}

function deletePerson(index) {
  people.splice(index, 1);
  updateTable();
}