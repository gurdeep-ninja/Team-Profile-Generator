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

it("Can get the question for Manager's name", () => {
    const testValue = "Enter manager's name:";
    const e = new Questions('manager');
    const nameQuestion = e.getNameQuestion()
    expect(nameQuestion.message).toBe(testValue);
});


it("Can get the question for Engineer's name", () => {
    const testValue = "Enter engineer's name:";
    const e = new Questions('engineer');
    const nameQuestion = e.getNameQuestion()
    expect(nameQuestion.message).toBe(testValue);
});


it("Can get the question for Intern's name", () => {
    const testValue = "Enter intern's name:";
    const e = new Questions('intern');
    const nameQuestion = e.getNameQuestion()
    expect(nameQuestion.message).toBe(testValue);
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