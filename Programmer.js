import Person from './Person'

export default class Programmer extends Person {
    constructor(name, language) {
        super(name);
        this.language = language;
    }
    get name() {
        return `Programmer ${super.name}`;
    }
    code() {
        return `${this.name} codes in ${this.language}`;
    }

}

