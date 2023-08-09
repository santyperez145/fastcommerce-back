import Furniture from "../Furniture.js";
import "dotenv/config.js";
import "../../config/db.js";

let furniture = [
    {
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

];

Furniture.insertMany(furniture);