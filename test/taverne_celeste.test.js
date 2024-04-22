import { expect, test } from 'vitest'
import { Tavern, Item } from "../src/taverne_celeste";

test("should first item name be foo", () => {
  const taverneCeleste = new Tavern([new Item("foo", 0, 0)]);
  const items = taverneCeleste.modifyItem();
  expect(items[0].name).toBe("bar");
});
