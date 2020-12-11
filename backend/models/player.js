const mongoose= require('mongoose');
const playerSchema = mongoose.Schema({

      name: String,
      position: String,
      description: String,
      birthday: String,
      image:String,
      teamId:String
});

const player= mongoose.model('Player',playerSchema);
 module.exports=player;