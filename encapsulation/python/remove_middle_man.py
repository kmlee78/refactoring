class City:
    def __init__(self, name: str):
        self._name = name

    @property
    def name(self):
        return self._name


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

    @property
    def info(self):
        return f"{self.street_address}, {self.city.name}"


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
    def city(self):
        return self.address.city


if __name__ == "__main__":
    city = City("London")
    address = Address("Baker Street", city)
    person = Person("Sherlock Holmes", address)

    # Refactor theses codes to refer address info at once by using new method
    # Remove useless middle man after the refactorization
    print(f"{person.name} lives in {person.city.name}")
    print(f"{person.name} lives in {person.address.street_address}")