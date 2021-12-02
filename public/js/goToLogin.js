const loginBtnHandler = (event) => {
    event.preventDefault();
    console.log("working")
    document.location.replace('/login');
    
}
document
  .querySelector('#loginBtn')
  .addEventListener('click', loginBtnHandler);