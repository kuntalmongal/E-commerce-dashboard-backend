const mongoose=require('mongoose');
const pp="mongodb+srv://Kuntal:Kuntal123@atlascluster.rini6z6.mongodb.net/e-commerce?retryWrites=true&w=majority"

mongoose.connect(pp,{
   
}).then(()=>{
    console.log(`connection successful`);

}).catch((err)=>console.log(`no connction`));
