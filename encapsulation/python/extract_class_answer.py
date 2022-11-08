class Worker:
    def __init__(self, name: str):
        self._name = name

    @property
    def name(self) -> str:
        return self._name


class Facility:
    def __init__(self, facility: str, facility_code: str):
        self._facility = facility
        self._facility_code = facility_code

    @property
    def facility_info(self) -> str:
        return f"{self._facility} ({self._facility_code})"