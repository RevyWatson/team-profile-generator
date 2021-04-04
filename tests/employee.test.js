const Employee = require("../lib/Employee");

test("should set name through the constructor arguement", () => {
    const testValue = "The Witch of the Wastes";
    const employee = Employee(testValue, 4, "spellsNhearts@email.com");
    expect(employee.fullName).toBe(testValue);
}) 

test("should set id through the constructor arguement", () => {
    const testValue = 4;
    const employee = Employee("The Witch of the Wastes", testValue, "spellsNhearts@email.com");
    expect(employee.id).toBe(testValue);
}) 

test("should set email through the constructor arguement", () => {
    const testValue = "spellsNhearts@email.com";
    const employee = Employee("The Witch of the Wastes", 4, testValue);
    expect(employee.email).toBe(testValue);
})

test("getName() should return employee name", () => {
    const testValue = "The Witch of the Wastes";
    const employee = Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
    expect(employee.getName()).toBe(testValue);
}) 

test("getId() should return employee id number", () => {
    const testValue = 4;
    const employee = Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
    expect(employee.getId()).toBe(testValue);
}) 

test("getEmail() should return employee name", () => {
    const testValue = "spellsNhearts@email.com";
    const employee = Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
    expect(employee.getEmail()).toBe(testValue);
})

test("getRole() should return employee job title", () => {
    const testValue = "Employee";
    const employee = Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
    expect(employee.getRole()).toBe(testValue);
})