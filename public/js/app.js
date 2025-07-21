document.addEventListener('DOMContentLoaded', () => {
  const userList = document.getElementById('user-list');

  // Fetch data from the backend API
  fetch('/api/users')
    .then(response => response.json())
    .then(data => {
      data.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('col-md-4', 'user-card');
        userCard.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Field:</strong> ${user.field}</p>
        `;
        userList.appendChild(userCard);
      });
    })
    .catch(error => console.error('Error fetching users:', error));
});