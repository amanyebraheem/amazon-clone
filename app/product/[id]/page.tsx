
import React from "react";
import { Product } from "@/app/lib/Type";
import { fetchData } from "@/app/lib";
import ProductImage from "@/app/components/ProductImage";
import PriceTag from "@/app/components/PriceTag";
import AddToCartButton from "@/app/components/AddToCartButton";
import Container from "@/app/components/Container";
import { MdStar } from "react-icons/md";

type PageProps = {
  params: Promise<{ id: string }>;
};

const SingleProductPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const product: Product | null = await fetchData(`https://dummyjson.com/products/${id}`);

  if (!product) {
    return (
      <Container>
        <p className="text-center text-red-500">Product not found.</p>
      </Container>
    );
  }

  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage product={product} />

        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index < Math.floor(product.rating);
              return (
                <MdStar
                  key={index}
                  className={`text-xl ${filled ? "text-yellow-400" : "text-gray-300"}`}
                />
              );
            })}
            <span className="ml-2 text-sm font-semibold">{product.rating.toFixed(1)} / 5</span>
          </div>

          <div className="flex items-center gap-4">
            <PriceTag price={discountedPrice} />
            <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
            <span className="text-green-600 font-semibold">
              {product.discountPercentage.toFixed(0)}% OFF
            </span>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <AddToCartButton product={product} />
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
