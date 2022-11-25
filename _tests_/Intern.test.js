// using Intern constructor 
const Intern = require('../lib/Intern');

test(`creates an Intern object`, () => {
    const intern = new Intern('Andrew', 1066, 'andrew-e@gmail', 'uPenn');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test(`gets employee's school`, () => {
    const intern = new Intern('Andrew', 1066, 'andrew-e@gmail', 'uPenn');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test(`gets employee's role`, () => {
    const intern = new Intern('Andrew', 1066, 'andrew-e@gmail', 'uPenn');

    expect(intern.getRole()).toEqual("Intern");
}); 