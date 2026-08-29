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
  ];

  const listItems = products.map(product =>
    <li className="mb-2" key={product.id}>
      {product.name} - {product.price}
      <Image src={product.image} width={size} height={size} alt={product.name} />
    </li>
  );
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="text-2xl font-bold text-center sm:text-left">Raw List</div>
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {listItems}
        </ul>

        <div className="text-2xl font-bold text-center sm:text-left">List of products using `grid`</div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {products.map(product =>
            <li key={product.id} className="flex flex-col items-center gap-4">
              <Image src={product.image} width={size} height={size} alt={product.name} />
              <div>{product.name}</div>
              <div>{product.price}</div>
            </li>
          )}
        </ul>

      </main>

    </div>
  );
}
