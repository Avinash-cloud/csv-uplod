var mongoose = require('mongoose'); 
  
var dumbledoresArmySchema = new mongoose.Schema({  
    firstName: String,
    lastName: String,
    house: String,
    image: String,
});


// const productSchema = new mongoose.Schema({
//     ID: { type: String, required: true },
//     Type: { type: String, required: true },
//     SKU: { type: String, required: true },
//     Name: { type: String, required: true },
//     Published: { type: Boolean, default: false },
//     IsFeatured: { type: Boolean, default: false },
//     VisibilityInCatalog: { type: String, default: 'visible' }, // Example default value, change as per your requirements
//     ShortDescription: { type: String },
//     Description: { type: String },
//     AddProduct: { type: String }, // Example data type, change as per your requirements
//     CareInstruction: { type: String },
//     DeliveryInformations: { type: String },
//     TaxClass: { type: String },
//     InStock: { type: Boolean, default: true },
//     Stock: { type: Number, default: 0 },
//     Weight: { type: Number },
//     Length: { type: Number },
//     Width: { type: Number },
//     Height: { type: Number },
//     SalePrice: { type: Number },
//     RegularPrice: { type: Number },
//     Categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }], // Assuming you have a Category schema
//     Tags: [{ type: String }],
//     Images: [{ type: String }], // Array of image URLs
//     Parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Reference to parent product if it's a variant
//     Attribute1Name: { type: String },
//     Attribute1Values: [{ type: String }],
//     Attribute1Visible: { type: Boolean, default: true },
//     Attribute1Global: { type: Boolean, default: true }
//   });
  
module.exports = new mongoose.model('DumbledoresArmy', dumbledoresArmySchema); 