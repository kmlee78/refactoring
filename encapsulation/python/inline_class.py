# It already has a good class separation, but inline it anyway.  

class Facility:
    def __init__(self, machine: str, machine_code: str):
        self._machine = machine
        self._machine_code = machine_code

    @property
    def facility_info(self) -> str:
        return f"{self._machine} ({self._machine_code})"


class Manager:
    def __init__(self, name: str, facility: Facility):
        self._name = name
        self._facility = facility

    @property
    def name(self):
        return self._name

    @property
    def role(self) -> str:
        return f"Manager of {self._facility.facility_info}"
