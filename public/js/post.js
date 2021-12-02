const goToPost = (event) => {
    event.preventDefault()
    const post_id = event.target.getAttribute("data")
    document.location.replace(`/post/:${post_id}`)
}

const postBtns = document.querySelectorAll('.postBtn')
for(let i = 0; i< postBtns.length; i++){
    postBtns[i].addEventListener('click', goToPost);
}