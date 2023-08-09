import Hardware from "../Hardware.js";
import "dotenv/config.js";
import "../../config/db.js";

let hardware = [
    {
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
];

Hardware.insertMany(hardware);