const mongoose=require('mongoose');
const teamSchema=mongoose.Schema({
    name:String,
    country:String
})

const team= mongoose.model('team',teamSchema)
module.exports=team;