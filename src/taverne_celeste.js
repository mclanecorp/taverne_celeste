export class Item {
  constructor(name, expiration, quality) {
    this.name = name;
    this.expiration = expiration;
    this.quality = quality;
  }
}

export class Tavern {

  constructor(items = []) {
    this.items = items;
  }

  modifyItem() {
    this.items.forEach(item => {
      if (item.name === 'Atiesh, Greatstaff of the Guardian') {
        return;
      }

      if (item.name === 'Darnassian Blue Cheese') {
        this.updateDarnassianBlueCheese(item);
      } else if (item.name === 'Invitations to a Mystical concert') {
        this.updateInvitationsToMysticalConcert(item);
      } else if (item.name.startsWith('Accursed')) { // Assuming Accursed items start with 'Accursed'
        this.updateAccursedItem(item);
      }else {
        this.updateNormalItem(item);
      }

      item.expiration--;
    });

    return this.items;
  }

  updateNormalItem(item) {
    item.quality--;
    if (item.expiration <= 0) {
      item.quality--;
    }
    this.ensureQualityWithinBounds(item);
  }

  updateDarnassianBlueCheese(item) {
    item.quality++;

    this.ensureQualityWithinBounds(item);
  }

  updateInvitationsToMysticalConcert(item) {
    if (item.expiration <= 0) {
      item.quality = 0;
    } else if (item.expiration < 6) {
      item.quality += 3;
    } else if (item.expiration < 11) {
      item.quality += 2;
    } else {
      item.quality++;
    }
    this.ensureQualityWithinBounds(item);
  }

  ensureQualityWithinBounds(item) {
    if (item.quality < 0) {
      item.quality = 0;
    } else if (item.quality > 50) {
      item.quality = 50;
    }
  }
  updateAccursedItem(item) {
    item.quality -= 2;
    if (item.expiration <= 0) {
      item.quality -= 2;
    }
    this.ensureQualityWithinBounds(item);
  }
}








