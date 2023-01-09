const normalDegradeRate = 1;
const conjuredDegradeRate = 2;


class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}


class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach((item) => {
            switch(item.name) {
                case 'Aged Brie':
                    updateAgedBrieQuality(item);
                    break;
                case 'Backstage passes to a TAFKAL80ETC concert':
                    updateBackstagePassQuality(item);
                    break;
                case 'Conjured':
                    updateConjuredQuality(item);
                    break;
                case 'Sulfuras, Hand of Ragnaros':
                    updateSulfurasQuality(item);
                    break;
                default:
                    updateNormalItemQuality(item);
            }


            function updateAgedBrieQuality(item) {
                // Brie Logic Here
                if(item.quality < 50) {
                    item.quality++;
                }

                item.sellIn--;
            }
            

            function updateBackstagePassQuality(item) {
                // Backstage Logic Here
                if(item.sellIn > 0 && item.sellIn <=5) {
                    item.quality += 3;
                } else if(item.sellIn > 0 && item.sellIn <= 10) {
                    item.quality += 2;
                } else if(item.sellIn > 0) {
                    item.quality++;
                }

                if(item.sellIn > 0 && item.quality > 50) {
                    item.quality = 50;
                }

                if(item.sellIn < 1) {
                    item.quality = 0;
                }

                item.sellIn--;
            }
            

            function updateSulfurasQuality(item) {
                // Sulfuras Logic Here
                return;
            }
            

            function updateNormalItemQuality(item) {
                // Normal Item Logic Here
                if(item.quality < 50) {
                    if(item.sellIn < 1) {
                        item.quality = item.quality - (normalDegradeRate * 2);
                    } else {
                        item.quality = item.quality - normalDegradeRate ;
                    }
                    if(item.quality < 1) {
                        item.quality = 0;
                    }
                }

                item.sellIn--;
            }
            
            
            function updateConjuredQuality(item) {
                // Conjured Logic Here
                if(item.sellIn < 0) {
                    item.quality = item.quality - (normalDegradeRate * conjuredDegradeRate * 2);
                } else {
                    item.quality =  item.quality - (normalDegradeRate * conjuredDegradeRate);
                }
                if(item.quality < 0) {
                    item.quality = 0;
                }

                item.sellIn--;
            }
        });

        return this.items;
    }
}


module.exports = {
    Item,
    Shop
}
