const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe("test Manager properties", () => {
        it("test name property", () => {
            const manager = new Manager("Brad", "12345", "brad@gmail.com","23");

            expect(manager.name).toEqual("Brad");
        })

        it("test id property", () => {
            const manager = new Manager("Brad", "12345", "brad@gmail.com","23");

            expect(manager.id).toEqual("12345");
        })

        it("test email property", () => {
            const manager = new Manager("Brad", "12345", "brad@gmail.com","23");

            expect(manager.email).toEqual("brad@gmail.com");
        })

        it("test officeNumber property", () => {
            const manager = new Manager("Brad", "12345", "brad@gmail.com","23");

            expect(manager.officeNumber).toEqual("23");
        })
    });

    describe("test Employee methods", () => {
        it("test getName method", () => {
            const manager = new Manager("Luke", "7465", "luke@gmail.com","67")

            expect(manager.getName()).toEqual("Luke");
        })

        it("test getId method", () => {
            const manager = new Manager("Luke", "7465", "luke@gmail.com","67")

            expect(manager.getId()).toEqual("7465");
        })

        it("test getEmail method", () => {
            const manager = new Manager("Luke", "7465", "luke@gmail.com","67")

            expect(manager.getEmail()).toEqual("luke@gmail.com");
        })

        it("test getRole method", () => {
            const manager = new Manager("Luke", "7465", "luke@gmail.com","67")

            expect(manager.getRole()).toEqual("Manager");
        })

        it("test getofficeNumber method", () => {
            const manager = new Manager("Luke", "7465", "luke@gmail.com","67")

            expect(manager.getofficeNumber()).toEqual("67");
        })
    });
});