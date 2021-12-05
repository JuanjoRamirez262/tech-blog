const sendForm = async () => {
    const title = document.querySelector('#formTitle').value.trim()
    const content = document.querySelector('#formContent').value.trim()
    
    if (title && content) {
        const response = await fetch('/api/post/', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert('Failed to log in');
        }
      }
}


document.querySelector('#submitForm').addEventListener('click', sendForm)