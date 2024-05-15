import { expect, test } from 'vitest'
import { Tavern, Item } from "../src/taverne_celeste";

test("should first item name be foo", () => {
  const taverneCeleste = new Tavern([new Item("foo", 0, 0)]);
  const items = taverneCeleste.modifyItem();
  // Changez le nom de l'élément ici
  items[0].name = "bar";
  expect(items[0].name).toBe("bar");
});



test("should decrease quality and expiration for normal item", () => {
  const taverneCeleste = new Tavern([new Item("normal item", 10, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(19);
  expect(items[0].expiration).toBe(9);
});

test("should decrease quality twice as fast after expiration", () => {
  const taverneCeleste = new Tavern([new Item("normal item", 0, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(18);
});

test("should not decrease quality below 0", () => {
  const taverneCeleste = new Tavern([new Item("normal item", 10, 0)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(0);
});

test("should increase quality for 'Darnassian Blue Cheese'", () => {
  const taverneCeleste = new Tavern([new Item("Darnassian Blue Cheese", 10, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(21);
});

test("should not increase quality above 50", () => {
  const taverneCeleste = new Tavern([new Item("Darnassian Blue Cheese", 10, 50)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(50);
});

test("should not change 'Atiesh, Greatstaff of the Guardian'", () => {
  const taverneCeleste = new Tavern([new Item("Atiesh, Greatstaff of the Guardian", 10, 80)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(80);
  expect(items[0].expiration).toBe(10);
});

test("should increase quality for 'Invitations to a Mystical concert' as expiration approaches", () => {
  const taverneCeleste = new Tavern([new Item("Invitations to a Mystical concert", 11, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(21);
});

test("should increase quality for 'Invitations to a Mystical concert' by 2 when 10 days or less", () => {
  const taverneCeleste = new Tavern([new Item("Invitations to a Mystical concert", 10, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(22);
});

test("should increase quality for 'Invitations to a Mystical concert' by 3 when 5 days or less", () => {
  const taverneCeleste = new Tavern([new Item("Invitations to a Mystical concert", 5, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(23);
});

test("should drop quality to 0 for 'Invitations to a Mystical concert' after the concert", () => {
  const taverneCeleste = new Tavern([new Item("Invitations to a Mystical concert", 0, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(0);
});

test("should decrease quality twice as fast for 'Accursed' item", () => {
  const taverneCeleste = new Tavern([new Item("Accursed item", 10, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(18);
});

test("should decrease quality four times as fast for 'Accursed' item after expiration", () => {
  const taverneCeleste = new Tavern([new Item("Accursed item", 0, 20)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(16);
});
test("should set quality to 0 if quality is less than 0", () => {
  const taverneCeleste = new Tavern([new Item("normal item", 10, -1)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(0);
});

test("should set quality to 50 if quality is more than 50", () => {
  const taverneCeleste = new Tavern([new Item("Darnassian Blue Cheese", 10, 51)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].quality).toBe(50);
});







