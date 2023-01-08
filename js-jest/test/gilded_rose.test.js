const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("Check if quality degrades twice as fast after sell by date", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });
});

describe("Gilded Rose", function() {
  it("Sulfuras quality should never change from 80", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

describe("Gilded Rose", function() {
  it("Aged Brie should increase in quality with increase as it ages", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
});

describe("Gilded Rose", function() {
  it("Regular product quality should never be over 50", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(51);
  });
});

describe("Gilded Rose", function() {
  it("Quality of product should never be negative", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Gilded Rose", function() {
  it("Sulfuras, Hand of Ragnaros should never decrease in quality", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
});

describe("Gilded Rose", function() {
  it("Check functionality of regular product, Dexterity Vest", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });
});

describe("Gilded Rose", function() {
  it("Quality of Aged Brie should never increase over 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Gilded Rose", function() {
  it("Backstage passes increase in quality as SellIn value approaches", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });
});

describe("Gilded Rose", function() {
  it("Backstage passes increases by 2 when there's 10 days or less", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(49);
  });
});

describe("Gilded Rose", function() {
  it("Backstage passes increases by 3 when there's 5 days or less", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
});

describe("Gilded Rose", function() {
  it("Backstage passes drops to 0 after concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});

describe("Gilded Rose", function() {
  it("Conjured item should degrade in quality twice as fast as other items", function() {
    const gildedRose = new Shop([new Item("Conjured", 5, 25)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });
});