const Intern = require("../lib/Intern"); 

test("should set school name through the constructor arguement", () => {
    const testValue = "Witch University";
    const intern = new Intern("Kiki", 3, "KikiDelivery@email.com", testValue);
    expect(manager.school).toBe(testValue);
}) 

test("getRole() should return intern job title", () => {
    const testValue = "Intern";
    const intern = new Intern("Kiki", 3, "KikiDelivery@email.com", "Witch University");
    expect(intern.getRole()).toBe(testValue);
}) 

test("getSchool() should return school name", () => {
    const testValue = "Witch University";
    const intern = new Intern("Kiki", 3, "KikiDelivery@email.com", "Witch University");
    expect(intern.getSchool()).toBe(testValue);
})