import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Breadcrumb from '../components/Breadcrumb';
import headerBg from '../assets/bg4.jpg';

const categories = [
  { id: 'field-sprayers', name: 'Field Sprayers' },
  { id: 'garden-sprayers', name: 'Garden Sprayers' },
  { id: 'turbo-atomizers', name: 'Turbo Atomizers' },
];

export default function ProductsPage() {
  return (
    <>
      <SectionHeader
        title="All Products"
        subtitle="Browse our full range of categories"
        bgImage={headerBg}
      >
        <Breadcrumb items={[{ label: 'Products' }]} />
      </SectionHeader>

      <div className="py-16 px-4 max-w-6xl mx-auto text-center mb-5">
        <h2 className="text-2xl font-bold mb-10 text-[#03261d]">Explore Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link to={`/products/${cat.id}`} key={cat.id} className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition text-[#03261d] font-medium border-t-1 border-gray-200">
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}