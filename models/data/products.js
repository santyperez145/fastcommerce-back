import Product from "../Product.js";
import "dotenv/config.js";
import "../../config/db.js";

let products = [
    //carpentry = [
        {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Pine structural plywood 12mm 1.22mx2.44m",
        description: [
            {
                resum: "Board made with continuous sheets of radiata pine wood arranged with its fibers at right angles, moisture resistant phenolic adhesive, highly structurally solid, high thermal insulation, fire resistant. This structural plywood is widely used in frameworks, partitions, roof coverings, interior and exterior wood cladding. Packaging, boxes and the like.",
                material: "Wood",
                condition: "New",
                dimensions: "12mm 1.22mx2.44m",
                color: "Natural"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 30,
        brand: "Timbermac",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Pine structural plywood 15mm 1.22mx2.44m",
        description: [
            {
                resum: "Board made with continuous sheets of radiata pine wood arranged with its fibers at right angles, moisture resistant phenolic adhesive, highly structurally solid, high thermal insulation, fire resistant. This structural plywood is widely used in frameworks, partitions, roof coverings, interior and exterior wood cladding. Packaging, boxes and the like.",
                material: "Wood",
                condition: "New",
                dimensions: "15mm 1,22mx2,44m",
                color: "Natural"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 35,
        brand: "Timbermac",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Pine structural plywood 18mm 1.22mx2.44m",
        description: [
            {
                resum: "Board made with continuous sheets of radiata pine wood arranged with its fibers at right angles, moisture resistant phenolic adhesive, highly structurally solid, high thermal insulation, fire resistant. This structural plywood is widely used in frameworks, partitions, roof coverings, interior and exterior wood cladding. Packaging, boxes and the like.",
                material: "Wood",
                condition: "New",
                dimensions: "18mm 1,22mx2,44m",
                color: "Natural"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/650757_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "Timbermac",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Dry bushed Pine 1x2'' x 3.2m",
        description: [
            {
                resum: "Dry brushed radiata pine wood is a uniform and dimensionally stable product with a brushed finish on all four sides, making it soft to the touch and pleasing to the eye. This product was dried in kilns specially designed for drying wood and under a rigorous program that ensures that all the pieces of wood have a moisture content below 18%, which guarantees that the piece will not change its dimensions and that makes it It is a recommended product to be used in definitive constructions.",
                material: "Wood",
                condition: "New",
                dimensions: "1x2'' x 3.2m",
                color: "Natural"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/850594_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/850594_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 2,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Dry bushed Pine 2x2'' x 3.2m",
        description: [
            {
                resum: "Dry brushed radiata pine wood is a uniform and dimensionally stable product with a brushed finish on all four sides, making it soft to the touch and pleasing to the eye. This product was dried in kilns specially designed for drying wood and under a rigorous program that ensures that all the pieces of wood have a moisture content below 18%, which guarantees that the piece will not change its dimensions and that makes it It is a recommended product to be used in definitive constructions.",
                material: "Wood",
                condition: "New",
                dimensions: "2x2'' x 3.2m",
                color: "Natural"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/850594_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/850594_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 3,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "White Melamine 15mm 1.83mx2.5m.",
        description: [
            {
                resum: "It is a very stable chemical compound or synthetic polymer with good resistance. It serves as a coating for wooden boards. It has a resistant, durable finish and is easy to work with: it is not necessary to sand or apply additional finishes. In addition, the format of the board is practical for furniture construction. They are waterproof and have a variety of thicknesses.",
                material: "MDP",
                condition: "New",
                dimensions: "15mm 1.83mx2.5m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/571539_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/571539_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/571539_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "White Melamine 18mm 1.83mx2.5m.",
        description: [
            {
                resum: "It is a very stable chemical compound or synthetic polymer with good resistance. It serves as a coating for wooden boards. It has a resistant, durable finish and is easy to work with: it is not necessary to sand or apply additional finishes. In addition, the format of the board is practical for furniture construction. They are waterproof and have a variety of thicknesses.",
                material: "MDP",
                condition: "New",
                dimensions: "18mm 1.83mx2.5m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/571547_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/571539_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/571539_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 45,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Black Melamine 15mm 1.83mx2.5m.",
        description: [
            {
                resum: "It is a very stable chemical compound or synthetic polymer with good resistance. It serves as a coating for wooden boards. It has a resistant, durable finish and is easy to work with: it is not necessary to sand or apply additional finishes. In addition, the format of the board is practical for furniture construction. They are waterproof and have a variety of thicknesses.",
                material: "MDP",
                condition: "New",
                dimensions: "15mm 1.83mx2.5m",
                color: "Black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2194058_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194058_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194058_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Black Melamine 18mm 1.83mx2.5m.",
        description: [
            {
                resum: "It is a very stable chemical compound or synthetic polymer with good resistance. It serves as a coating for wooden boards. It has a resistant, durable finish and is easy to work with: it is not necessary to sand or apply additional finishes. In addition, the format of the board is practical for furniture construction. They are waterproof and have a variety of thicknesses.",
                material: "MDP",
                condition: "New",
                dimensions: "15mm 1.83mx2.5m",
                color: "Black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2194058_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194058_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 45,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Chocolate Melamine 15mm 1.83mx2.5m.",
        description: [
            {
                resum: "It is a very stable chemical compound or synthetic polymer with good resistance. It serves as a coating for wooden boards. It has a resistant, durable finish and is easy to work with: it is not necessary to sand or apply additional finishes. In addition, the format of the board is practical for furniture construction. They are waterproof and have a variety of thicknesses.",
                material: "MDP",
                condition: "New",
                dimensions: "15mm 1.83mx2.5m",
                color: "Chocolate"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2194201_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194201_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194201_01?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Chocolate Melamine 18mm 1.83mx2.5m.",
        description: [
            {
                resum: "It is a very stable chemical compound or synthetic polymer with good resistance. It serves as a coating for wooden boards. It has a resistant, durable finish and is easy to work with: it is not necessary to sand or apply additional finishes. In addition, the format of the board is practical for furniture construction. They are waterproof and have a variety of thicknesses.",
                material: "MDP",
                condition: "New",
                dimensions: "18mm 1.83mx2.5m",
                color: "Chocolate"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/1087800_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194201_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2194201_01?wid=1500&hei=1500&qlt=70",
        ],
        price: 45,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "White MDF 1f 3mm 1.83mx2.5m.",
        description: [
            {
                resum: "The white MDF you mention is a type of medium-density fiberboard characterized by having a white finish on both sides. It is a material widely used in the carpentry and construction industry due to its versatility and ease of handling. The white MDF board has a thickness of 3 mm and dimensions of 1830x2500 mm. These standard measurements allow it to be used in a wide variety of applications, such as furniture manufacturing, wall coverings, shelving, displays, among other woodworking projects. White MDF offers a smooth and uniform surface, which makes it easy to paint, cover or decorate with other materials. In addition, being white on both sides, it does not require painting or coating before use, which speeds up the finishing process.",
                material: "MDP",
                condition: "New",
                dimensions: "18mm 1.83mx2.5m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6509908_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6509908_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6509908_12?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "White melamine edgebanding 0,5mm 21mmx10m",
        description: [
            {
                resum: "The white MDF you mention is a type of medium-density fiberboard characterized by having a white finish on both sides. It is a material widely used in the carpentry and construction industry due to its versatility and ease of handling. The white MDF board has a thickness of 3 mm and dimensions of 1830x2500 mm. These standard measurements allow it to be used in a wide variety of applications, such as furniture manufacturing, wall coverings, shelving, displays, among other woodworking projects. White MDF offers a smooth and uniform surface, which makes it easy to paint, cover or decorate with other materials. In addition, being white on both sides, it does not require painting or coating before use, which speeds up the finishing process.",
                material: "PVC",
                condition: "New",
                dimensions: "0,5mm 21mmx10m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/208434_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/208434_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/208434_13?wid=1500&hei=1500&qlt=70",
        ],
        price: 5,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Black melamine edgebanding 0,5mm 21mmx10m",
        description: [
            {
                resum: "The Black MDF you mention is a type of medium-density fiberboard characterized by having a Black finish on both sides. It is a material widely used in the carpentry and construction industry due to its versatility and ease of handling. The Black MDF board has a thickness of 3 mm and dimensions of 1830x2500 mm. These standard measurements allow it to be used in a wide variety of applications, such as furniture manufacturing, wall coverings, shelving, displays, among other woodworking projects. Black MDF offers a smooth and uniform surface, which makes it easy to paint, cover or decorate with other materials. In addition, being Black on both sides, it does not require painting or coating before use, which speeds up the finishing process.",
                material: "PVC",
                condition: "New",
                dimensions: "0,5mm 21mmx10m",
                color: "Black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/863556_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/863556_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/863556_12?wid=1500&hei=1500&qlt=70",
        ],
        price: 5,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Chocolate melamine edgebanding 0,5mm 21mmx10m",
        description: [
            {
                resum: "The chocolate MDF you mention is a type of medium-density fiberboard characterized by having a chocolate finish on both sides. It is a material widely used in the carpentry and construction industry due to its versatility and ease of handling. The chocolate MDF board has a thickness of 3 mm and dimensions of 1830x2500 mm. These standard measurements allow it to be used in a wide variety of applications, such as furniture manufacturing, wall coverings, shelving, displays, among other woodworking projects. chocolate MDF offers a smooth and uniform surface, which makes it easy to paint, cover or decorate with other materials. In addition, being chocolate on both sides, it does not require painting or coating before use, which speeds up the finishing process.",
                material: "PVC",
                condition: "New",
                dimensions: "0,5mm 21mmx10m",
                color: "chocolate"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/1109855_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1109855_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1109855_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 5,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Contact adhesive Agorex 1gl",
        description: [
            {
                resum: "Dried clear and remains flexible. Suitable for most fabrics. Stops fabric edges fraying. Can be used on hems and seams for re-enforcement. For permanent fix can be ironed.",
                condition: "New",
                dimensions: "1gl",
                color: "Beige"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/438537_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/438537_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/438537_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 50,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab6",
        name: "Contact adhesive normal Glue 1gl",
        description: [
            {
                resum: "Dried clear and remains flexible. Suitable for most fabrics. Stops fabric edges fraying. Can be used on hems and seams for re-enforcement. For permanent fix can be ironed.",
                condition: "New",
                dimensions: "1gl",
                color: "Beige"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3475107_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3475107_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3475107_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "Generic",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //constructions = [
        {
        category_id: "64d4fd9fc84ae7805abbeab7",
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
        price: 25,
        brand: "Polpaico",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
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
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Volcanite lowered edge 10mm 1.2m x 2.4m",
        description: [
            {
                resum: "Let's go to that arrangement or extension with the security that the plasterboard with lowered edge gives you, from the Volcanita brand, a lightweight element that is easy to install. With a thickness of 10 mm and measurements of 120x240 cm, this sheet has been specially designed for use in the construction of dividing walls, ceilings and wall coverings.Thanks to its gray color, you can install it and keep it as it is, or add the color you want so that it blends perfectly with the rest of your home, since its surface provides a smooth finish to decorate. Its weight of 21.6 kg and performance of 2.88 m2 make the Volcanita plasterboard, give safety and comfort to your construction.",
                material: "Plasterboard",
                condition: "New",
                dimensions: "10mm 1.2x2.4m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/738549_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/738549_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/738549_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 12,
        brand: "Topex",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Volcanite lowered edge 12,5mm 1.2m x 2.4m",
        description: [
            {
                resum: "Let's go to that arrangement or extension with the security that the plasterboard with lowered edge gives you, from the Volcanita brand, a lightweight element that is easy to install. With a thickness of 10 mm and measurements of 120x240 cm, this sheet has been specially designed for use in the construction of dividing walls, ceilings and wall coverings.Thanks to its gray color, you can install it and keep it as it is, or add the color you want so that it blends perfectly with the rest of your home, since its surface provides a smooth finish to decorate. Its weight of 21.6 kg and performance of 2.88 m2 make the Volcanita plasterboard, give safety and comfort to your construction.",
                material: "Plasterboard",
                condition: "New",
                dimensions: "10mm 1.2x2.4m",
                color: "White"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/738549_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/738549_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/738549_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 15,
        brand: "Topex",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Corrugated sheet Zinc wave gray Coating 0.35mm 0.851m x 2m",
        description: [
            {
                resum: "This type of corrugated sheet is ideal for any type of roof covering solutions, due to its unmatched resistance characteristics and reduced thickness (from 0.35 mm). Characteristics Toledo wave corrugated sheets Zincalum gray: It is composed of a steel sheet covered by a layer of aluminum whose size is 0.35X851X3000 mm. The corrugated sheets can be installed on steel or dry wood siding, using some elements for fixing and according to the instructions provided. Its use is recommended on roofs and side coverings. Do not miss the highest quality to cover the roof of your home!",
                material: "Zinc",
                condition: "New",
                dimensions: "0.35mm 0.851m x 2m",
                color: "Silver"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/477036_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/477036_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/477036_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 12.5,
        brand: "Bolkow",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Corrugated sheet Zinc wave gray Coating 0.35mm 0.851m x 3m",
        description: [
            {
                resum: "This type of corrugated sheet is ideal for any type of roof covering solutions, due to its unmatched resistance characteristics and reduced thickness (from 0.35 mm). Characteristics Toledo wave corrugated sheets Zincalum gray: It is composed of a steel sheet covered by a layer of aluminum whose size is 0.35X851X3000 mm. The corrugated sheets can be installed on steel or dry wood siding, using some elements for fixing and according to the instructions provided. Its use is recommended on roofs and side coverings. Do not miss the highest quality to cover the roof of your home!",
                material: "Zinc",
                condition: "New",
                dimensions: "0.35mm 0.851m x 3m",
                color: "Silver"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/155772_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/155772_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/155772_12?wid=1500&hei=1500&qlt=70",
        ],
        price: 15,
        brand: "Bolkow",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Corrugated sheet Zinc wave gray Coating 0.35mm 0.851m x 3.66m",
        description: [
            {
                resum: "This type of corrugated sheet is ideal for any type of roof covering solutions, due to its unmatched resistance characteristics and reduced thickness (from 0.35 mm). Characteristics Toledo wave corrugated sheets Zincalum gray: It is composed of a steel sheet covered by a layer of aluminum whose size is 0.35X851X3000 mm. The corrugated sheets can be installed on steel or dry wood siding, using some elements for fixing and according to the instructions provided. Its use is recommended on roofs and side coverings. Do not miss the highest quality to cover the roof of your home!",
                material: "Zinc",
                condition: "New",
                dimensions: "0.35mm 0.851m x 3m",
                color: "Silver"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/477575_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/477575_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/477575_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "Bolkow",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Continuous tile Colonial terracotta 1.6m x 2m",
        description: [
            {
                resum: "Continuous Tile Colonial Instapanel is a continuous length roofing covering with a traditional ribbed design, similar to a cement tile. It is used on roofs of new homes and extensions, sheds, vehicular and pedestrian accesses, etc. Characteristics of the Colonial Instapanel Continuous Tile: Manufactured in low-gloss, prepainted zinc-aluminum steel, resistant to weather agents. It is another product of Instapanel, a division of Empresas Cintac, dedicated to the manufacture and sale of panels and metal products. The Colonial Instapanel Continuous Tile is lightweight and easy to install. It constitutes an efficient alternative to have a roof with a beautiful traditional roof design, with the advantages of metal cladding.",
                material: "Zinc",
                condition: "New",
                dimensions: "0.5mm 1.6m x 2m",
                color: "Terracotta"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/265198X_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/265198X_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/265198X_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 18,
        brand: "Instapanel",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Continuous tile Colonial terracotta 1.6m x 3.66m",
        description: [
            {
                resum: "Continuous Tile Colonial Instapanel is a continuous length roofing covering with a traditional ribbed design, similar to a cement tile. It is used on roofs of new homes and extensions, sheds, vehicular and pedestrian accesses, etc. Characteristics of the Colonial Instapanel Continuous Tile: Manufactured in low-gloss, prepainted zinc-aluminum steel, resistant to weather agents. It is another product of Instapanel, a division of Empresas Cintac, dedicated to the manufacture and sale of panels and metal products. The Colonial Instapanel Continuous Tile is lightweight and easy to install. It constitutes an efficient alternative to have a roof with a beautiful traditional roof design, with the advantages of metal cladding.",
                material: "Zinc",
                condition: "New",
                dimensions: "0.4mm 1.6m x 3.66m",
                color: "Terracotta"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/265198X_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/265198X_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/265198X_24?wid=1500&hei=1500&qlt=70",
        ],
        price: 32,
        brand: "Instapanel",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Asphalt shingle tabacco brown 10mm 1m x 0.335m",
        description: [
            {
                resum: "Among the characteristics of our tiles we can highlight their resistance to wind, blows and fire, they are easy to transport, store and install. They also keep their color in time. In each package there are 19 tiles of 1 meter long by 33.5 cm. each.",
                material: "Asphalt/glass mesh/selected minerals",
                condition: "new",
                dimensions: "10mm 1m x 0.335m",
                color: "tabaccoo brown"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7035748_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7035748_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7035748_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "sombratec",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Asphalt shingle colonial red 10mm 1m x 0.335m",
        description: [
            {
                resum: "Among the characteristics of our tiles we can highlight their resistance to wind, blows and fire, they are easy to transport, store and install. They also keep their color in time. In each package there are 19 tiles of 1 meter long by 33.5 cm. each.",
                material: "Asphalt/glass mesh/selected minerals",
                condition: "new",
                dimensions: "10mm 1m x 0.335m",
                color: "colonial red"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7035756_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7035756_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7035756_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "sombratec",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab7",
        name: "Asphalt shingle black 10mm 1m x 0.335m",
        description: [
            {
                resum: "Among the characteristics of our tiles we can highlight their resistance to wind, blows and fire, they are easy to transport, store and install. They also keep their color in time. In each package there are 19 tiles of 1 meter long by 33.5 cm. each.",
                material: "Asphalt/glass mesh/selected minerals",
                condition: "new",
                dimensions: "10mm 1m x 0.335m",
                color: "black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7035772_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7035772_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7035772_02?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "sombratec",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //electricals = [
        {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Cord 3x02.5 mm per linear meter, Black",
        description: [
            {
                resum: "This 3 x 2.5 mm Elfle Cord and 2 linear meters, specially designed for conducting electricity, will be a great ally if you have to carry out any electrical installation, be it in your home, office or industry. The cord has 3 copper wires covered inside (they all have different colors) and is manufactured to deliver both domestic and industrial use. It is very versatile, which is why it is perfect to be used in various types of installations; it can also withstand up to 18 amps and 4000 watts. Made of PVC and copper, this product measures 1 meter and is black, which helps to camouflage it in a good way.",
                material: "copper/PVC",
                condition: "new",
                dimensions: "2,5mm",
                color: "black",
                ampers: "20A",
                voltage: "220V",
                power: "4400w"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/797456_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/797456_24?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/797456_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 8,
        brand: "elfle",
        stock: 200,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Halogen-free cable 2.5 mm2 50 m Red.",
        description: [
            {
                resum: "With the Freetox Flex halogen-free electrical cable, 2.5mm2 in diameter and 50 meters long, Red, MADECO brand, used for internal power circuits in a dry environment, you can have the security and confidence of having a product with a halogen-free insulation that does not spread fires. For installations in places where people meet, such as health centers (hospitals, clinics, etc.), educational facilities, facilities for religious worship, entertainment and sports facilities, facilities for social purposes, museums, trade facilities, transport terminals air and land, etc. Also corridors, access areas and common areas of collective residential buildings.",
                material: "copper/PVC",
                condition: "new",
                dimensions: "2,5mm",
                color: "red",
                ampers: "20A",
                voltage: "220V",
                power: "4400w"

            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/4134818_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4134818_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4134818_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 3,
        brand: "madeco",
        stock: 200,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Halogen-free cable 2.5 mm2 50 m White.",
        description: [
            {
                resum: "With the Freetox Flex halogen-free electrical cable, 2.5mm2 in diameter and 50 meters long, Red, MADECO brand, used for internal power circuits in a dry environment, you can have the security and confidence of having a product with a halogen-free insulation that does not spread fires. For installations in places where people meet, such as health centers (hospitals, clinics, etc.), educational facilities, facilities for religious worship, entertainment and sports facilities, facilities for social purposes, museums, trade facilities, transport terminals air and land, etc. Also corridors, access areas and common areas of collective residential buildings.",
                material: "copper/PVC",
                condition: "new",
                dimensions: "2,5mm",
                color: "white",
                ampers: "20A",
                voltage: "220V",
                power: "4400w"

            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/4113772_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4113772_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4113772_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 3,
        brand: "madeco",
        stock: 200,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Halogen-free cable 2.5 mm2 50 m Green.",
        description: [
            {
                resum: "With the Freetox Flex halogen-free electrical cable, 2.5mm2 in diameter and 50 meters long, Red, MADECO brand, used for internal power circuits in a dry environment, you can have the security and confidence of having a product with a halogen-free insulation that does not spread fires. For installations in places where people meet, such as health centers (hospitals, clinics, etc.), educational facilities, facilities for religious worship, entertainment and sports facilities, facilities for social purposes, museums, trade facilities, transport terminals air and land, etc. Also corridors, access areas and common areas of collective residential buildings.",
                material: "copper/PVC",
                condition: "new",
                dimensions: "2,5mm",
                color: "green",
                ampers: "20A",
                voltage: "220V",
                power: "4400w"

            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/4113780_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4113780_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/4113780_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 3,
        brand: "madeco",
        stock: 200,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Socket Outlet white 10A",
        description: [
            {
                resum: "Power outlets are the elements intended to electrically connect a conductor or flexible cable to an electrical appliance.",
                material: "technopolymer",
                condition: "new",
                dimensions: "4cm 8cm x 12cm",
                color: "white",
                ampers: "10A",
                voltage: "220V",
                power: "2200w"

            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/338845X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/338845X_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/338845X_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 12,
        brand: "btcino",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Single Armed Switch (9/12) 10 A White",
        description: [
            {
                resum: "Interruptor simple Armado (9/12) 10 A Blanco",
                material: "technopolymer",
                condition: "new",
                dimensions: "4cm 8cm x 12cm",
                color: "white",
                ampers: "10A",
                voltage: "220V",
                power: "2200w"

            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3896072_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3896072_22?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3896072_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "btcino",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Articulated steering wheel male plug 2p+t 10 A White.",
        description: [
            {
                resum: "The Bticino Male Plug is a simple individual attachment, useful for its multiple functionality within the field of electricity, since it guarantees the connection of different devices to the energy network. It is appropriate for cable repairs and making parts to extend, since this articulated appendage acts as an extension of the outlet, its practicality makes it useful for use in homes, offices or shops. It is a fundamental supplement to assemble an extension cord yourself to take the power from the socket to where you need it, according to the electrical requirements of the home, offering you the possibility of saving resources by optimizing them. It is also key when it comes to changing the broken sockets of artifacts or other extension cords, being an essential token you can give it many uses. This Bticino brand product is developed to work with a maximum current of 10 amps and a maximum voltage of 250 volts. The Corner line male plug has two ends, one positive, the other negative, plus a third that is the ground pole. It features an anti-pull vise and addressable pins.",
                material: "technopolymer",
                condition: "new",
                dimensions: "1.5cm 3cm x 4cm",
                color: "white",
                ampers: "10A",
                voltage: "220V",
                power: "2200w"

            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/77927X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/77927X_17?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/77927X_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 5,
        brand: "btcino",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Articulated steering wheel male plug 2p+t 16 A White.",
        description: [
            {
                resum: "The Bticino Male Plug is a simple individual attachment, useful for its multiple functionality within the field of electricity, since it guarantees the connection of different devices to the energy network. It is appropriate for cable repairs and making parts to extend, since this articulated appendage acts as an extension of the outlet, its practicality makes it useful for use in homes, offices or shops. It is a fundamental supplement to assemble an extension cord yourself to take the power from the socket to where you need it, according to the electrical requirements of the home, offering you the possibility of saving resources by optimizing them. It is also key when it comes to changing the broken sockets of artifacts or other extension cords, being an essential token you can give it many uses. This Bticino brand product is developed to work with a maximum current of 16 amps and a maximum voltage of 250 volts. The Corner line male plug has two ends, one positive, the other negative, plus a third that is the ground pole. It features an anti-pull vise and addressable pins.",
                material: "technopolymer",
                condition: "new",
                dimensions: "1.5cm 3cm x 4cm",
                color: "white",
                ampers: "16A",
                voltage: "220V",
                power: "3520w"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/77927X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/77927X_17?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/77927X_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 6,
        brand: "btcino",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Halogen Free superimposed distribution box.",
        description: [
            {
                resum: "Halogen Free superimposed distribution box.",
                material: "Plastic",
                condition: "new",
                dimensions: "4.5cm 8cm x 12.4cm",
                color: "white",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/56278_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/56278_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/56278_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 3,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Plastic embedded junction box",
        description: [
            {
                resum: "Junction Box with Marisio Partition Insert is a box used in electrical installations to house and protect wire and cable connections. For residential and commercial use. Characteristics of the Junction Box with Marisio Partition Insert: Made of self-extinguishing plastic, which reduces the risks of propagation in the event of a short circuit. It is a product of Marisio, a Schneider Electric Chile brand with a long history of products for electrical installations.",
                material: "Plastic",
                condition: "new",
                dimensions: "4cm 6cm x 9cm",
                color: "red",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/212059_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/212059_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/212059_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 2.5,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Conduit electric PVC 20mm 3m red",
        description: [
            {
                resum: "Conduit electric PVC 20mm 3m red",
                material: "Plastic",
                condition: "new",
                dimensions: "20mm x 3m",
                color: "red",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6508049_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6508049_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6508049_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 5,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Connector conduit electric PVC 20mm red",
        description: [
            {
                resum: "Connector conduit electric PVC 20mm red",
                material: "Plastic",
                condition: "new",
                dimensions: "5cm",
                color: "red",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7360061_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7360061_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7360061_13?wid=1500&hei=1500&qlt=70",
        ],
        price: 2,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Curve conduit electric PVC 20mm red",
        description: [
            {
                resum: "Curve conduit electric PVC 20mm red",
                material: "Plastic",
                condition: "new",
                dimensions: "10cm x 10cm",
                color: "red",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7361637_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7361637_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7361637_13?wid=1500&hei=1500&qlt=70",
        ],
        price: 2,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Cople conduit electric PVC 20mm red",
        description: [
            {
                resum: "Curve conduit electric PVC 20mm red",
                material: "Plastic",
                condition: "new",
                dimensions: "10cm",
                color: "red",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7361629_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7361629_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7361629_13?wid=1500&hei=1500&qlt=70",
        ],
        price: 2,
        old_price: 1.25,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Circuit breaker 10 A curve C 6KA.",
        description: [
            {
                resum: "Circuit breaker 10 A curve C 6KA.",
                material: "plastic/copper",
                condition: "new",
                color: "white",
                ampers: "10A",
                voltage: "220V",
                power: "2200w"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/76163X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/76163X_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/76163X_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Circuit breaker 16 A curve C 6KA.",
        description: [
            {
                resum: "Circuit breaker 16 A curve C 6KA.",
                material: "plastic/copper",
                condition: "new",
                color: "white",
                ampers: "16A",
                voltage: "220V",
                power: "3520w"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/168483_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/168483_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/168483_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 25,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeab8",
        name: "Differential switch 25 A.",
        description: [
            {
                resum: "Differential switch 25 A.",
                material: "plastic/copper",
                condition: "new",
                color: "white",
                ampers: "25A",
                voltage: "220V",
                power: "5500w"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/761648_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/761648_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/761648_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //floorings = [
        {
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
        category_id: "64d4fd9fc84ae7805abbeab9",
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
    //],

    //furnitures = [
        {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Dining Set 6 Seats City 78cm x 110cm x 110cm",
        description: [
            {
                resum: "Dining Set 6 Seats City 78cm x 110cm x 110cm",
                material: "wood",
                condition: "new",
                dimensions: "78cm 110cm x 110cm",
                color: "brown"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/15567324_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/15567324_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/15567324_5?wid=1500&hei=1500&qlt=70",
        ],
        price: 566,
        brand: "furnitech",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Dining Set 6 Seats Thomas 75cm x 180cm x 100cm",
        description: [
            {
                resum: "This beautiful and modern Dining Room with 8 chairs is perfect for adding a touch of elegance to your home. The table, made of Rubberwood, is a dark Oak color that perfectly complements the 8 black chairs. The table has a length of 180 cm, a width of 100 cm and a height of 75 cm.",
                material: "wood",
                condition: "new",
                dimensions: "75cm 180cm x 100cm",
                color: "brown"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/16322661_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/16322661_4?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/16322661_9?wid=1500&hei=1500&qlt=70",
        ],
        price: 520,
        brand: "furnitech",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Dining Set 8 Seats Jeff 75cm x 220cm x 110cm",
        description: [
            {
                resum: "If you are looking for a comfortable, spacious and modern dining room, the Nuevalinea dining room set is a perfect option to give that elegant touch to that meeting space and not least. It is made of lenga wood, masisa coigue, being easy to combine with different environments. It can accommodate up to 8 people, with dimensions 110 x 80 x 220 cm, useful when you need extra space to accommodate more guests. Both the table and chairs are varnished, providing a protective layer that allows for quicker, hassle-free cleaning, requiring only dust dusters and cleaners or wood waxes for a higher shine.",
                material: "wood",
                condition: "new",
                dimensions: "75cm 2200cm x 110cm",
                color: "brown/beige"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3669424_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3669424_13?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3669424_09?wid=1500&hei=1500&qlt=70",
        ],
        price: 630,
        brand: "furnitech",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Garden Terrace Set 8 Pieces Set With Umbrella",
        description: [
            {
                resum: "Decorate your garden or terrace and receive your guests comfortably with this combined style table, chairs and umbrella set.",
                material: "iron",
                condition: "new",
                table_dimensions: "70cm 140cm x 85cm",
                sit_dimensions: "84cm 52cm x 60cm",
                color: "black/blue"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_120704291_2773437_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_120704291_2773437_2?wid=1500&hei=1500&qlt=70",
        ],
        price: 453,
        brand: "midtown",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Garden Terrace Set 6 Pieces With Sunshade Midtown",
        description: [
            {
                resum: "Decorate your garden or terrace and receive your guests comfortably with this combined style table, chairs and umbrella set.",
                material: "iron/cloth",
                condition: "new",
                table_dimensions: "80cm",
                sit_dimensions: "65cm 54cm x 90cm",
                color: "white/beige"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_120704656_3479815_3?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_120704656_3479815_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_120704656_2773552_4?wid=1500&hei=1500&qlt=70",
        ],
        price: 399,
        brand: "midtown",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Garden Terrace Set 4 Pieces Acacias",
        description: [
            {
                resum: "Decorate your garden or terrace and receive your guests comfortably with this combined style table, chairs and umbrella set.",
                material: "iron/cloth",
                condition: "new",
                table_dimensions: "40cm 80cm x 50cm",
                sofa_dimensions: "122cm x 62cm x 81cm",
                sit_dimensions: "62cm x 62cm x 81cm",
                color: "wood/beige"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/8733244_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/8733244_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/8733244_03?wid=1500&hei=1500&qlt=70",
        ],
        price: 419,
        brand: "midtown",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Sectional Sofa Brown 220cm x 220cm",
        description: [
            {
                resum: "Larch sectional sofa in brown plush. Highly resistant and comfortable. It has resistant plastic supports that added to its pine-based structure give it great firmness, resistance and durability. It is a product manufactured and elaborated entirely in Chile by the family business Muebles MPR. Our hallmark is the quality of the supplies we use to make our sofas. This quality can be seen in the padding we use (synthetic fiber) for backrests and arms. Also, in the firmness of its structure made from pine wood. On the other hand, there is the 21 density foam that we use for the cushions, which is the perfect mix between resistance and comfort and, finally, the high quality of our fabrics or upholstery in all its versions.",
                material: "iron/cloth",
                condition: "new",
                dimensions: "77cm 220cm x 220cm",
                color: "brown"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_120524690_2695353_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_120524690_2695353_3?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_120524690_2695353_4?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_120524690_2695353_2?wid=1500&hei=1500&qlt=70",
        ],
        price: 609,
        brand: "mpr",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "3 Bodies Reclining Sofa Coffe 88cm x 205cm",
        description: [
            {
                resum: "Larch reclinable sofa in brown plush. Highly resistant and comfortable. It has resistant plastic supports that added to its pine-based structure give it great firmness, resistance and durability. It is a product manufactured and elaborated entirely in Chile by the family business Muebles MPR. Our hallmark is the quality of the supplies we use to make our sofas. This quality can be seen in the padding we use (synthetic fiber) for backrests and arms. Also, in the firmness of its structure made from pine wood. On the other hand, there is the 21 density foam that we use for the cushions, which is the perfect mix between resistance and comfort and, finally, the high quality of our fabrics or upholstery in all its versions.",
                material: "iron/cloth",
                condition: "new",
                dimensions: "100cm 88cm x 205cm",
                color: "brown"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/6031117_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/6031117_3?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/6031117_21?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/6031117_4?wid=1500&hei=1500&qlt=70",
        ],
        price: 550,
        brand: "mpr",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Sectional Sofa Blue 314cm x 210cm",
        description: [
            {
                resum: "Spacious and comfortable sectional for 4 to 5 people, independent foam block seats covered with nappa, silicone fiber backrests.",
                condition: "new",
                dimensions: "80cm 314cm x 210cm",
                color: "blue"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/8249924_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/8249924_21?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/8249924_5?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/8249924_3?wid=1500&hei=1500&qlt=70",
        ],
        price: 703,
        brand: "divano",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Rack TV White 60cm 125cm x 40cm",
        description: [
            {
                resum: "Improve the space in your home with our TV Rack with 2 doors, 2 drawers and upper shelves",
                condition: "new",
                dimensions: "60cm 125cm x 40cm",
                color: "white"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_114271990_950313_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_114271990_950313_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_114271990_950313_3?wid=1500&hei=1500&qlt=70",
        ],
        price: 230,
        brand: "divano",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Rack TV Nogal 65cm 170cm x 40cm",
        description: [
            {
                resum: "Two doors and six shelves, high-quality finish and great durability, ideal for TV and accessories",
                condition: "new",
                dimensions: "60cm 125cm x 40cm",
                color: "nogal"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3193659_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3193659_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3193659_22?wid=1500&hei=1500&qlt=70",
        ],
        price: 290,
        brand: "divano",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeaba",
        name: "Rack TV Wood/White 65cm 170cm x 40cm",
        description: [
            {
                resum: "This piece of furniture is ideal for providing additional storage in your home, whether it is in the living room, bedroom or any other area where you need to organize your belongings. The rack has a functional and versatile design. It has two doors that open to reveal a large space where you can store books, dishes, clothes or other objects according to your needs. In addition, it has a drawer that provides additional space to store smaller and personal items. The white elm color gives a modern and elegant look to the rack, making it easy to combine with different styles of decoration. The melamine finish guarantees its durability and makes it easy to clean, making it a practical and low-maintenance piece of furniture. With adequate width, depth and height dimensions, the Colbún low rack adapts to different spaces and offers a balance between functionality and style. You can use it as an independent piece of furniture or combine it with other pieces of furniture to create a more complete and personalized composition in your home. The Colbún low rack with 2 doors and 1 drawer in white elm color is an attractive option to add additional storage to your home. With its versatile design and organizational capabilities, it allows you to keep your belongings organized and within easy reach, while adding a modern touch to your space.",
                condition: "new",
                dimensions: "60cm 125cm x 40cm",
                color: "wood/white"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/726495X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/726495X_04?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/726495X_06?wid=1500&hei=1500&qlt=70",
        ],
        price: 240,
        brand: "divano",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //hardwares = [
        {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Angle 3mm 20mm x 20mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "3mm 20mm x 20mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/729167_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/729167_16?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/729167_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 15,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Angle 3mm 25mm x 25mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "3mm 25mm x 25mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/729175_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/729175_17?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/729175_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Angle 3mm 30mm x 30mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "3mm 30mm x 30mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/729175_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/729175_17?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/729191_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 25,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Tubular 1.5mm 15mm x 15mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 15mm x 15mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 30,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Tubular 1.5mm 25mm x 25mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 25mm x 25mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/165093_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 45,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Tubular 1.5mm 30mm x 30mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 30mm x 30mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/165042_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/165123_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 60,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Rectangular 1.5mm 25mm x 15mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 25mm x 15mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/890804_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/890804_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/890804_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 30,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Rectangular 1.5mm 40mm x 20mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 40mm x 20mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/166286_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/166286_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/166286_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 60,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Rectangular 1.5mm 40mm x 30mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 40mm x 30mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/166375_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/166375_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/166375_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 65,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Rectangular 1.5mm 50mm x 20mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 50mm x 20mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2063X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2063X_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2063X_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 65,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Steel Rectangular 1.5mm 50mm x 30mm x 6 m",
        description: [
            {
                resum: "Aceros Cox Laminated Angle offers a wide variety of uses within the field of dry construction. As it is made of laminated steel, it can be easily combined with other types of parts, by means of embossing and welding. In this sense, it can be incorporated into structures with large spans and also in internal enclosures, among other works. Some of the characteristics of the Aceros Cox Laminated Angle are strength and durability, two qualities traditionally associated with steel, which is its raw material. The treatment used during its preparation enhances its intrinsic qualities, resulting in an extremely reliable product when integrated into construction work. It has the full capacity to receive large loads, keeping its original shape always intact. The benefits of the Laminate Angle are reflected in all the structures of which it forms an integral part. The great multiplicity of roles that it can fulfill within the same project makes it a very practical and versatile product. It is the ideal piece to take into account when designing any metallic element, whether small or large.",
                material: "steel",
                condition: "new",
                dimensions: "1.5mm 50mm x 30mm x 6m",
                color: "steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/166405_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/166405_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/166405_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 70,
        brand: "sidor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Aluminium tubular 1mm 20mm x 20mm x 3 m",
        description: [
            {
                resum: "The Aluminum Tubular in dimensions of 20x20x1 mm with a length of 3 meters, is presented in a Matte finish, which gives it an elegant and discreet appearance. This aluminum tube is light but strong, making it ideal for a wide variety of applications, from the construction of light structures to the manufacture of machine parts and liquid and gas conveyance systems. Plus, its compact size makes it easy to transport and handle, making it a great choice for DIY projects. The Matte finish provides a modern and attractive look, making it ideal for projects that require an understated and elegant aesthetic.",
                material: "aluminium",
                condition: "new",
                dimensions: "1mm 20mm x 20mm x 3m",
                color: "aluminium"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3769763_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3769763_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3769763_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 20,
        brand: "yperfil",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Aluminium tubular 1mm 25mm x 25mm x 3 m",
        description: [
            {
                resum: "The Aluminum Tubular in dimensions of 20x20x1 mm with a length of 3 meters, is presented in a Matte finish, which gives it an elegant and discreet appearance. This aluminum tube is light but strong, making it ideal for a wide variety of applications, from the construction of light structures to the manufacture of machine parts and liquid and gas conveyance systems. Plus, its compact size makes it easy to transport and handle, making it a great choice for DIY projects. The Matte finish provides a modern and attractive look, making it ideal for projects that require an understated and elegant aesthetic.",
                material: "aluminium",
                condition: "new",
                dimensions: "1mm 25mm x 25mm x 3m",
                color: "aluminium"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3769194_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3769194_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3769194_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 30,
        brand: "yperfil",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabb",
        name: "Laminated Aluminium tubular 1mm 30mm x 30mm x 3 m",
        description: [
            {
                resum: "The Aluminum Tubular in dimensions of 20x20x1 mm with a length of 3 meters, is presented in a Matte finish, which gives it an elegant and discreet appearance. This aluminum tube is light but strong, making it ideal for a wide variety of applications, from the construction of light structures to the manufacture of machine parts and liquid and gas conveyance systems. Plus, its compact size makes it easy to transport and handle, making it a great choice for DIY projects. The Matte finish provides a modern and attractive look, making it ideal for projects that require an understated and elegant aesthetic.",
                material: "aluminium",
                condition: "new",
                dimensions: "1mm 30mm x 30mm x 3m",
                color: "aluminium"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3769127_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3769127_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3769127_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 40,
        brand: "yperfil",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //homeDecorations = [],

    //kitchens = [
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Dishwasher mixer Marseille onyx",
        description: [
            {
                resum: "Thanks to this Marsella Dishwasher Mixer, black chrome, Stretto brand, your kitchen will look much more modern and stylish. This, because it owns a stylized design and elegant color, both characteristics that will surely add beauty to the space, becoming a leading element of the place. Regarding its dimensions, this product measures 37.6 cm high (from the base) and 25.4 wide; It weighs just under 1.5 kilos and offers a lifetime guarantee. In addition, it is mainly made of chrome-plated brass and for its operation it has a handle that has a 90° rotation range, which allows it to mix hot and cold water, to achieve the ideal temperature for use.",
                material: "brass",
                condition: "new",
                dimensions: "25cm x 24cm x 38cm",
                color: "chromo"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3559106_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3559106_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3559106_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 120,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Dishwasher mixer Vertical OZ onyx",
        description: [
            {
                resum: "Thanks to this Marsella Dishwasher Mixer, black chrome, Stretto brand, your kitchen will look much more modern and stylish. This, because it owns a stylized design and elegant color, both characteristics that will surely add beauty to the space, becoming a leading element of the place. Regarding its dimensions, this product measures 37.6 cm high (from the base) and 25.4 wide; It weighs just under 1.5 kilos and offers a lifetime guarantee. In addition, it is mainly made of chrome-plated brass and for its operation it has a handle that has a 90° rotation range, which allows it to mix hot and cold water, to achieve the ideal temperature for use.",
                material: "brass",
                condition: "new",
                dimensions: "25cm x 24cm x 38cm",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_112672991_343961_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_112672991_343961_4?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_112672991_343961_7?wid=1500&hei=1500&qlt=70",
        ],
        price: 130,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Dishwasher extendible Vertical sink faucet black",
        description: [
            {
                resum: "Thanks to this Marsella Dishwasher Mixer, black chrome, Stretto brand, your kitchen will look much more modern and stylish. This, because it owns a stylized design and elegant color, both characteristics that will surely add beauty to the space, becoming a leading element of the place. Regarding its dimensions, this product measures 37.6 cm high (from the base) and 25.4 wide; It weighs just under 1.5 kilos and offers a lifetime guarantee. In addition, it is mainly made of chrome-plated brass and for its operation it has a handle that has a 90° rotation range, which allows it to mix hot and cold water, to achieve the ideal temperature for use.",
                material: "stainless steel",
                condition: "new",
                dimensions: "25cm x 24cm x 38cm",
                color: "black"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_119728111_2459393_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_119728111_2459393_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_119728111_2459393_5?wid=1500&hei=1500&qlt=70",
        ],
        price: 150,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Undermount dishwasher 62cm x 44.6cm x 23cm",
        description: [
            {
                resum: "Thanks to this Marsella Dishwasher Mixer, chrome, Stretto brand, your kitchen will look much more modern and stylish. This, because it owns a stylized design and elegant color, both characteristics that will surely add beauty to the space, becoming a leading element of the place. Regarding its dimensions, this product measures 37.6 cm high (from the base) and 25.4 wide; It weighs just under 1.5 kilos and offers a lifetime guarantee. In addition, it is mainly made of chrome-plated brass and for its operation it has a handle that has a 90° rotation range, which allows it to mix hot and cold water, to achieve the ideal temperature for use.",
                material: "stainless steel",
                condition: "new",
                dimensions: "62cm x 44.6cm x 23cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_116484669_1511261_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_116484669_1511261_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_116484669_1511261_3?wid=1500&hei=1500&qlt=70",
        ],
        price: 160,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Undermount dishwasher 62cm x 44.6cm x 23cm",
        description: [
            {
                resum: "Thanks to this Marsella Dishwasher Mixer, chrome, Stretto brand, your kitchen will look much more modern and stylish. This, because it owns a stylized design and elegant color, both characteristics that will surely add beauty to the space, becoming a leading element of the place. Regarding its dimensions, this product measures 37.6 cm high (from the base) and 25.4 wide; It weighs just under 1.5 kilos and offers a lifetime guarantee. In addition, it is mainly made of chrome-plated brass and for its operation it has a handle that has a 90° rotation range, which allows it to mix hot and cold water, to achieve the ideal temperature for use.",
                material: "stainless steel",
                condition: "new",
                dimensions: "62cm x 44.6cm x 23cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_116484669_1511261_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_116484669_1511261_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_116484669_1511261_3?wid=1500&hei=1500&qlt=70",
        ],
        price: 230,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Undermount double-dishwasher 80.2cm x 52cm x 23cm",
        description: [
            {
                resum: "Dishwasher is equipped with noise-absorbing soundproof coating. Elastomer layer that covers the bottom of the tank, softening the sound generated by the water jet falling from the height of the tap into the dishwasher. And also avoiding the formation of water droplets generated by condensation (anti-condensation) when frozen or very cold food is placed on the surface of the dishwasher. Bad odors and fungus formation inside the furniture are avoided.",
                condition: "new",
                dimensions: "80.2cm x 52cm x 23cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_116621388_1563143_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_116621388_1563143_2?wid=1500&hei=1500&qlt=70",
        ],
        price: 199,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Simple dishwasher 66cm x 22cm x 45.5cm",
        description: [
            {
                resum: "Dishwasher is equipped with noise-absorbing soundproof coating. Elastomer layer that covers the bottom of the tank, softening the sound generated by the water jet falling from the height of the tap into the dishwasher. And also avoiding the formation of water droplets generated by condensation (anti-condensation) when frozen or very cold food is placed on the surface of the dishwasher. Bad odors and fungus formation inside the furniture are avoided.",
                condition: "new",
                dimensions: "66cm x 22cm x 45.5cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6012183_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6012183_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6012183_12?wid=1500&hei=1500&qlt=70",
        ],
        price: 190,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Basin mixer Milan",
        description: [
            {
                resum: "Include Neoperl Coin Slot aerator and flexible certified vinyl",
                condition: "new",
                dimensions: "15cm x 10cm x 8cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3241955_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3241955_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3241955_12?wid=1500&hei=1500&qlt=70",
        ],
        price: 73,
        brand: "dacqua",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Basin mixer Chrome",
        description: [
            {
                resum: "Include Neoperl Coin Slot aerator and flexible certified vinyl",
                condition: "new",
                dimensions: "15cm x 10cm x 5cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2760436_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2760436_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2760436_22?wid=1500&hei=1500&qlt=70",
        ],
        price: 85,
        brand: "dacqua",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabd",
        name: "Basin mixer Modena",
        description: [
            {
                resum: "Include Neoperl Coin Slot aerator and flexible certified vinyl",
                condition: "new",
                dimensions: "13cm x 10cm x 5cm",
                color: "stainless steel"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3617475_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3617475_03?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3617475_04?wid=1500&hei=1500&qlt=70",
        ],
        price: 80,
        brand: "stretto",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //painting = [
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Wilko interior paint Grey MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "gray"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/y0AAAOSwwDxi6-TY/s-l1600.jpg",
            "https://www.wilko.com/medias/choose-paint-main.jpg?context=bWFzdGVyfHJvb3R8MTA2MjA1fGltYWdlL2pwZWd8aGM4L2g1My85MTYyMDgwNDg1NDA2LmpwZ3wyYTViNWRmZDdiZjdlYzAzMzFmZDA0OTI2YzFjYTVjMzQxNmI5ODgzN2NkZGRjMWNjZDgzMGE5ZGQ2M2RiNGYx",
        ],
        price: 16,
        brand: "wilko",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Wilko interior paint Magnolia MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "magnolia"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/wA4AAOSw4~1i6-TY/s-l1600.jpg",
            "https://www.wilko.com/medias/choose-paint-main.jpg?context=bWFzdGVyfHJvb3R8MTA2MjA1fGltYWdlL2pwZWd8aGM4L2g1My85MTYyMDgwNDg1NDA2LmpwZ3wyYTViNWRmZDdiZjdlYzAzMzFmZDA0OTI2YzFjYTVjMzQxNmI5ODgzN2NkZGRjMWNjZDgzMGE5ZGQ2M2RiNGYx",
        ],
        price: 16,
        brand: "wilko",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Wilko interior paint White MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "white"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/y6oAAOSwXqhi6-TX/s-l1600.jpg",
            "https://www.wilko.com/medias/choose-paint-main.jpg?context=bWFzdGVyfHJvb3R8MTA2MjA1fGltYWdlL2pwZWd8aGM4L2g1My85MTYyMDgwNDg1NDA2LmpwZ3wyYTViNWRmZDdiZjdlYzAzMzFmZDA0OTI2YzFjYTVjMzQxNmI5ODgzN2NkZGRjMWNjZDgzMGE5ZGQ2M2RiNGYx",
        ],
        price: 16,
        brand: "wilko",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Lime White MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "lime white"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/4qoAAOSwwsJkQkeT/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Wimborne White MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "wimborne white"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/j0gAAOSwkNlkQky8/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Incarnadine MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "incarnadine"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/hIMAAOSwxUpkQk1C/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Teresa's Green MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "teresa's green"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/5NQAAOSw1AxkQkyW/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Teresa's Green MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "teresa's green"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/5NQAAOSw1AxkQkyW/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Middleton Pink MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "middleton pink"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/aAIAAOSwex1kQk0e/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Yellow Ground MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "yellow ground"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/EFoAAOSwNxNkQkuZ/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Farrow&Ball interior paint Lulworth Blue MT 5L",
        description: [
            {
                resum: "Modern finish: ideal to colour interior space, this emulsion paint offers the perfect wipe clean silky finish for that modern look. Fast results: perfect for a quick paint job, this paint is easy to apply and gives you fine dried walls in just two to four hours. Hide imperfections: the easy to apply paint will help disguise surface flaws and imperfections like lumps and bumps on your walls. Approximate coverage: the contents of this can will cover approximately 60 square metres which after two coats, is about the same width as six small sofas.",
                material: "liquid",
                condition: "new",
                dimensions: "5L",
                color: "lulworth blue"
            }
        ],
        cover_photo: [
            "https://i.ebayimg.com/images/g/wFkAAOSw5gVkQkrA/s-l1600.jpg",
            "https://i.ebayimg.com/images/g/kr0AAOSwB2pkRlCJ/s-l1600.jpg",
        ],
        price: 13,
        brand: "farrow&ball",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Painting brush 1 inch",
        description: [
            {
                resum: "Brush for Oil and Synthetic Enamel Kolor is a painting tool that consists of a set of bristles attached to a handle, which retains the paint between its fibers and then distributes it evenly on a surface. This model is suitable for painting smaller surfaces or elements, such as door and window frames, lintels, cornices, dust covers, furniture and touch-ups. Characteristics of the Kolor Oil and Synthetic Enamel Brush: Made with 100% natural high-resistance soft bristles, metal clamp and wooden handle. It is a Kolor product, Sodimac's exclusive brand of paints and accessories.",
                material: "wood",
                condition: "new",
                dimensions: "1''",
                color: "wood/black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/1256998_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1256998_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1256998_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1256998_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 5,
        brand: "kolor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Painting brush 2 inches",
        description: [
            {
                resum: "Brush for Oil and Synthetic Enamel Kolor is a painting tool that consists of a set of bristles attached to a handle, which retains the paint between its fibers and then distributes it evenly on a surface. This model is suitable for painting smaller surfaces or elements, such as door and window frames, lintels, cornices, dust covers, furniture and touch-ups. Characteristics of the Kolor Oil and Synthetic Enamel Brush: Made with 100% natural high-resistance soft bristles, metal clamp and wooden handle. It is a Kolor product, Sodimac's exclusive brand of paints and accessories.",
                material: "wood",
                condition: "new",
                dimensions: "2''",
                color: "wood/black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/1257013_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1257013_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1257013_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1257013_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 7,
        brand: "kolor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Painting brush 3 inches",
        description: [
            {
                resum: "Brush for Oil and Synthetic Enamel Kolor is a painting tool that consists of a set of bristles attached to a handle, which retains the paint between its fibers and then distributes it evenly on a surface. This model is suitable for painting smaller surfaces or elements, such as door and window frames, lintels, cornices, dust covers, furniture and touch-ups. Characteristics of the Kolor Oil and Synthetic Enamel Brush: Made with 100% natural high-resistance soft bristles, metal clamp and wooden handle. It is a Kolor product, Sodimac's exclusive brand of paints and accessories.",
                material: "wood",
                condition: "new",
                dimensions: "3''",
                color: "wood/black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/125703X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/125703X_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/125703X_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/125703X_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 10,
        brand: "kolor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Painting set 9 pieces",
        description: [
            {
                resum: "If you are thinking of giving the walls of your home a refresh, the Kolor 9-piece Painting Set will be of great help to paint every corner of your home. This Set has 2 brushes and 2 rollers, a paint container and 2 roller spare parts.",
                material: "wood",
                condition: "new",
                dimensions: "3''",
                color: "wood/black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/5969220_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/5969220_13?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/5969220_22?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/5969220_12?wid=1500&hei=1500&qlt=70",
        ],
        price: 19,
        brand: "kolor",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabe",
        name: "Set brushes 1/2'' / 1'' / 2''",
        description: [
            {
                resum: "Brush for Oil and Synthetic Enamel Kolor is a painting tool that consists of a set of bristles attached to a handle, which retains the paint between its fibers and then distributes it evenly on a surface. This model is suitable for painting smaller surfaces or elements, such as door and window frames, lintels, cornices, dust covers, furniture and touch-ups. Characteristics of the Kolor Oil and Synthetic Enamel Brush: Made with 100% natural high-resistance soft bristles, metal clamp and wooden handle. It is a Kolor product, Sodimac's exclusive brand of paints and accessories.",
                material: "wood",
                condition: "new",
                dimensions: "2''",
                color: "wood/black"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/1256882_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1256882_22?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1256882_21?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1256882_26?wid=1500&hei=1500&qlt=70",
        ],
        price: 15,
        brand: "premier",
        stock: 10,
        favorite: false,
        offer: false
    },
    //],

    //tools = [
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "forklift truck Green 64cm x 42cm x 75cm 90L",
        description: [
            {
                resum: "The Lioi Wheelbarrow is a product of total importance in the field of construction. This complies with the availability to assume multiple roles with great efficiency, thus proving to be indispensable. Its materialization, based on steel, demonstrates a guaranteed and correct operation over time. Characteristics of the Lioi Wheelbarrow: its main components, such as its structure and the large assembly box, are entirely made of steel, a material strategically selected to survive the forced and rustic construction tasks, fully achieving this objective through its excellent physical characteristics. of resistance and durability. Other of the qualities that it contributes is the easy cleaning maintenance at the end of each task, without having to resort to complex systems. In addition, its wheels are made of rubber (rubber), which allows a firm support hold with the ground, for a perfect transfer without slipping or slipping, which prevents accidents. The benefits presented by the Lioi Wheelbarrow are widely recognized when put into use. The generous dimensions of the box for a large capacity, its excellent selection of material plus the rolling characteristics provide a complete and excellent product.",
                material: "steel",
                condition: "new",
                dimensions: "64cm x 42cm x 75cm",
                color: "green/black",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/1561693_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1561693_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1561693_13?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/1561693_14?wid=1500&hei=1500&qlt=70",
        ],
        price: 43,
        brand: "lioi",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "forklift truck Yellow 64cm x 42cm x 75cm 90L",
        description: [
            {
                resum: "The Lioi Wheelbarrow is a product of total importance in the field of construction. This complies with the availability to assume multiple roles with great efficiency, thus proving to be indispensable. Its materialization, based on steel, demonstrates a guaranteed and correct operation over time. Characteristics of the Lioi Wheelbarrow: its main components, such as its structure and the large assembly box, are entirely made of steel, a material strategically selected to survive the forced and rustic construction tasks, fully achieving this objective through its excellent physical characteristics. of resistance and durability. Other of the qualities that it contributes is the easy cleaning maintenance at the end of each task, without having to resort to complex systems. In addition, its wheels are made of rubber (rubber), which allows a firm support hold with the ground, for a perfect transfer without slipping or slipping, which prevents accidents. The benefits presented by the Lioi Wheelbarrow are widely recognized when put into use. The generous dimensions of the box for a large capacity, its excellent selection of material plus the rolling characteristics provide a complete and excellent product.",
                material: "steel",
                condition: "new",
                dimensions: "64cm x 42cm x 75cm",
                color: "yellow/black",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3195139_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3195139_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3195139_14?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3195139_15?wid=1500&hei=1500&qlt=70",
        ],
        price: 43,
        brand: "lioi",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "forklift truck Blue 64cm x 42cm x 75cm 90L",
        description: [
            {
                resum: "The Plasmet 90-liter double-reinforced wheelbarrow 400-8 concrete wheelbarrow will be your best ally so that you can carry out your work more efficiently, because you can transport materials, mix or rubble in it. Made entirely of steel, its container box guarantees unique durability. It is listed as an excellent hardware tool. With measurements of 69 cm high, 61 cm wide and 140 cm long, it achieves an excellent load capacity, so you can comfortably assemble and move many things on construction sites. In addition, it is easy to transport due to its light weight.",
                material: "steel",
                condition: "new",
                dimensions: "64cm x 42cm x 75cm",
                color: "blue/black",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3622819_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3622819_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3622819_14?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3622819_21?wid=1500&hei=1500&qlt=70",
        ],
        price: 39,
        brand: "plasmet",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Llana metal 30.5cm x 15cm",
        description: [
            {
                resum: "Tempered Steel Trowel of the Hela brand. It is the perfect tool for repairing, finishing and beautifying interior walls and facades. It has an ergonomic wooden handle well screwed to the high resistance steel blade, for its correct fixation and good handling. Indicated for construction work, its blade extends and smoothes materials such as plaster, cement, mortar and adhesives. Measuring 12 long and 7 wide, it's so functional that it can reach all corners and even the most difficult angles to work with.",
                material: "steel",
                condition: "new",
                dimensions: "30.5cm x 15cm",
                color: "wood/steel",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/496782_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/496782_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/496782_13?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/496782_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 6,
        brand: "hela",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "DeWalt hammer drill 13 mm 20V Brushless + 2 batteries",
        description: [
            {
                resum: "With more power, compact and lightweight, the DEWALT 20V MAX* Cordless Hammer Drill/Driver features Brushless Technology (BRUSHLESS), which gives the tool greater efficiency, which translates into more use time and requires less maintenance.",
                material: "steel",
                condition: "new",
                color: "yellow/black",
                ampers: "2AH",
                voltage: "20V",
                velocity: "1750 RPM",
                model: "DCD7781D2-B2"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6632556_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6632556_08?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6632556_10?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6632556_13?wid=1500&hei=1500&qlt=70"
        ],
        price: 86,
        brand: "elfle",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Bosch hammer drill 13 mm 18V Brushless + 1 battery + accesories",
        description: [
            {
                resum: "With more power, compact and lightweight, the BOSCH 18V MAX* Cordless Hammer Drill/Driver features Brushless Technology (BRUSHLESS), which gives the tool greater efficiency, which translates into more use time and requires less maintenance.",
                material: "steel",
                condition: "new",
                color: "navy",
                ampers: "2AH",
                voltage: "18V",
                velocity: "1750 RPM",
                model: "GSB 185-LI"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/7321848_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7321848_02?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7321848_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/7321848_13?wid=1500&hei=1500&qlt=70"
        ],
        price: 83,
        brand: "bosch",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Makita hammer drill 13 mm 18V Brushless + 1 battery + accesories",
        description: [
            {
                resum: "Battery protection against overloads. Metal gears for a perfect transmission of force and greater durability. Ergonomic design with non-slip handle for perfect control of the tool and greater comfort. 16 torque settings + 1 direct. It also has percussion mode. Compatible with 3 to 6 Ah LXT batteries",
                material: "steel",
                condition: "new",
                color: "navy",
                ampers: "1.5AH",
                voltage: "18V",
                velocity: "1300 RPM",
                model: "DHP453X10"
            }
        ],
        cover_photo: [
            "https://falabella.scene7.com/is/image/Falabella/gsc_115978158_1327648_1?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_115978158_1327648_2?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_115978158_1327648_3?wid=1500&hei=1500&qlt=70",
            "https://falabella.scene7.com/is/image/Falabella/gsc_115978158_1327648_4?wid=1500&hei=1500&qlt=70"
        ],
        price: 80,
        brand: "makita",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Bosch lectric angle grinder 4.5'' 710W",
        description: [
            {
                resum: "The Bosch GWS 700 Emery has 710W of power and is a lightweight tool, with low maintenance cost, since its motor has a long useful life of carbon brushes. Its design is optimized and has an ergonomic handle. The Bosch GWS 700 Emery has redoubled air inlets for better cooling of the machine.",
                material: "steel",
                condition: "new",
                color: "navy",
                ampers: "3.3A",
                power: "710W",
                voltage: "220V",
                velocity: "12000 RPM",
                model: "GWS 700"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/675869X_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/675869X_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/675869X_13?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/675869X_14?wid=1500&hei=1500&qlt=70"
        ],
        price: 43,
        brand: "stanley",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Makita lectric angle grinder 4.5'' 840W",
        description: [
            {
                resum: "This 4 ½, 840W angle grinder, Makita brand, model 9557HPYG, is an essential tool if you work professionally in construction or, if you are one of the people who enjoy taking care of all kinds of repairs in the house. With a weight of 2.1 k, this product is very easy to handle, which will allow you to carry out your work more efficiently. In addition, its disc diameter is 4½'', it works at 11,000 RPM and has a power of 840W. With this emery you can carry out the most demanding sanding jobs, since it offers high resistance and quality, helping to ensure that the This task turns out impeccably, so if you need to polish, grind, sharpen, remove materials from metals and concrete, or clean welds, for example, this is your tool.",
                material: "steel",
                condition: "new",
                color: "blue/steel",
                ampers: "3.8A",
                power: "840W",
                voltage: "220V",
                velocity: "11000 RPM",
                model: "9557HPYG"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/3787605_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3787605_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3787605_13?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/3787605_14?wid=1500&hei=1500&qlt=70"
        ],
        price: 46,
        brand: "makita",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Dewalt electric angle grinder 4.5'' 700W",
        description: [
            {
                resum: "DeWalt presents the Eeril Angular DW4010-D for professional use with 700 watts of power, ideal for hardware work on different surfaces and to obtain perfect finishes, whether wood or metal. Additionally, it allows cutting pieces, cleaning those that have suffered some type of wear due to rust, removing paint, polishing edges and perfecting areas where there is excess welding, as well as other types of cutting depending on the disc to be used.",
                material: "steel",
                condition: "new",
                color: "yellow/steel",
                ampers: "3.8A",
                power: "700W",
                voltage: "220V",
                velocity: "11000 RPM",
                model: "DWE4010 -B2"
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/2644754_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2644754_16?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2644754_15?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/2644754_26?wid=1500&hei=1500&qlt=70"
        ],
        price: 53,
        brand: "dewalt",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Dewalt measuer 8m",
        description: [
            {
                resum: "DeWalt presents the Eeril Angular DW4010-D for professional use with 700 watts of power, ideal for hardware work on different surfaces and to obtain perfect finishes, whether wood or metal. Additionally, it allows cutting pieces, cleaning those that have suffered some type of wear due to rust, removing paint, polishing edges and perfecting areas where there is excess welding, as well as other types of cutting depending on the disc to be used.",
                material: "steel",
                condition: "new",
                color: "yellow/steel",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/6402232_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6402232_26?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/6402232_28?wid=1500&hei=1500&qlt=70",
        ],
        price: 63,
        brand: "dewalt",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Aluminum stepladder 5 steps high 1.87 m. Resistance 102kg",
        description: [
            {
                resum: "The Prod-Alum 5-step aluminum scissor ladder is a useful item that you can implement in your home or business. It is a product that is within the partitioning/roofing/insulation line for professional or domestic use. Its objective is to make it easier for you to reach elevated areas in a totally safe way thanks to its anti-slip system, which will prevent you from slipping when you are using it. It is perfect for painting, gutter cleaning, tree pruning, among other activities. Among the characteristics of the Prod-Alum 5-step Aluminum Scissor Ladder, the material with which it was manufactured stands out, which is a noble metal that has the properties of low physical weight, high durability and great structural stability, guaranteeing a long useful life. of the product. Likewise, its steps are embossed to make them more adherent and its four legs are lined to keep it in a fixed position. Among the benefits of the Aluminum Scissor Scale, it can be mentioned that it is foldable, which facilitates storage and transport.",
                material: "aluminum",
                condition: "new",
                color: "aluminium",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/155128_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/155128_15?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/155128_17?wid=1500&hei=1500&qlt=70",
        ],
        price: 36,
        brand: "redline",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
        category_id: "64d4fd9fc84ae7805abbeabf",
        name: "Aluminum stepladder 7 steps high 2.48 m. Resistance 136 kilos",
        description: [
            {
                resum: "With the Jinmao Scissor Scale you can carry out carpentry, painting, construction or the different tasks that you need to do at heights. Its manufacture is made of excellent quality aluminum, which gives you the required stability, and in turn, makes it light, so that you can move it without much effort. Among the characteristics of the Jinmao Scissor Scale is its scissor design, which allows you to have better support on the surface, since it gives perfect balance and safety in its use. Its opening mechanism allows you to open it easily and close it for storage. Its steps have a grooved texture that gives better support to the feet and prevents the risk of slipping. In addition, it has plastic stops on each of its legs, which prevent it from moving, protect the surface where it is fixed and take care of the structure of the Scale. So, if you were looking for a quality scale that meets all the security requirements to carry out your work with confidence, this is an advantageous alternative. When you decide, you will be able to count on all the benefits of the Scissor Scale, in terms of functionality, long useful life and ease of use.",
                material: "aluminum",
                condition: "new",
                color: "aluminium",
            }
        ],
        cover_photo: [
            "https://sodimac.scene7.com/is/image/SodimacCL/864358_01?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/864358_12?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/864358_17?wid=1500&hei=1500&qlt=70",
            "https://sodimac.scene7.com/is/image/SodimacCL/864358_22?wid=1500&hei=1500&qlt=70",
        ],
        price: 45,
        brand: "redline",
        stock: 10,
        favorite: false,
        offer: false
    },
    //]

];

Product.insertMany(products);