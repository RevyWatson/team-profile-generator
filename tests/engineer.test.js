const Engineer = require("../lib/Engineer"); 

test("should set github username through the constructor arguement", () => {
    const testValue = "WickedWitch";
    const engineer = new Manager("Elphaba", 2, "greengirl@email.com", testValue);
    expect(engineer.github).toBe(testValue);
})

test("getRole() should return intern job title", () => {
    const testValue = "Engineer";
    const engineer = new Engineer("Elphaba", 2, "greengirl@email.com", "WickedWitch");
    expect(engineer.getRole()).toBe(testValue);
}) 

test("getGithub() should return Github username", () => {
    const testValue = "WickedWitch";
    const engineer = new Engineer("Elphaba", 2, "greengirl@email.com", "WickedWitch");
    expect(engineer.getGithub()).toBe(testValue);
})