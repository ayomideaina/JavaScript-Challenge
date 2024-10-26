// Select the elements we want to manipulate
const roleTitle = document.getElementById('role-title');
const technologiesList = document.getElementById('technologies-list');
const changeTechButton = document.getElementById('change-tech-button');

// Array of different roles that you can switch between
const roles = [
    'Web Developer',
    'Technical Writer',
    'Instructor'
];

const technologies = [
    'HTML', 'CSS', 'JavaScript', 'React',
    'Python',
];

// Function to change the role
function changeRole() {
    const randomIndex = Math.floor(Math.random() * roles.length);
    roleTitle.textContent = roles[randomIndex];
}

// Function to change the technologies list
function changeTechnologies() {
    const randomIndex = Math.floor(Math.random() * technologies.length);
    technologiesList.textContent = technologies[randomIndex];
}

// Event listener for the button to change technologies
changeTechButton.addEventListener('click', changeTechnologies);


setInterval(changeRole, 1000);
