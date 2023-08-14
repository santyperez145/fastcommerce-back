import Flooring from "../Flooring.js";
import "dotenv/config.js";
import "../../config/db.js";

let flooring = [
    {
        name: "Ceramic Baltimore 45cm 10mm x 45cm m2",
        description: [
            {
                resum: "ceramic Baltimore 10mm 45cm x 45cm cm m2",
                material: "ceramic",
                condition: "new",
                dimensions: "10cmm 45cm x 45cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/8724016_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/8724016_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/8724016_03?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "cecafi",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Ceramic Brown 45cm 10mm x 45cm m2",
        description: [
            {
                resum: "ceramic Brown 10mm 45cm x 45cm m2",
                material: "ceramic",
                condition: "new",
                dimensions: "10cmm 45cm x 45cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/4213556_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4213556_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4213556_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "cecafi",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Ceramic Coffe 10mm 45cm x 45cm m2",
        description: [
            {
                resum: "ceramic Coffe 10mm 45cm x 45cm m2",
                material: "ceramic",
                condition: "new",
                dimensions: "10cm 45cm x 45cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2680777_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2680777_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2680777_03?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "cecafi",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Ceramic Coffe with stripes 10mm 45cm x 45cm m2",
        description: [
            {
                resum: "ceramic Coffe with stripes 10mm 45cm x 45cm m2",
                material: "ceramic",
                condition: "new",
                dimensions: "10cm 45cm x 45cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/4227271_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4227271_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4227271_03?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "cecafi",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Floating floor gray 10mm 138cmx19.3cm cm m2",
        description: [
            {
                resum: "Floating floor 10mm gray 138cm x 19.3cm 1.59 m2",
                material: "laminating flooring",
                condition: "new",
                dimensions: "10mm 138cm x 19.3cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2682141_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2682141_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2682141_03?wid=1500&hei=1500&qlt=70",
        ],
        price: 47,
        brand: "Holztek",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Floating floor birch 10mm 138cmx19.3cm cm m2",
        description: [
            {
                resum: "Floating floor birch 10mm 138cm x 19.3cm 1.59 m2",
                material: "laminating flooring",
                condition: "new",
                dimensions: "10mm 138cm x 19.3cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/302489X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/302489X_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/302489X_04?wid=1500&hei=1500&qlt=70",
        ],
        price: 47,
        brand: "Holztek",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Floating floor walnut 10mm 138cmx19.3cm cm m2",
        description: [
            {
                resum: "Floating floor 10mm walnut 138cm x 19.3cm 1.59 m2",
                material: "laminating flooring",
                condition: "new",
                dimensions: "10mm 138cm x 19.3cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6659500_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6659500_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6659500_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 46,
        brand: "Holztek",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Floating Floor Vinyl SPC Cedar 4mm + eva 1mm 18cm x 122cm m2",
        description: [
            {
                resum: "Renew the appearance of your home with Vinyl Flooring, an innovative product that will make your life much easier. It is perfect if you are looking for resistance to water and humidity. Also, it doesn't scratch. It is ideal for installing in a bathroom, kitchen, living-dining room, bedroom or living room.",
                material: "vinyl flooring",
                condition: "new",
                dimensions: "4mm 121.9cm x 17.8cm",
                color: "cedar"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6647111_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6647111_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6647111_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 46,
        brand: "Hoga",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Floating Floor Vinyl SPC Sand 4mm + eva 1mm 18cm x 122cm m2",
        description: [
            {
                resum: "Renew the appearance of your home with Vinyl Flooring, an innovative product that will make your life much easier. It is perfect if you are looking for resistance to water and humidity. Also, it doesn't scratch. It is ideal for installing in a bathroom, kitchen, living-dining room, bedroom or living room.",
                material: "vinyl flooring",
                condition: "new",
                dimensions: "4mm 121.9cm x 17.8cm",
                color: "sand"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6647138_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6647138_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6647138_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 56,
        brand: "Hoga",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        name: "Floating Floor Vinyl SPC Gray 4mm + eva 1mm 18cm x 122cm m2",
        description: [
            {
                resum: "Renew the appearance of your home with Vinyl Flooring, an innovative product that will make your life much easier. It is perfect if you are looking for resistance to water and humidity. Also, it doesn't scratch. It is ideal for installing in a bathroom, kitchen, living-dining room, bedroom or living room.",
                material: "vinyl flooring",
                condition: "new",
                dimensions: "4mm 121.9cm x 17.8cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6647170_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6647170_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6647170_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 56,
        brand: "Hoga",
        stock: 10,
        favorite: false,
        offer: false
    },

];

Flooring.insertMany(flooring);