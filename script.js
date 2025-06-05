const getUsername = document.querySelector(".username-text");

const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener('click', ()=> {
    getUserDetails(getUsername.value);
})
const getUserDetails = async(username) => {
    let url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);

    const data = await response.json();

    let githubDetails = document.querySelector("#github-details");

    githubDetails.innerHTML = `<h2>Name : ${data.name}</h2>
                                <img src="${data.avatar_url}">
                                <p>${data.bio}</p>
                                <p> Username: ${data.login}</p>
                                <p> Location: ${data.location}</p>
                                <p> Company Name: ${data.company}</p>
    `
}
getUserDetails()
