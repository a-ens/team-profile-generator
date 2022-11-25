// using Engineer constructor 
const Engineer = require('../lib/Engineer');

test(`creates an Engineer object`, () => {
    const engineer = new Engineer('Andrew', 1066, 'andrew-e@gmail', 'a-ens');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test(`gets engineer's github value`, () => {
    const engineer = new Engineer('Andrew', 1066, 'andrew-e@gmail', 'a-ens');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test(`gets employee's role`, () => {
    const engineer = new Engineer('Andrew', 1066, 'andrew-e@gmail', 'a-ens');

    expect(engineer.getRole()).toEqual("Engineer");
});