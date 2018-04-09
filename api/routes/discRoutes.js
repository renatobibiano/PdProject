module.exports = function(app) {
  var discList = require('../controllers/discController');

  // discList Routes
  app.route('/disc')
    .get(discList.list_all_discs)
    .post(discList.create_a_disc);


  app.route('/disc/:discId')
    .get(discList.read_a_disc)
    .put(discList.update_a_disc)
    .delete(discList.delete_a_disc);
};