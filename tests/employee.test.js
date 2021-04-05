const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("fullName", () => {
        it("should set name through the constructor arguement", () => {
            const testValue = "The Witch of the Wastes";
            const employee = new Employee(testValue, 4, "spellsNhearts@email.com");
            expect(employee.fullName).toBe(testValue);
        })
    });

    describe("id", () => {
        it("should set id through the constructor arguement", () => {
            const testValue = 4;
            const employee = new Employee("The Witch of the Wastes", testValue, "spellsNhearts@email.com");
            expect(employee.id).toBe(testValue);
        })
    });
    describe("email", () => {
        it("should set email through the constructor arguement", () => {
            const testValue = "spellsNhearts@email.com";
            const employee = new Employee("The Witch of the Wastes", 4, testValue);
            expect(employee.email).toBe(testValue);
        })
    });

    describe("getName()", () => {
        it("should return employee name", () => {
            const testValue = "The Witch of the Wastes";
            const employee = new Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
            expect(employee.getName()).toBe(testValue);
        })
    });

    describe("getId()", () => {
        it("should return employee id number", () => {
            const testValue = 4;
            const employee = new Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
            expect(employee.getId()).toBe(testValue);
        })
    });

    describe("getEmail()", () => {
        it("should return employee email", () => {
            const testValue = "spellsNhearts@email.com";
            const employee = new Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
            expect(employee.getEmail()).toBe(testValue);
        })
    });

    describe("getRole()", () => {
        it("should return employee job title", () => {
            const testValue = "Employee";
            const employee = new Employee("The Witch of the Wastes", 4, "spellsNhearts@email.com");
            expect(employee.getRole()).toBe(testValue);
        })
    });
});