describe('filterSkillsByCategory function', () => {
    const skills = [
        { title: 'Python Tutoring', category: 'Programming', price: 20 },
        { title: 'Guitar Lessons', category: 'Music', price: 15 },
        { title: 'Resume Review', category: 'Career', price: 0 },
        { title: 'Web Development', category: 'Programming', price: 25 }
    ];

    test('should filter skills by category', () => {
        expect(filterSkillsByCategory(skills, 'Programming')).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'Web Development', category: 'Programming', price: 25 }
        ]);
    });

    test('should handle "All" category', () => {
        expect(filterSkillsByCategory(skills, 'All')).toEqual(skills);
    });

    test('should return empty array when no matches', () => {
        expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
    });
});

describe('calculateTotalCost function', () => {
    test('should return correct values for different hours and rates', () => {
        expect(calculateTotalCost(20, 2)).toBe(40);
        expect(calculateTotalCost(25, 1.5)).toBe(37.5);
    });

    test('should handle free sessions and zero hours', () => {
        expect(calculateTotalCost(0, 3)).toBe(0);
        expect(calculateTotalCost(20, 0)).toBe(0);
    });

    test('should return correct value for decimal hours', () => {
        expect(calculateTotalCost(25, 1.5)).toBe(37.5);
    });

});

describe('matchSkillsToUser function', () => {
    const skills = [
        { title: 'Python Tutoring', category: 'Programming', price: 20 },
        { title: 'JavaScript Help', category: 'Programming', price: 25 },
        { title: 'Guitar Lessons', category: 'Music', price: 15 },
        { title: 'Resume Review', category: 'Career', price: 0 }
    ];

    test('should match by category and price', () => {
        const userNeeds = { category: 'Programming', maxPrice: 30 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 },
            { title: 'JavaScript Help', category: 'Programming', price: 25 }
        ]);
    });

    test('should filter by max price', () => {
        const userNeeds = { category: 'Programming', maxPrice: 20 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([
            { title: 'Python Tutoring', category: 'Programming', price: 20 }
        ]);
    });

    test('should return empty array for no matches', () => {
        const userNeeds = { category: 'Cooking', maxPrice: 100 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([]);
    });

    test('should include free skills', () => {
        const userNeeds = { category: 'Career', maxPrice: 0 };
        expect(matchSkillsToUser(userNeeds, skills)).toEqual([
            { title: 'Resume Review', category: 'Career', price: 0 }
        ]);
    });
});



const { filterSkillsByCategory, calculateTotalCost, matchSkillsToUser } = require('../skillswap-functions');