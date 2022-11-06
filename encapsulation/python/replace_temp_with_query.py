from typing import Literal


class Evaluation:
    def __init__(self, score: int, attitude: Literal["good", "not bad", "bad"]):
        self._score = score
        self._attitude = attitude

    def evaluate(self) -> str:
        if self._score > 90:
            grade = "A"
        elif self._score > 80:
            grade = "B"
        elif self._score > 70:
            grade = "C"
        else:
            grade = "F"
        if self._attitude == "good":
            extra_grade = "+"
        elif self._attitude == "not bad":
            extra_grade = "0"
        else:
            extra_grade = "-"
        return f"Your grade is {grade + extra_grade}"



if __name__ == "__main__":
    evaluation = Evaluation(85, "good")
    print(evaluation.evaluate())        