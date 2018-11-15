class HomeAsset {
    static fromApi (data) {
        return new HomeAsset(data);
    }

    constructor (data) {
        this.id = data.id;
        this.name = data.name;
        this.thumbnail = data.thumbnail;
        this.author = data.author;
    }
}

export { HomeAsset };
export default {
    getItems: function () {
        return new Promise((resolve, reject) => {
            resolve([
                HomeAsset.fromApi({
                    id: 1,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 2,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 3,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 4,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 5,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 6,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 7,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 8,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 9,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    id: 10,
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                })
            ])
        })
    }
};
