import { observable, action, decorate } from 'mobx';


class UIStore {
    static storedProps = ['sidepanel'];

    sidepanel = true;
    isListView = true;

    constructor (root) {
        this.root = root;
    }

    toggle (prop) {
        this[prop] = !this[prop];
    }
}

decorate(UIStore, {
    sidepanel: observable,
    isListView: observable,
    toggle: action,
})

export default UIStore;
