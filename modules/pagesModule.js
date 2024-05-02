const fs = require('fs');
const path = require('path');

exports.pagesModule = function getPages (dir){

    var pagesNames = fs.readdirSync(dir);
    for (var i in pagesNames) {
        pagesNames[i] = path.basename(pagesNames[i], '.ejs')
    }
    return pagesNames
}

