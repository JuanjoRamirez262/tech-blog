const createPost = () => {
    console.log("working")
    document.location.replace('/createPost')
}

document.querySelector('#create').addEventListener('click', createPost);