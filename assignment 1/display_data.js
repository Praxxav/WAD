document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    let table = document.getElementById('userTable');
  
    // Create table header row
    let headerRow = table.insertRow();
    for (let key in users[0]) {
      let th = document.createElement('th');
      th.textContent = key.toUpperCase();
      headerRow.appendChild(th);
    }
  
    // Populate table with user data
    users.forEach(user => {
      let row = table.insertRow();
      for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
      }
    });
  });
  