const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("github", () => {
        it("should set github username through the constructor arguement", () => {
            const testValue = "WickedWitch";
            const engineer = new Engineer("Elphaba", 2, "greengirl@email.com", testValue);
            expect(engineer.github).toBe(testValue);
        })
    });

    describe("getGithub()", () => {
        it("should return Github username", () => {
            const testValue = "WickedWitch";
            const engineer = new Engineer("Elphaba", 2, "greengirl@email.com", "WickedWitch");
            expect(engineer.getGithub()).toBe(testValue);
        })
    });

    describe("getRole()", () => {
        it("should return intern job title", () => {
            const testValue = "Engineer";
            const engineer = new Engineer("Elphaba", 2, "greengirl@email.com", "WickedWitch");
            expect(engineer.getRole()).toBe(testValue);
        })
    });
});