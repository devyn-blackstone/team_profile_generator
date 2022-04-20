const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe("test Intern properties", () => {
        it("test name property", () => {
            const intern = new Intern("Brad", "12345", "brad@gmail.com","GT");

            expect(intern.name).toEqual("Brad");
        })

        it("test id property", () => {
            const intern = new Intern("Brad", "12345", "brad@gmail.com","GT");

            expect(intern.id).toEqual("12345");
        })

        it("test email property", () => {
            const intern = new Intern("Brad", "12345", "brad@gmail.com","GT");

            expect(intern.email).toEqual("brad@gmail.com");
        })

        it("test school property", () => {
            const intern = new Intern("Brad", "12345", "brad@gmail.com","GT");

            expect(intern.school).toEqual("GT");
        })
    });

    describe("test Employee methods", () => {
        it("test getName method", () => {
            const intern = new Intern("Luke", "7465", "luke@gmail.com","FSU")

            expect(intern.getName()).toEqual("Luke");
        })

        it("test getId method", () => {
            const intern = new Intern("Luke", "7465", "luke@gmail.com","FSU")

            expect(intern.getId()).toEqual("7465");
        })

        it("test getEmail method", () => {
            const intern = new Intern("Luke", "7465", "luke@gmail.com","FSU")

            expect(intern.getEmail()).toEqual("luke@gmail.com");
        })

        it("test getRole method", () => {
            const intern= new Intern("Luke", "7465", "luke@gmail.com","FSU")

            expect(intern.getRole()).toEqual("Intern");
        })

        it("test getGithub method", () => {
            const intern = new Intern("Luke", "7465", "luke@gmail.com","FSU")

            expect(intern.getSchool()).toEqual("FSU");
        })
    });
});