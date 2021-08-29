const loadUser = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(rest => rest.json())
    .then(data => displayUser(data))
}
const displayUser = (data) => {
    const buddyContainer = document.getElementById('user');
    const buddies = data.results;
    for(const buddy of buddies){
        const div = document.createElement('div');
        div.classList.add('users')
        div.innerHTML = `
        <h4><img src=" ${buddy.picture.large} "></h4>
        <h3>Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} </h3>
        <h4>Gender: ${buddy.gender}</h4>
        <h4>Email: ${buddy.email} </h4>
        <h4>Address: ${buddy.location.city}, ${buddy.location.country} </h4>
        
        `;
        buddyContainer.appendChild(div);
    }
}
loadUser();
