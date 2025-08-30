submit.addEventListener("click", (e) => {
    e.preventDefault();
    showGithub(searchbar3.value);
})

const showGithub = (username) => {
  username = username.split(' ').join('');

  if (username === "") {
    window.alert("Please Enter your UserName to search in Github");
    return;
  }

  document.getElementById("content").style.display = "flex";

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      if (response.message === "Not Found") {
        window.alert("Username not found. Please enter a valid Github account.");
        document.getElementById("content").style.display = "none";
        return;
      }

      uname.innerHTML = response.name || response.login;
      img.innerHTML = `
        <a target="_blank" href="https://github.com/${username}">
          <img src="${response.avatar_url}" alt="${username}'s avatar"/>
        </a>`;

      bio.innerHTML = response.bio ? `<strong>Bio:</strong> ${response.bio}` : "";
      joined.innerHTML = `<strong>Joined:</strong> ${new Date(response.created_at).toDateString()}`;
      followers.innerHTML = `<strong>Followers:</strong> ${response.followers}`;
      following.innerHTML = `<strong>Following:</strong> ${response.following}`;
      repos.innerHTML = `<strong>Repos:</strong> ${response.public_repos}`;
    })
    .catch(err => {
      console.error(err);
      window.alert("An error occurred while fetching data.");
    });
};



