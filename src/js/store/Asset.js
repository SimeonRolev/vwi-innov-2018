import { observable, decorate, action } from 'mobx';

import homeApi from 'js/pages/home/api';

class AssetStore {
    assets = [];

    constructor (root) {
        this.root = root;
    }

    loadHomeAssets () {
        return homeApi.getItems().then(assets => {
            this.assets.replace(assets);
        });
    }

    search (query) {
        return homeApi.search(query).then(assets => {
            this.assets.replace(assets);
        });
    }
}

decorate(AssetStore, {
    assets: observable,
    loadHomeAssets: action
})

export default AssetStore;
