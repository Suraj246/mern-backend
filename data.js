
const products = [
  {
    name: "Nike Slim Shirt",
    slug: "nike-slim-shirt",
    img: "/images/cloth1.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 1500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 6,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },

  {
    name: "Adidas Slim Shirt",
    slug: "adidas-slim-shirt",
    img: "/images/cloth2.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 2500,
    ratings: 3.5,
    brand: "Nike",
    inStock: 2,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike1 Slim Shirt",
    slug: "nike1-slim-shirt",
    img: "/images/cloth3.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 3.5,
    brand: "Nike",
    inStock: 1,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike2 Slim Shirt",
    slug: "nike2-slim-shirt",
    img: "/images/cloth4.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 2.5,
    brand: "Nike",
    inStock: 3,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike3 Slim Shirt",
    slug: "nike3-slim-shirt",
    img: "/images/cloth5.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 4500,
    ratings: 1.5,
    brand: "Nike",
    inStock: 3,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike4 Slim Shirt",
    slug: "nike4-slim-shirt",
    img: "/images/cloth6.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 300,
    ratings: 0.5,
    brand: "Nike",
    inStock: 1,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike5 Slim Shirt",
    slug: "nike5-slim-shirt",
    img: "/images/cloth7.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 6500,
    ratings: 5,
    brand: "Nike",
    inStock: 1,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike6 Slim Shirt",
    slug: "nike6-slim-shirt",
    img: "/images/cloth8.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 1500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike7 Slim Shirt",
    slug: "nike7-slim-shirt",
    img: "/images/cloth9.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 5100,
    ratings: 4.5,
    brand: "Nike",
    inStock: 3,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "Nike8 Slim Shirt",
    slug: "nike8-slim-shirt",
    img: "/images/cloth10.jpeg",
    categary: "mencloth",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 1,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe1",
    slug: "nike shoe1",
    img: "/images/cloth10.jpeg",
    categary: "menshoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },

  {
    name: "nike shoe2",
    slug: "nike shoe2",
    img: "/images/shoe2.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 4500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe3",
    slug: "nike shoe3",
    img: "/images/shoe3.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 5800,
    ratings: 5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe4",
    slug: "nike shoe4",
    img: "/images/shoe4.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 5500,
    ratings: 4,
    brand: "Nike",
    inStock: 10,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe5",
    slug: "nike shoe5",
    img: "/images/shoe5.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 11500,
    ratings: 5,
    brand: "Nike",
    inStock: 10,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe6",
    slug: "nike shoe6",
    img: "/images/shoe6.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 2500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe7",
    slug: "nike shoe7",
    img: "/images/shoe7.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 3500,
    ratings: 5,
    brand: "Nike",
    inStock: 20,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe8",
    slug: "nike shoe8",
    img: "/images/shoe8.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 3500,
    ratings: 3.5,
    brand: "Nike",
    inStock: 10,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe9",
    slug: "nike shoe9",
    img: "/images/shoe9.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "nike shoe10",
    slug: "nike shoe10",
    img: "/images/shoe10.jpeg",
    categary: "shoes",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 3.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch1",
    slug: "watch1",
    img: "/images/watch1.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 1500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 20,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch2",
    slug: "watch2",
    img: "/images/watch2.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 5100,
    ratings: 5,
    brand: "Nike",
    inStock: 10,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch3",
    slug: "watch3",
    img: "/images/watch3.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 5500,
    ratings: 2.5,
    brand: "Nike",
    inStock: 70,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch4",
    slug: "watch4",

    img: "/images/watch4.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 11500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch5",
    slug: "watch5",

    img: "/images/watch5.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 7500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch6",
    slug: "watch6",
    img: "/images/watch2.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 3500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch7",
    slug: "watch7",
    img: "/images/watch6.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 7500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch8",
    slug: "watch8",
    img: "/images/watch7.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 6500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch9",
    slug: "watch9",
    img: "/images/watch1.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 2500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch10",
    slug: "watch10",
    img: "/images/watch4.jpeg",
    categary: "electronics",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 1500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch11",
    slug: "watch11",
    img: "/images/gym2.jpeg",
    categary: "gym",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 2500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 10,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch12",
    slug: "watch12",
    img: "/images/gym3.jpeg",
    categary: "gym",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 4500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 1,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch13",
    slug: "watch13",
    img: "/images/gym4.jpeg",
    categary: "gym",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 0,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch14",
    slug: "watch14",
    img: "/images/gym5.jpeg",
    categary: "gym",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 4,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
  {
    name: "watch15",
    slug: "watch15",
    img: "/images/gym1.jpeg",
    categary: "gym",
    description:
      "this is dthis is decription this is decription this is decription this is decription this isecription this is decription this is decription this is decription this is",
    price: 500,
    ratings: 4.5,
    brand: "Nike",
    inStock: 10,
    material: "silk",
    instruction: "wash with cold water",
    origin: "Imported",
  },
];

export default products;