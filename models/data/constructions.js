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
        price: 25,
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
];

Construction.insertMany(construction);
