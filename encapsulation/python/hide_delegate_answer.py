class Country:
    def __init__(self, name: str):
        self._name = name

    @property
    def name(self):
        return self._name


class City:
    def __init__(self, name: str, country: Country):
        self._name = name
        self._country = country

    @property
    def name(self):
        return self._name

    @property
    def country(self):
        return self._country


class Address:
    def __init__(self, street_address: str, city: City):
        self._city = city
        self._street_address = street_address

    @property
    def street_address(self):
        return self._street_address

    @property
    def city(self):
        return self._city


class Person:
    def __init__(self, name: str, address: Address):
        self._name = name
        self._address = address

    @property
    def name(self):
        return self._name

    @property
    def address(self):
        return self._address

    @property
    def country(self):
        return self.address.city.country


if __name__ == "__main__":
    country = Country("United Kingdom")
    city = City("London", country)
    address = Address("Baker Street", city)
    person = Person("Sherlock Holmes", address)

    print(f"{person.name} lives in {person.country.name}")