submit.addEventListener("click", (e) => {
    e.preventDefault();
    showGithub(searchbar3.value);
})

const showGithub = (username) => {

    document.getElementById("content").style.display = "flex";

    username = username.split(' ').join('');

    fetch("https://api.github.com/users/" + username)
        .then(response => response.json())
        .then(response => {
            if (username === "") {
                window.alert("Please Enter your UserName to search in Github")
            } else {

                if (response.name === undefined) {
                    window.alert("Username Not found. Please create your Github account.")
                }
                else {
                    img.innerHTML = `<a target="_blank" href="https://github.com/${username}"> <img src="${response.avatar_url}"/></a>`
                    uname.innerHTML = response.name
                
                    followers.innerHTML = `<strong> Followers </strong> : ${response.followers}`
                    following.innerHTML = `<strong> Following </strong> : ${response.following}`
                    
                    repos.innerHTML = `<strong> Total Projects </strong> : ${response.public_repos}`
                }
            }
        })
        .catch(err => console.error(err));
}
