// import React from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../data/productsData';
// import SectionHeader from '../components/SectionHeader';
// import Breadcrumb from '../components/Breadcrumb';
// import headerBg from '../assets/bg4.jpg';

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) return <p className="text-center py-20">Product not found.</p>;

//   const displayName = product.category.replace('-', ' ');

//   return (
//     <>
//       <SectionHeader
//         title={product.name}
//         subtitle="Check out this product details"
//         bgImage={headerBg}
//       >
//         <Breadcrumb
//           items={[
//             { label: 'Products', link: '/products' },
//             { label: displayName, link: `/products/${product.category}` },
//             { label: product.name },
//           ]}
//         />
//       </SectionHeader>

//       <div className="py-16 px-4 max-w-4xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <img src={product.image} alt={product.name} className="rounded-lg shadow-lg mb-4" />
//             <div className="grid grid-cols-2 gap-2">
//               {product.gallery.map((img, idx) => (
//                 <img key={idx} src={img} alt={`Gallery ${idx}`} className="h-20 w-full object-cover rounded-md" />
//               ))}
//             </div>
//           </div>
//           <div className="text-gray-700 text-sm">
//             <p>{product.description}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

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
            <img src={mainImage} alt={product.name} className="rounded-xl shadow-xl mb-6 w-full object-cover h-[400px]" />
            <div className="grid grid-cols-3 gap-3">
              {product.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  onClick={() => setMainImage(img)}
                  className={`h-24 w-full object-cover rounded-md cursor-pointer transition-all border-2 ${
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
              <div className="grid grid-cols-2 border-b p-4 bg-gray-100 font-medium">
                <div>Weight</div>
                <div>{product.weight || 'N/A'}</div>
              </div>
              <div className="grid grid-cols-2 border-b p-4">
                <div>Capacity</div>
                <div>{product.capacity || 'N/A'}</div>
              </div>
              <div className="grid grid-cols-2 border-b p-4 bg-gray-100">
                <div>Material</div>
                <div>{product.material || 'N/A'}</div>
              </div>
              <div className="grid grid-cols-2 p-4">
                <div>Warranty</div>
                <div>{product.warranty || 'N/A'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}