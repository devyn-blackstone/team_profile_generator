const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe("test Employee properties", () => {
        it("test name property", () => {
            const employee = new Employee("Brad", "12345", "brad@gmail.com");

            expect(employee.name).toEqual("Brad");
        })

        it("test id property", () => {
            const employee = new Employee("Brad", "12345", "brad@gmail.com");

            expect(employee.id).toEqual("12345");
        })

        it("test email property", () => {
            const employee = new Employee("Brad", "12345", "brad@gmail.com");

            expect(employee.email).toEqual("brad@gmail.com");
        })
    });

    describe("test Employee methods", () => {
        it("test getName method", () => {
            const employee = new Employee("Luke", "7465", "luke@gmail.com")

            expect(employee.getName()).toEqual("Luke");
        })

        it("test getEmail method", () => {
            const employee = new Employee("Luke", "7465", "luke@gmail.com")

            expect(employee.getEmail()).toEqual("luke@gmail.com");
        })

        it("test getId method", () => {
            const employee = new Employee("Luke", "7465", "luke@gmail.com")

            expect(employee.getId()).toEqual("7465");
        })

        it("test getRole method", () => {
            const employee = new Employee("Luke", "7465", "luke@gmail.com")

            expect(employee.getRole()).toEqual("Employee");
        })
    });
});
