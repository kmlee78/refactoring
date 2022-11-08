PLAYERS = [
    "토마토베이컨수프",
    "기다란웰시코기",
    "중형차세차장",
    "숨겨진트롤",
]


class Queue:
    def __init__(self):
        self._hiddenlist = []

    @property
    def hiddenlist(self):
        return self._hiddenlist

    def add_player(self, player):
        self._hiddenlist.append(player)


class Player:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name


if __name__ == "__main__":
    queue = Queue()
    for player in PLAYERS:
        queue.add_player(Player(player))
    print(queue.hiddenlist)