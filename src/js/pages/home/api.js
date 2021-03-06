import axios from 'axios';

class HomeAsset {
    static fromApi (data) {
        return new HomeAsset(data);
    }

    constructor (data) {
        const link = decodeURI(data.url_vwx_attachment).split('/');
        this.id = data.id;
        this.name = link[link.length - 1];
        this.author = data.author;
        this.previewDate = data.date_updated || 'No upload date';
        this.thumbnail = data.thumbnail;
        this.link = data.url_vwx_attachment;

        this.download = this.download.bind(this);
    }

    download () {
        window.open(this.link);
    }
}

const SERVER_ADDRESS = '192.168.7.74';

export { HomeAsset };
export default {
    search (query) {
        return axios({
            method: 'get',
            url: `http://${SERVER_ADDRESS}/search?q=${encodeURIComponent(query)}`
        })
            .then(r => r.data.map(HomeAsset.fromApi));
    },
    getItems () {
        return axios({
            method: 'get',
            url: `http://${SERVER_ADDRESS}/search`
        })
            .then(r => r.data.map(HomeAsset.fromApi));
    }
};
