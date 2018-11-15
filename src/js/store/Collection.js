import { observable, decorate, autorun, action } from 'mobx';

class CollectionItem {
    isSelected = false;
    
    constructor (data) {
        this.data = data;
    }

    select () {
        this.isSelected = true;
    }

    deselect () {
        this.isSelected = false;
    }
}

decorate(CollectionItem, {
    isSelected: observable,
    select: action,
    deselect: action
})

class Collection {
    items = []

    constructor (items) {
        autorun(() => {
            this.items.replace(items.map(data => new CollectionItem(data)));
        });
    }

    deselectAll () {
        this.items.map(item => item.deselect())
    }

    select (id) {
        this.deselectAll();
        this.items.find(item => item.data.id === id).select();
    }
}

decorate(Collection, {
    items: observable,
    select: action
})

export default Collection;
