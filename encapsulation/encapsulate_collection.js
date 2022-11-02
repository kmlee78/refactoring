class Person {
    constructor(name) {
        this._courses = [];
        this._name = name;
    }
    get name() { return this._name; }
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name() { return this._name; }
    get isAdvanced() { return this._isAdvanced; }
}

for (const name of readBasicCourseNames(filename)) {
    aPerson.courses.push(new Course(name, false));
}


/*------------------------refactoring-------------------------*/


class Person {
    constructor(name) {
        this._courses = [];
        this._name = name;
    }
    get name() { return this._name; }
    get courses() { return this._courses.slice(); }
    addCourse(aCourse) { this._courses.push(aCourse); }
    removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError(); }) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }
}

for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
}