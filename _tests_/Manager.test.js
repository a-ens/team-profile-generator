// using Manager constructor 
const Manager = require('../lib/Manager');

test(`creates a Manager object`, () => {
    const manager = new Manager('Andrew', 1066, 'andrew-e@gmail', 103);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test(`gets employee's role`, () => {
    const manager = new Manager('Andrew', 1066, 'andrew-e@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 