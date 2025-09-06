import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/productsData';
import SectionHeader from '../components/SectionHeader';
import Breadcrumb from '../components/Breadcrumb';
import headerBg from '../assets/bg4.jpg';

export default function CategoryPage() {
  const { category } = useParams();
  const categoryProducts = products.filter((p) => p.category === category);
  const displayName = category.replace('-', ' ');

  return (
    <>
      <SectionHeader
        title={displayName}
        subtitle={<span className=" text-md">Products under {displayName}</span>}
        bgImage={headerBg}
      >
        <Breadcrumb
          items={[
            { label: 'Products', link: '/products' },
            { label: displayName },
          ]}
        />
      </SectionHeader>

      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-4 rounded-xl text-center">
              <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md mb-3" />
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <Link to={`/product/${product.id}`} className="text-sm text-green-700 hover:underline">View Product</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}