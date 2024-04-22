import { Tavern, Item } from "../src/taverne_celeste.js";

const items = [
  new Item("Invitations to a Mystical concert", 16, 21),
  new Item("Invitations to a Mystical concert", 9, 48),
  new Item("Warglaives of Azzinoth", 11, 21),
  new Item("Darnassian Blue Cheese", 3, 0),
  new Item("Elixir of Ancient Knowledge", 6, 8),
  new Item("Atiesh, Greatstaff of the Guardian", 1, 80),
  new Item("Atiesh, Greatstaff of the Guardian", -3, 80),

  // new Item("Accursed Brooch", 4, 7)
];
const taverneCeleste = new Tavern(items);

const days = Number(process.argv[2]) || 10;

for (let day = 0; day < days + 1; day++) {
  console.log(`-------- Day n°${day} --------`);
  console.table(items.map(item => ({ name: item.name, expiration: item.expiration, quality: item.quality })));
  taverneCeleste.modifyItem();
  console.log(); // Print an empty line
}
