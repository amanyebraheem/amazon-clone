import CarouselBanner from "./components/CarouselBanner";
import { Metadata } from "next";
import { fetchData } from './lib/index';
import ProductList from "./components/ProductList";

export const metadata: Metadata = {
  title: "Home | Amazon 2.0",
};

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await fetchData(endpoint);

  return (
    <main>
      <CarouselBanner />
      <div className="-mt-10 md:mt-20 lg:mt-0 flex items-center justify-center">
        <ProductList products={products} />
      </div>
    </main>
  );
}
