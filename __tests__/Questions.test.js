const Questions = require("../lib/Questions");

// test("Can set school via constructor", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.school).toBe(testValue);
// });

//getNameQuestion(type) {}

test("Can instantiate Questions instance", () => {
    const e = new Questions();
    expect(typeof(e)).toBe("object");
  });

it("Can set employee type", () => {
  const testValue = "manager";
  const e = new Questions(testValue);
  expect(e.employeeType).toBe(testValue);
});


// test("Can set school via constructor", () => {
//     const testValue = "UCLA";
//     const e = new Intern("Foo", 1, "test@test.com", testValue);
//     expect(e.school).toBe(testValue);
//   });



// getIdQuestion() {}

// getEmailQuestion() {}

// getOfficeQuestion(){}

// getGitHubQuestion(){}

// getSchoolQuestion(){}