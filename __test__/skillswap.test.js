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

const { filterSkillsByCategory, calculateTotalCost } = require('../skillswap-functions');