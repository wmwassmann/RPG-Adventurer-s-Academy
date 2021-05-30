
import mongoose from "mongoose"



const narration = mongoose.Schema({
        lines: [
            
        ]
    

}, {
    timestamps: false,
});

var Narration = mongoose.model("narration", narration);

export default Narration;


