class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function decreaseQuality(item) {
  return item.quality--;
};

function increaseQuality(item) {
  return item.quality++;
};

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if(item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if(item.quality > 0 && item.quality < 50 && item.name != 'Sulfuras, Hand of Ragnaros' && item.name != 'Conjured') {
          decreaseQuality(item);
        }
        if(item.quality > 0 && item.name == 'Conjured') {
          item.quality = item.quality - 2;
        }
      } else {
        if(item.quality < 50) {
          increaseQuality(item);
          if(item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if(item.sellIn < 11) {
              if(item.quality < 50) {
                increaseQuality(item);
              }
            }
            if(item.sellIn < 6) {
              if(item.quality < 50) {
                increaseQuality(item);
              }
              if(item.sellIn < 1) {
                item.quality = 0;
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                decreaseQuality(item);
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            increaseQuality(item);
          }
        }
      }
    });

    return this.items;
  }
}


module.exports = {
  Item,
  Shop
}
