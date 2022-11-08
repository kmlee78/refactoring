class ManageSector:
    def __init__(self, manager: str, machine: str, machine_code: str):
        self._manager = manager
        self._machine = machine
        self._machine_code = machine_code

    @property
    def role(self) -> str:
        return f"{self._manager} manages {self._machine} ({self._machine_code})"
