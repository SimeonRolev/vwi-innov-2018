import { observable, decorate, action } from 'mobx';

import homeApi, { HomeAsset } from 'js/pages/home/api';

class AssetStore {
    assets = [];

    constructor (root) {
        this.root = root;
    }

    loadHomeAssets () {
        homeApi.getItems().then(assets => {
            this.assets.replace(assets.map(asset => new HomeAsset.fromApi(asset)));
        });
    }
}

decorate(AssetStore, {
    assets: observable,
    loadHomeAssets: action
})

export default AssetStore;
