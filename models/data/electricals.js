import Electricity from "../Electricity.js";
import "dotenv/config.js";
import "../../config/db.js";

let electricity = [
    {
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
        brand: "legrand",
        stock: 10,
        favorite: false,
        offer: false
    },
    {
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

];

Electricity.insertMany(electricity);