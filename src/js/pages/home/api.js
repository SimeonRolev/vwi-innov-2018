class HomeAsset {
    static fromApi (data) {
        return new HomeAsset(data);
    }

    constructor (data) {
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
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                }),
                HomeAsset.fromApi({
                    name: 'HomeAsset One.vwx',
                    thumbnail: 'http://www.jra-vectorworks-cad.co.uk/uploads/1/9/7/7/19774615/innovative-vectorworks-bim-page-15_orig.jpg',
                    author: 'Author of first'
                })
            ])
        })
    }
};
