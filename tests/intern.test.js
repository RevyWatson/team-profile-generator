const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should set school name through the constructor arguement", () => {
        const testValue = "Witch University";
        const intern = new Intern("Kiki", 3, "KikiDelivery@email.com", testValue);
        expect(intern.school).toBe(testValue);
    })

    describe("getSchool()", () => {
        it("should return school name", () => {
            const testValue = "Witch University";
            const intern = new Intern("Kiki", 3, "KikiDelivery@email.com", "Witch University");
            expect(intern.getSchool()).toBe(testValue);
        })
    });

    describe("getRole", () => {
        it("getRole() should return intern job title", () => {
            const testValue = "Intern";
            const intern = new Intern("Kiki", 3, "KikiDelivery@email.com", "Witch University");
            expect(intern.getRole()).toBe(testValue);
        })
    });
});