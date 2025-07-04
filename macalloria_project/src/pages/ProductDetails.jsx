import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData';
import SectionHeader from '../components/SectionHeader';
import Breadcrumb from '../components/Breadcrumb';
import headerBg from '../assets/bg4.jpg';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="text-center py-20">Product not found.</p>;

  const displayName = product.category.replace('-', ' ');

  return (
    <>
      <SectionHeader
        title={product.name}
        subtitle="Check out this product details"
        bgImage={headerBg}
      >
        <Breadcrumb
          items={[
            { label: 'Products', link: '/products' },
            { label: displayName, link: `/products/${product.category}` },
            { label: product.name },
          ]}
        />
      </SectionHeader>

      <div className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src={product.image} alt={product.name} className="rounded-lg shadow-lg mb-4" />
            <div className="grid grid-cols-2 gap-2">
              {product.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`Gallery ${idx}`} className="h-20 w-full object-cover rounded-md" />
              ))}
            </div>
          </div>
          <div className="text-gray-700 text-sm">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}