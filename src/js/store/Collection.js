import { observable, decorate, computed, autorun } from 'mobx';

class CollectionItem {
    constructor (data) {
        this.data = data;
        this.isSelected = false;
    }

    select () {
        this.isSelected = true;
    }
}

class Collection {
    items = []

    constructor (items) {
        autorun(() => {
            this.items.replace(items.map(data => new CollectionItem(data)));
        });
    }

    get selectedItem () {
        return this.items.find(item => item.isSelected)
    }

    deselectAll () {
        this.items.map(item => item.deselect())
    }
}

decorate(Collection, {
    items: observable,
    selectedItem: computed
})

export default Collection;
