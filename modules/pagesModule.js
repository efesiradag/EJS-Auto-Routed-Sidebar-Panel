const fs = require('fs');
const path = require('path');

exports.pagesModule = function getPages (dir){

    var pages = fs.readdirSync(dir);
    for (var i in pages) {
        pages[i] = path.basename(pages[i], '.ejs')
    }
    return pages
}

