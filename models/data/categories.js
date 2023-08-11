import Category from "../Category.js";
import User from "../User.js";
import "dotenv/config.js";
import "../../config/db.js";

let categories = [
    {
      name: "carpentry",
      description: "All the materials for a carpinter",
      cover_photo: "https://t3.ftcdn.net/jpg/00/89/10/68/360_F_89106812_D8J6Y7KzgLr1FKTgOYZKYSM458BXTCaX.jpg",
    },
    {
    name: "construction",
    description: "Materials for constructions projects",
    cover_photo: "https://researchleap.com/wp-content/uploads/2021/02/Maintaining-Goodwill-for-Construction-Companies.jpg",
  },
  {
    name: "electricity",
    description: "Materials, equipment, and electrical dispositives stuff",
    cover_photo: "https://img.freepik.com/premium-photo/electric-different-equipment-wires-tools-electrical-diagram_106035-343.jpg?w=1380",
  },
  {
    name: "flooring",
    description: "Find a permanent covering for your floor Home",
    cover_photo: "https://casa-web.com.ar/wp-content/uploads/2011/08/tipos-de-ceramicas.jpg",
  },
  {
    name: "furniture",
    description: "Design products considered a form of decorative art",
    cover_photo: "https://media.istockphoto.com/id/968086564/photo/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-to-grey-couch-real-photo.jpg?s=612x612&w=0&k=20&c=TfE8sZbX_XC4yIYEaRAJHrdIWjZqvRx3Crn0ygcr-h0=",
  },
  {
    name: "hardware",
    description: "Little pieces for your constructions projects",
    cover_photo: "https://img.freepik.com/vector-premium/pernos-metal-realistas-tuercas-acero-remaches-tornillos-vista-lateral-superior-hardware-construccion-inoxidable-conjunto-vector-cabeza-perno-pasador-cromo-ilustracion-metal-hardware-realistas-construccion_102902-4247.jpg",
  },
  {
    name: "homeDecoration",
    description: "Things you need to make your whole world coloried",
    cover_photo: "https://procrewschedule.com/wp-content/uploads/2020/06/Different-painting-tools-for-house-renovation.jpg",
  },
  {
    name: "kitchen",
    description: "Make comfortable the special place where you prepare your daily foods",
    cover_photo: "https://www.southernliving.com/thmb/vJhsGDU01U8rpHUQvPQ-o-h44Eg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitchenaid-cordless-blender-81SM9VMhPQL._AC_SL1500_-1-2646722aa49942998925975787dfe204.jpg",
  },
  {
    name: "painting",
    description: "Things you need to make your whole world coloried",
    cover_photo: "https://procrewschedule.com/wp-content/uploads/2020/06/Different-painting-tools-for-house-renovation.jpg",
  },
  {
    name: "tools",
    description: "All the equipment you need to develop any project on your mind",
    cover_photo: "https://www.metalmarchile.cl/c/15-category_default/ferreteria-basica.jpg",
  },
];

Category.insertMany(categories);