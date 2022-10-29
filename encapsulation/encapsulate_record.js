const organization = { name: "에크미 구스베리", country: "GB" };

result += `<h1>${organization.name}</h1>`;
organization.name = newName;


/*------------------------refactoring-------------------------*/


class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() { return this._name; }
    set name(aString) { this._name = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

const organization = new Organization({ name: "에크미 구스베리", country: "GB" });
result += `<h1>${organization.name}</h1>`;
organization.name = newName;