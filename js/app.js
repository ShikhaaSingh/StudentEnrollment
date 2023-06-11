let students = [];

// Enrollment form submission handler
document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const course = document.getElementById('course').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const image = document.getElementById('image').value;

  // Create student object
  const student = {
    name,
    age,
    course,
    email,
    phone,
    image
  };

  // Add student to the list
  students.push(student);

  // Update the results table
  updateResults();

  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('course').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('image').value = '';
});

// Function to update the results table
function updateResults() {
  const resultsList = document.getElementById('resultsList');
  resultsList.innerHTML = '';

  // Iterate through each student and add them to the table
  students.forEach(function(student, index) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement('td');
    ageCell.textContent = student.age;
    row.appendChild(ageCell);

    const courseCell = document.createElement('td');
    courseCell.textContent = student.course;
    row.appendChild(courseCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = student.email;
    row.appendChild(emailCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = student.phone;
    row.appendChild(phoneCell);

    const imageCell = document.createElement('td');
    const imageElement = document.createElement('img');
    imageElement.src = student.image;
    imageElement.alt = 'Student Image';
    imageElement.style.maxWidth = '100px';
    imageCell.appendChild(imageElement);
    row.appendChild(imageCell);

    const removeButtonCell = document.createElement('td');
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', function() {
      removeStudent(index);
    });
    removeButtonCell.appendChild(removeButton);
    row.appendChild(removeButtonCell);

    resultsList.appendChild(row);
  });
}

// Function to remove a student from the list
function removeStudent(index) {
  students.splice(index, 1);
  updateResults();
}

function clearForm() {
  document.getElementById('enrollmentForm').reset();
}
