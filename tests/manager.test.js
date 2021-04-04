const Manager = require("../lib/Manager");

test("should set office number through the constructor arguement", () => {
    const testValue = 12;
    const manager = new Manager("Babba Yagga", 1, "Yaggs@email.com", testValue);
    expect(manager.officeNumber).toBe(testValue);
}) 

test("getRole() should return manager job title", () => {
    const testValue = "Manager";
    const manager = new Manager("Babba Yagga", 1, "Yaggs@email.com", 12);
    expect(manager.getRole()).toBe(testValue);
}) 

test("getOfficeNumber should return office number", () => {
    const testValue = 12;
    const manager = new Manager("Babba Yagga", 1, "Yaggs@email.com", 12);
    expect(manager.getOfficeNumber()).toBe(testValue);
})