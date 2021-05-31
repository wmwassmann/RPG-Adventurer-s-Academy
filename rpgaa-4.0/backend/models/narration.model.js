
import mongoose from "mongoose"



const narration = mongoose.Schema({
    // characterName: {
    //     type: String,
    //     required: false,
    // },
    lines: [

    ]


}, {
    timestamps: false,
});

var Narration = mongoose.model("Narration", narration);

export default Narration;


