const mongoose=require('mongoose');
const pp="mongodb+srv://kuntalmongal27:Kuntal123@e-commerce.qmzu9ny.mongodb.net/e-commerce?retryWrites=true&w=majority"

mongoose.connect(pp,{
   
}).then(()=>{
    console.log(`connection successful`);

}).catch((err)=>console.log(`no connction`));
