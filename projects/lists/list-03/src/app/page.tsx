import Image from "next/image";

export default function Home() {

  const size = 100;

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: `https://picsum.photos/${size}/${size}?random=1`,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: `https://picsum.photos/${size}/${size}?random=2`,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: `https://picsum.photos/${size}/${size}?random=3`,
    },
    {
      id: 4,
      name: "Product 4",
      price: 100,
      image: `https://picsum.photos/${size}/${size}?random=4`,
    },
    {
      id: 5,
      name: "Product 5",
      price: 200,
      image: `https://picsum.photos/${size}/${size}?random=5`,
    },
    {
      id: 6,
      name: "Product 6",
      price: 300,
      image: `https://picsum.photos/${size}/${size}?random=6`,
    },
    {
      id: 7,
      name: "Product 7",
      price: 100,
      image: `https://picsum.photos/${size}/${size}?random=7`,
    },
    {
      id: 8,
      name: "Product 8",
      price: 200,
      image: `https://picsum.photos/${size}/${size}?random=8`,
    },
    {
      id: 9,
      name: "Product 9",
      price: 300,
      image: `https://picsum.photos/${size}/${size}?random=9`,
    },
    {
      id: 10,
      name: "Product 10",
      price: 100,
      image: `https://picsum.photos/${size}/${size}?random=10`,
    }
  ];

  const productsList = products.map((product) => (
    <li key={product.id} className={`flex flex-col items-center ${product.price > 200 ? 'font-bold text-2xl' : ''} `} >
      <Image src={product.image} alt={product.name} width={ product.price > 200 ? size*1.5 : size} height={ product.price > 200 ? size*1.5 : size} />
      <div className="text-center">{product.name}</div>
      <div className="text-center">{product.price}</div>
    </li>
  ));
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="text-2xl font-bold text-center sm:text-left">List of products using `grid`</div>
        <div className="text text-center sm:text-left">List is responsive at different widths</div>
        <div className="text text-center sm:text-left">Image size and font weight are also dynamically generated</div>
        <ul className="grid gap-6 lg:grid-cols-10 md:grid-cols-7 sm:grid-cols-5 ">
          {productsList}
        </ul>

      </main>

    </div>
  );
}


