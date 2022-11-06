class Factory:
    def __init__(self, worker: str, facility: str, facility_code: str):
        self._worker = worker
        self._facility = facility
        self._facility_code = facility_code

    @property
    def worker(self) -> str:
        return self._worker
    
    @property
    def facility_info(self) -> str:
        return f"{self._facility} ({self._facility_code})"