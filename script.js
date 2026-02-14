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

function matchSkillsToUser(userNeeds, skills) {
  return skills.filter(skill => 
    skill.category === userNeeds.category && skill.price <= userNeeds.maxPrice
  );
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

document.getElementById('match-btn').addEventListener('click', function () {
    const category = document.getElementById('category-preference').value;
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    const resultsContainer = document.getElementById('match-results');

    if (!category || isNaN(maxPrice)) {
        resultsContainer.innerHTML = '<p>Please select a category and enter a valid price</p>';
        return;
    }

    const userNeeds = { category: category, maxPrice: maxPrice };
    const matches = matchSkillsToUser(userNeeds, skills);

    if (matches.length === 0) {
        resultsContainer.innerHTML = '<p>No matches found</p>';
        return;
    }

    resultsContainer.innerHTML = '<h3>Your Matches:</h3>';
    matches.forEach(skill => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');
        matchCard.innerHTML = `
      <h4>${skill.title}</h4>
      <p>${skill.category}</p>
      <span class="price">$${skill.price}/hour</span>
    `;
        resultsContainer.appendChild(matchCard);
    });
});

renderSkills(skills);