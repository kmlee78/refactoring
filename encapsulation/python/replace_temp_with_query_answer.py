from typing import Literal


class Evaluation:
    def __init__(self, score: int, attitude: Literal["good", "not bad", "bad"]):
        self._score = score
        self._attitude = attitude

    def evaluate(self) -> str:
        return f"Your grade is {self.grade + self.extra_grade}"

    @property
    def grade(self) -> str:
        if self._score > 90:
            return "A"
        elif self._score > 80:
            return "B"
        elif self._score > 70:
            return "C"
        else:
            return "F"
    
    @property
    def extra_grade(self) -> str:
        if self._attitude == "good":
            return "+"
        elif self._attitude == "not bad":
            return "0"
        else:
            return "-"


if __name__ == "__main__":
    evaluation = Evaluation(85, "good")
    print(evaluation.evaluate())        