import mongoose from "mongoose";
// import { SavedRecipe } from "./SavedRecipe";
// import { savedRecipeById } from "../controllers/recipe";


const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    ist:{
        type: String,
        required: true,
    },
    ing1: {type:String},
    ing2: {type:String},
    ing3: {type:String},
    ing4: {type:String},
    qty1: {type:String},
    qty2: {type:String},
    qty3: {type:String},
    qty4: {type:String},
    imgUrl:{type:String,require:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
});

export const Recipe = mongoose.model("recipe", recipeSchema)