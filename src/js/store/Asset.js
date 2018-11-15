import { observable, decorate, action } from 'mobx';

import homeApi, { HomeAsset } from 'js/pages/home/api';

class AssetStore {
    assets = [];

    constructor (root) {
        this.root = root;
    }

    getHomeAssets () {
        homeApi.getItems().then(assets => {
            this.assets = assets.map(asset => new HomeAsset.fromApi(asset))
        });
    }
}

decorate(AssetStore, {
    assets: observable,
    getHomeAssets: action
})

export default AssetStore;
