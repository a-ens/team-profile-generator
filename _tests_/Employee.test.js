// using Employee constructor 
const Employee = require('../lib/Employee');

test(`creates an Employee object`, () => {
    const employee = new Employee('Andrew', 1066, 'andrew-e@gmail');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test(`gets employee's name`, () => {
    const employee = new Employee('Andrew', 1066, 'andrew-e@gmail');

    expect(employee.getName()).toEqual(expect.any(String));
});


test(`gets employee's ID`, () => {
    const employee = new Employee('Andrew', 1066, 'andrew-e@gmail');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test(`gets employee's email`, () => {
    const employee = new Employee('Andrew', 1066, 'andrew-e@gmail');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test(`gets employee's role`, () => {
    const employee = new Employee('Andrew', 1066, 'andrew-e@gmail');

    expect(employee.getRole()).toEqual("Employee");
}); 