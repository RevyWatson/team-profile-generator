const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        it("should set office number through the constructor arguement", () => {
            const testValue = 12;
            const manager = new Manager("Babba Yagga", 1, "Yaggs@email.com", testValue);
            expect(manager.officeNumber).toBe(testValue);
        })
    });

    describe("getOfficeNumber()", () => {
        it("getOfficeNumber should return office number", () => {
            const testValue = 12;
            const manager = new Manager("Babba Yagga", 1, "Yaggs@email.com", 12);
            expect(manager.getOfficeNumber()).toBe(testValue);
        })
    });

    describe("getRole()", () => {
        it("should return manager job title", () => {
            const testValue = "Manager";
            const manager = new Manager("Babba Yagga", 1, "Yaggs@email.com", 12);
            expect(manager.getRole()).toBe(testValue);
        })
    });
});