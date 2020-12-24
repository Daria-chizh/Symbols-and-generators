class Team {
  constructor() {
    this.members = [];
  }

  add(hero) {
    this.members.push(hero);
  }

  * [Symbol.iterator]() {
    for (const element of this.members) {
      yield element;
    }
  }
}
const team = new Team();

team.add({
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
});

team.add({
  name: 'Лучник 2',
  type: 'Bowman',
  health: 150,
  level: 1,
  attack: 340,
  defence: 10,
});

for (const member of team) {
  console.log(member.name, member.health, member.attack);
}
