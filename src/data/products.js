const prods = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "electronics",
    description:
      "Experience premium sound quality with these high-quality wireless headphones. Perfect for music lovers and professionals alike.",
    image:
      "https://i.pinimg.com/736x/1a/11/02/1a1102b3237a99cc31b40d6c88c67cc6.jpg",
    features: [
      "Active noise cancellation for immersive sound",
      "Up to 30 hours of battery life",
      "Comfortable over-ear design",
      "Bluetooth 5.0 for seamless connectivity",
    ],
    specifications: {
      weight: "250g",
      color: "Black",
      connectivity: "Bluetooth",
      warranty: "1 year",
    },
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 199.99,
    category: "clothing",
    description:
      "A premium leather jacket crafted for style and durability. Perfect for any occasion, from casual outings to formal events.",
    image:
      "https://i.pinimg.com/736x/dd/99/6e/dd996e8b548efddb49e560b81f52821b.jpg",
    features: [
      "Made from 100% genuine leather",
      "Available in multiple sizes and colors",
      "Quilted lining for added warmth",
      "Classic design with modern touches",
    ],
    specifications: {
      material: "Genuine Leather",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Brown", "Navy"],
      care: "Dry clean only",
    },
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 149.99,
    category: "electronics",
    description:
      "Stay connected and monitor your health with this advanced smartwatch. Perfect for fitness enthusiasts and tech-savvy individuals.",
    image:
      "https://i.pinimg.com/736x/07/dc/d4/07dcd45cd41417dde08fed1772fe708f.jpg",
    features: [
      "Heart rate monitoring and GPS tracking",
      "Water-resistant up to 50 meters",
      "Long-lasting battery life (up to 7 days)",
      "Compatible with iOS and Android",
    ],
    specifications: {
      display: "1.3-inch AMOLED",
      connectivity: "Bluetooth 5.0",
      sensors: ["Heart rate", "GPS", "Accelerometer"],
      warranty: "2 years",
    },
  },
  {
    id: 4,
    name: "Coffee Table Book",
    price: 49.99,
    category: "books",
    description:
      "A beautifully illustrated coffee table book that adds elegance to your living space. Perfect for art lovers and interior design enthusiasts.",
    image:
      "https://i.pinimg.com/736x/ee/9d/8d/ee9d8db4f51c7caa19380ecc31bccd9d.jpg",
    features: [
      "Hardcover with premium finish",
      "Over 200 pages of stunning visuals",
      "Includes insights from renowned artists",
      "Perfect for gifting or personal collection",
    ],
    specifications: {
      pages: "224",
      dimensions: "10 x 12 inches",
      weight: "2.5kg",
      publisher: "Artistic Press",
    },
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 89.99,
    category: "clothing",
    description:
      "Achieve your fitness goals with these comfortable and durable running shoes. Designed for performance and style.",
    image:
      "https://i.pinimg.com/736x/0e/f1/13/0ef113de4b877881bd328ee17f51f640.jpg",
    features: [
      "Breathable mesh upper for comfort",
      "Cushioned sole for shock absorption",
      "Lightweight design for agility",
      "Available in multiple colors",
    ],
    specifications: {
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
      colors: ["Black", "White", "Blue", "Red"],
      material: "Synthetic Mesh",
      weight: "300g per shoe",
    },
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    category: "electronics",
    description:
      "Enjoy your favorite music anywhere with this portable Bluetooth speaker. Perfect for parties, outdoor adventures, and more.",
    image:
      "https://i.pinimg.com/736x/62/62/6b/62626b98cad88db302ad6a6724422a6b.jpg",
    features: [
      "Deep bass for rich sound quality",
      "Up to 20 hours of playtime",
      "Water-resistant design",
      "Compact and portable",
    ],
    specifications: {
      connectivity: "Bluetooth 5.0",
      battery: "4000mAh",
      weight: "800g",
      colors: ["Black", "Blue", "Red"],
    },
  },
  {
    id: 7,
    name: "AirPods Pro",
    price: 249.99,
    category: "Headphones",
    description:
      "Experience the ultimate in wireless audio with AirPods Pro. Featuring active noise cancellation, immersive sound, and a customizable fit, these earbuds are perfect for music, calls, and more.",
    image:
      "https://i.pinimg.com/736x/60/f0/d3/60f0d327829d14634ebc08854eb28587.jpg", // Replace with an AirPods image URL
    features: [
      "Active Noise Cancellation for immersive sound",
      "Transparency mode to hear your surroundings",
      "Customizable fit with three sizes of silicone tips",
      "Sweat and water resistance for active lifestyles",
      "Up to 4.5 hours of listening time on a single charge",
      "Wireless charging case for over 24 hours of total listening time",
    ],
    specifications: {
      connectivity: "Bluetooth 5.0",
      battery: "Up to 4.5 hours (earbuds), 24+ hours (with case)",
      weight: "45.6g (earbuds), 45.6g (case)",
      colors: ["White", "Black"],
    },
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 149.99,
    category: "elers",
    description:
      "A versatile smartwatch that keeps you connected and tracks your fitness goals. Perfect for everyday use.",
    image:
      "https://i.pinimg.com/736x/07/dc/d4/07dcd45cd41417dde08fed1772fe708f.jpg",
    features: [
      "Touchscreen display with customizable watch faces",
      "Sleep tracking and step counter",
      "Notifications for calls, messages, and apps",
      "Compatible with iOS and Android",
    ],
    specifications: {
      display: "1.2-inch LCD",
      connectivity: "Bluetooth 4.2",
      battery: "Up to 5 days",
      warranty: "1 year",
    },
  },
  {
    id: 9,
    name: "iPhone 15",
    price: 899.99,
    category: "phone",
    description:
      "The latest iPhone with cutting-edge technology and stunning design. Perfect for productivity, photography, and entertainment.",
    image:
      "https://i.pinimg.com/736x/08/b2/75/08b2756ce51286c1975bc01cdbbf2ada.jpg",
    features: [
      "6.1-inch Super Retina XDR display",
      "A16 Bionic chip for unmatched performance",
      "Advanced dual-camera system",
      "5G connectivity for fast internet speeds",
    ],
    specifications: {
      storage: ["128GB", "256GB", "512GB"],
      colors: ["Midnight", "Starlight", "Blue", "Red"],
      battery: "Up to 20 hours of video playback",
      warranty: "1 year",
    },
  },
];

export default prods;
