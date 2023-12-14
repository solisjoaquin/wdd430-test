import Image from "next/image";
import { getProducts } from "../lib/products";
import Card from "../components/card";

async function getData() {
  const products = await getProducts();

  return products;
}

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

export default async function Home() {
  const products = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
