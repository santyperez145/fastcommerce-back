import Tools from "../Tools.js";
import "dotenv/config.js";
import "../../config/db.js";

let tools = [
    {
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
];

Tools.insertMany(tools);