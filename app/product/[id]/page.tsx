import React from "react";
import type { Product } from "@/app/lib/Type";
import { fetchData } from "@/app/lib";
import Image from "next/image";
import Container from "@/app/components/Container";
import PriceFormat from "@/app/components/PriceFormat";
import AddToCartButton from "@/app/components/AddToCartButton";

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

  const discountedPrice = product.price * (1 - (product.discountPercentage || 0) / 100);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* صورة المنتج */}
        <div className="bg-gray-100 rounded-md max-h-[550px] flex justify-center items-center">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.title}
              width={500}
              height={500}
              className="object-contain"
            />
          ) : (
            <p>No image available</p>
          )}
        </div>

        {/* تفاصيل المنتج */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>

          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
              const filled = index < Math.floor(product.rating);
              return (
                <svg
                  key={index}
                  className={`w-6 h-6 ${filled ? "text-yellow-400" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              );
            })}
            <span className="ml-2 text-sm font-semibold">{product.rating.toFixed(1)} / 5</span>
          </div>

          <div className="flex items-center gap-4">
            <PriceFormat amount={discountedPrice} />
            <span className="line-through text-gray-500">${product.price.toFixed(2)}</span>
            {product.discountPercentage && (
              <span className="text-green-600 font-semibold">
                {product.discountPercentage.toFixed(0)}% OFF
              </span>
            )}
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
