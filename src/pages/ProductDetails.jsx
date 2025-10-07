import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData';
import SectionHeader from '../components/SectionHeader';
import Breadcrumb from '../components/Breadcrumb';
import headerBg from '../assets/bg4.jpg';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [mainImage, setMainImage] = useState(product?.image);

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

      <div className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Images */}
          <div>
            <img 
              src={mainImage} 
              alt={product.name} 
              className="rounded-xl shadow-xl mb-6 w-full object-contain h-[400px]" 
              loading="lazy" 
            />
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  onClick={() => setMainImage(img)}
                  loading="lazy"
                  className={`h-24 w-full object-contain rounded-md cursor-pointer transition-all border-2 ${
                    img === mainImage ? 'border-green-600' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Description and Details */}
          <div className="text-gray-800 text-sm">
            <p className="mb-6 text-gray-600 leading-relaxed">{product.description}</p>

            {/* المواصفات */}
            <h3 className="text-lg font-semibold mb-2 text-[#03261d]">Product Specifications</h3>
<div className="w-full border border-gray-300 rounded-lg overflow-hidden">
  {/* العنوان الكبير */}
  <div className="p-4 text-center font-semibold bg-gray-200 border-b">
    {product.specs?.title || "Specifications"}
  </div>

  {/* العناوين الثابتة */}
  <div className="grid grid-cols-2 text-center font-bold bg-gray-300 border-b">
    <div className="p-4 border-r">Standard Equipments</div>
    <div className="p-4">Optional Equipments</div>
  </div>

  {/* الداتا */}
  <div className="grid grid-cols-2 text-center">
    <div className=" border-r border-b">
      {product.specs?.standard?.map((item, idx) => (
        <div key={idx} className="p-4 border-b last:border-0">
          {item}
        </div>
      ))}
    </div>
    <div className=" border-b">
      {product.specs?.optional?.map((item, idx) => (
        <div key={idx} className="p-4 border-b last:border-0">
          {item}
        </div>
      ))}
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </>
  );
}