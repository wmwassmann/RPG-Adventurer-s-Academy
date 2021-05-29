
import mongoose from "mongoose"



const dialogs = mongoose.Schema({
        characterName: {
            type: String,         
            required: false,
        },
        lines: [
            "Greetings traveler! And welcome to The Avdenturer\'s Academy!",
            "Please! Come in! Come in! Warm yourself by the fire.",
            "Allow my to introduce myself.  My name is Argus Timbers and I shall be your student councilor!",
            "Now, it is my duty to assess all prosepctive student and guide them towards whatever adventurous calling ingites their heroic spark - The Academy\"s universal symbol of an adventurer.",
            "From the instance you set foot within these halls, your actions have been monitored, and every future action will count towards igniting your heroic spark.",
            "But of course there are many methods one may utilize in acquiring their heroic spark. For example, does your heart yearn for daring adventure, the thrill of combat, and protecting those in need?",
            "Or are you more interested in the subtler aspects of the adventurer\"s path such as complex social interactions, or perhaps a wide set of skills or character traits to accomplish your goals through less violent means?",
       

            // line01: {
            //     type: String,         
            //     required: false,
            // },
            // line02: {
            //     type: String,
            //     required: false,
            // },
            // line03: {
            //     type: String,
            //     required: false,
            // },
            // line04: {
            //     type: String,
            //     required: false,
            // },
            // line05: {
            //     type: String,
            //     required: false,
            // },
            // line06: {
            //     type: String,
            //     required: false,
            // },
            // line07: {
            //     type: String,
            //     required: false,
            // },
            // line08: {
            //     type: String,
            //     required: false,
            // }
        ]
    

}, {
    timestamps: false,
});

var Dialogs = mongoose.model("Dialogs", dialogs);

export default Dialogs;


