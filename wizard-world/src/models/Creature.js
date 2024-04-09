const mongoose = require("mongoose");

const creatureSchema = new mongoose.Schema({
name:{ type: String, required :true},
species:{ type: String, required :true},
skinColor:{ type: String, required :true},
eyeColor:{ type: String, required :true},
image:{ type: String, required :true},
description:{ type: String, required :true},
votes: '',
owner:''

});



const Creature = mongoose.model('Creature', creatureSchema);
module.exports = Creature;