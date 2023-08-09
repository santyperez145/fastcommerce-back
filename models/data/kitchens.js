import Kitchen from "../Kitchen.js";
import "dotenv/config.js";
import "../../config/db.js";

let kitchen = [
    {
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

];

Kitchen.insertMany(kitchen);