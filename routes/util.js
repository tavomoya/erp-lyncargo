var q = require('q');
var util = require('../models/util');

module.exports = function (prefix, app) {
    //Test function
    app.get(prefix + '/:collection', function (req, res) {
        util.getApiData(app.db, req.params.collection)
        .then(util.success(res))
        .fail(util.error(res));
    });

    require('./data')(prefix, app, util);
}