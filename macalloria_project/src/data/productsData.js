// src/data/productsData.js
import bg1 from '../assets/bg.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg2.jpg';

const products = [
  {
    id: "fs-01",
    name: "Heavy Duty Field Sprayer",
    category: "field-sprayers",
    image: bg1,
    description: "A powerful sprayer designed for large-scale fields.",
    gallery: [bg1, bg2],
  },
  {
    id: "fs-02",
    name: "Mounted Field Sprayer",
    category: "field-sprayers",
    image: bg2,
    description: "Efficient spraying with high-capacity tank and precision nozzles.",
    gallery: [bg2, bg3],
  },
  {
    id: "ta-01",
    name: "Turbo Atomizer 3000",
    category: "turbo-atomizers",
    image: bg3,
    description: "High-speed atomizer for optimal coverage in orchards and vineyards.",
    gallery: [bg3, bg4],
  },
  {
    id: "ga-01",
    name: "Backpack Garden Sprayer",
    category: "garden-sprayers",
    image: bg4,
    description: "Perfect for small gardens and precise spraying tasks.",
    gallery: [bg4, bg5],
  },
  {
    id: "pr-01",
    name: "High Pressure Pump",
    category: "pumps-regulators",
    image: bg5,
    description: "Reliable pump system for continuous spraying operations.",
    gallery: [bg5, bg1],
  },
  {
    id: "sp-01",
    name: "Spare Parts Kit",
    category: "options-spare-parts",
    image: bg1,
    description: "Essential spare parts kit to keep your machine running smoothly.",
    gallery: [bg1, bg2],
  },
];

export default products;