const getUsername = document.querySelector(".username-text");

const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener('click', ()=> {
    getUserDetails(getUsername.value);
})
getUsername.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        getUserDetails(getUsername.value); 
    }
});
const getUserDetails = async(username) => {
    let url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    const data = await response.json();

    let githubDetails = document.querySelector("#github-details");

    githubDetails.innerHTML = `<div id="name-image"><h2>Name : ${data.name}</h2>
                                <img src="${data.avatar_url}"></div>
                                <div id="details"><p>${data.bio}</p>
                                <p> <b>Username: </b>${data.login}</p>
                                <p> <b>Location: </b>${data.location}</p>
                                <p> <b>Company Name: </b>${data.company}</p>
                                <div>
    `
}
getUserDetails()
