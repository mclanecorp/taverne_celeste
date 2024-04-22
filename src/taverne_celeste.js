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
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Darnassian Blue Cheese' && this.items[i].name != 'Invitations to a Mystical concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Atiesh, Greatstaff of the Guardian') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'Invitations to a Mystical concert') {
            if (this.items[i].expiration < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].expiration < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Atiesh, Greatstaff of the Guardian') {
        this.items[i].expiration = this.items[i].expiration - 1;
      }
      if (this.items[i].expiration < 0) {
        if (this.items[i].name != 'Darnassian Blue Cheese') {
          if (this.items[i].name != 'Invitations to a Mystical concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Atiesh, Greatstaff of the Guardian') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
