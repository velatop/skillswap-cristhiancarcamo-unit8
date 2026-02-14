const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
];

function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }
    return skills.filter(skill => skill.category === category);
}

function renderSkills(skillsToDisplay) {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    skillsToDisplay.forEach(skill => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
      <h3>${skill.title}</h3>
      <p>${skill.category}</p>
      <span class="price">$${skill.price}/hour</span>
    `;

        card.addEventListener('click', () => {
            alert('More information: ' + skill.title);
        });

        container.appendChild(card);
    });
}

function calculateTotalCost(hourlyRate, hours) {
  return hourlyRate * hours;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const rate = parseFloat(document.getElementById('hourly-rate').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const result = document.getElementById('cost-result');

    if (isNaN(rate) || isNaN(hours)) {
        result.textContent = 'Please enter valid numbers';
        return;
    }

    const totalCost = calculateTotalCost(rate, hours);
    result.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});



document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('More information: ' + card.querySelector('h3').textContent);
    });
});

document.getElementById('filter-all').addEventListener('click', function () {
    const filtered = filterSkillsByCategory(skills, 'All');
    renderSkills(filtered);
});

document.getElementById('filter-programming').addEventListener('click', function () {
    const filtered = filterSkillsByCategory(skills, 'Programming');
    renderSkills(filtered);
});

document.getElementById('filter-music').addEventListener('click', function () {
    const filtered = filterSkillsByCategory(skills, 'Music');
    renderSkills(filtered);
});
document.getElementById('filter-career').addEventListener('click', function () {
    const filtered = filterSkillsByCategory(skills, 'Career');
    renderSkills(filtered);
});

renderSkills(skills);