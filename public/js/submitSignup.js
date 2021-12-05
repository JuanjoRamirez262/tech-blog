const sendSignup = async () => {
    const username = document.querySelector('#formUsername').value.trim()
    const email = document.querySelector('#formEmail').value.trim()
    const password = document.querySelector('#formPassword').value.trim()
    if (username && email && password) {
        const response = await fetch('/api/users/createUser', {
          method: 'PUT',
          body: JSON.stringify({ username, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          alert('User created');
          document.location.replace('/');
        } else {
          alert('Failed to sign up');
        }
      }
}

document.querySelector('#submitSignup').addEventListener('click', sendSignup)