import Construction from "../Construction.js";
import "dotenv/config.js";
import "../../config/db.js";

let construction = [
    {
        name: "Concrete Polpaico 25kg",
        description: [
            {
                resum: "Concrete is a fine, smooth powder that is used as a binder because it hardens after being in contact with water. It is produced from a mixture of limestone and clay, calcined and subsequently ground.",
                material: "Cement",
                condition: "New",
                dimensions: "10cmm 0.2mx0.5m",
                color: "Gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/338845X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/338845X_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/338845X_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "Polpaico",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Premium Plaster 1kg",
        description: [
            {
                resum: "powdery product from the firing of gypsum or aljez stone, which once mixed with water, in certain proportions, is capable of setting in air",
                material: "Plaster",
                condition: "New",
                dimensions: "3cmm 0.1mx0.2m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/857122_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/857122_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/857122_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "Topex",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Volcanite lowered edge 10mm 1.2x2.4m",
        description: [
            {
                resum: "Let's go to that arrangement or extension with the security that the plasterboard with lowered edge gives you, from the Volcanita brand, a lightweight element that is easy to install. With a thickness of 10 mm and measurements of 120x240 cm, this sheet has been specially designed for use in the construction of dividing walls, ceilings and wall coverings.Thanks to its gray color, you can install it and keep it as it is, or add the color you want so that it blends perfectly with the rest of your home, since its surface provides a smooth finish to decorate. Its weight of 21.6 kg and performance of 2.88 m2 make the Volcanita plasterboard, give safety and comfort to your construction.",
                material: "Plasterboard",
                condition: "New",
                dimensions: "3cmm 0.1mx0.2m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/857122_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/857122_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/857122_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "Topex",
        stock: 10,
        favorite: false,
        offer: false
    },
];

Construction.insertMany(construction);
/*
carpentry_id: { type: Types.ObjectId, ref:'categories', require: true },
        name: { type: String, require: true },
        description: { type: String, require: true },
        cover_photo: { type: String, require: true },
        price: { type: Number, require: true },
        brand: { type: String, require: true },
        stock: { type: Number, require: true },
        favorite: { type: Boolean, default: false },
        offer: { type: Boolean, default: false },*/