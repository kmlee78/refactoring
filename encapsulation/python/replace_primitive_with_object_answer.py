import random
from typing import List


class Pizza:
    def __init__(self):
        self._ingredients = []
    
    def add_ingredient(self, ingredient):
        self._ingredients.append(ingredient)

    @property
    def ingredients(self):
        return self._ingredients

    def __repr__(self):
        return f"Pizza with {self._ingredients}"

    def has_pineapple_inside(self):
        for ingredient in self._ingredients:
            if ingredient.name == "pineapple":
                return True
        return False


class RandomIngredient:
    def __init__(self):
        name = random.choice(self.possible_ingredients)
        self._name = name

    @property
    def name(self):
        return self._name

    @property
    def possible_ingredients(self):
        return ["cheese", "tomato", "mushroom", "pineapple"]

    def __repr__(self):
        return self._name


def make_random_pizzas() -> List[Pizza]:
    number_of_pizzas_to_make = 8
    number_of_ingredients_to_put = 2
    pizzas = []
    for _ in range(number_of_pizzas_to_make):
        pizza = Pizza()
        for _ in range(number_of_ingredients_to_put):
            pizza.add_ingredient(RandomIngredient())
        pizzas.append(pizza)
    return pizzas


if __name__ == "__main__":
    pizzas = make_random_pizzas()
    print(pizzas)
    pizzas_without_pineapple = [
        pizza for pizza in pizzas if not pizza.has_pineapple_inside()
    ]
    print(pizzas_without_pineapple)