const mongoose =require('mongoose');
const matchSchema = mongoose.Schema({
    equipeOne:String,
    equipeTwo:String,
    scoreOne:String,
    scoreTwo:String
});
const match =mongoose.model('Match',matchSchema);
module.exports=match;