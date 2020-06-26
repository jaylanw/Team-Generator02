// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name,id,email, gitHub, role) {
        super(name,id,email);
        this.github = gitHub;
        this.role = role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;