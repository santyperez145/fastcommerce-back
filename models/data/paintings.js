import Painting from "../Painting.js";
import "dotenv/config.js";
import "../../config/db.js";

let painting = [
    {
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
];

Painting.insertMany(painting);