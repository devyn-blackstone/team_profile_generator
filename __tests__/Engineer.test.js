const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe("test Engineer properties", () => {
        it("test name property", () => {
            const engineer = new Engineer("Brad", "12345", "brad@gmail.com","jordond27");

            expect(engineer.name).toEqual("Brad");
        })

        it("test id property", () => {
            const engineer = new Engineer("Brad", "12345", "brad@gmail.com","jordond27");

            expect(engineer.id).toEqual("12345");
        })

        it("test email property", () => {
            const engineer = new Engineer("Brad", "12345", "brad@gmail.com","jordond27");

            expect(engineer.email).toEqual("brad@gmail.com");
        })

        it("test github property", () => {
            const engineer = new Engineer("Brad", "12345", "brad@gmail.com","jordond27");

            expect(engineer.github).toEqual("jordond27");
        })
    });

    describe("test Employee methods", () => {
        it("test getName method", () => {
            const engineer = new Engineer("Luke", "7465", "luke@gmail.com","username123")

            expect(engineer.getName()).toEqual("Luke");
        })

        it("test getId method", () => {
            const engineer = new Engineer("Luke", "7465", "luke@gmail.com","username123")

            expect(engineer.getId()).toEqual("7465");
        })

        it("test getEmail method", () => {
            const engineer = new Engineer("Luke", "7465", "luke@gmail.com","username123")

            expect(engineer.getEmail()).toEqual("luke@gmail.com");
        })

        it("test getRole method", () => {
            const engineer= new Engineer("Luke", "7465", "luke@gmail.com","username123")

            expect(engineer.getRole()).toEqual("Engineer");
        })

        it("test getGithub method", () => {
            const engineer = new Engineer("Luke", "7465", "luke@gmail.com","username123")

            expect(engineer.getGithub()).toEqual("username123");
        })
    });
});