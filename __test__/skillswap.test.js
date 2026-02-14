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