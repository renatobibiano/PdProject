var Schema = {
  disc: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 50, nullable: false},
    year: {type: 'int', maxlength: 4, nullable: false},
    id: {type: 'int', nullable: false},
  }
};
module.exports = Schema;