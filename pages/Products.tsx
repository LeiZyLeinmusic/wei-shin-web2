import React from 'react';
import { Routes, Route, useParams, Link, Navigate } from 'react-router-dom';
import { SectionTitle, Card, Button, Modal } from '../components/UI';
import { PageHeader } from '../components/Layout';
import { PRODUCTS, PROJECTS } from '../constants';
import { ProjectModal } from './Projects'; // Will import later

// Product List Component
const ProductList: React.FC = () => {
  return (
    <>
      <PageHeader title="產品介紹" breadcrumb="PRODUCTS" />
      <section className="py-24 px-10 max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <Link to={`/products/${product.slug}`} key={product.id} className="group block">
              <Card className="h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 font-bold tracking-wider">
                    {product.categoryTag}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-yellow transition-colors">{product.name}</h3>
                  <p className="text-brand-textSec text-sm mb-6 flex-1">{product.tagline}</p>
                  <div className="flex items-center text-xs font-bold tracking-widest border-t pt-4">
                    了解更多 <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

// Product Detail Component
const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);

  if (!product) return <Navigate to="/products" />;

  const relatedProjects = PROJECTS.filter(p => p.relatedProductSlugs.includes(product.slug));

  return (
    <>
      <div className="bg-brand-dark pt-40 pb-12 px-10">
        <div className="max-w-[1320px] mx-auto">
          <Link to="/products" className="text-gray-400 text-sm hover:text-white mb-4 block">← BACK TO LIST</Link>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div>
              <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase mb-2 block">{product.categoryTag}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">{product.name}</h1>
              <p className="text-xl text-gray-300">{product.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 px-10 max-w-[1320px] mx-auto">
        {/* Gallery */}
        <div className="mb-20">
          <div className="w-full aspect-video bg-gray-100 mb-4 overflow-hidden">
             <img src={product.images[currentImage]} alt={product.name} className="w-full h-full object-cover animate-fade-in" />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentImage(idx)}
                className={`w-24 h-24 flex-shrink-0 border-2 ${currentImage === idx ? 'border-brand-yellow' : 'border-transparent'} hover:opacity-80 transition-all`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumb" />
              </button>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Description */}
            <div>
               <h3 className="text-2xl font-bold mb-6 border-l-4 border-brand-yellow pl-4">產品概述</h3>
               <p className="text-brand-textSec leading-loose text-lg">{product.description}</p>
            </div>

            {/* Specs */}
            <div>
               <h3 className="text-2xl font-bold mb-6 border-l-4 border-brand-yellow pl-4">產品規格</h3>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <tbody>
                     {product.specs.map((spec, idx) => (
                       <tr key={idx} className="border-b border-gray-200">
                         <th className="py-4 px-4 bg-gray-50 w-1/3 font-bold text-brand-text">{spec.label}</th>
                         <td className="py-4 px-4 text-brand-textSec">{spec.value}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>

            {/* Applications */}
            <div>
               <h3 className="text-2xl font-bold mb-6 border-l-4 border-brand-yellow pl-4">適用情境</h3>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {product.applications.map((app, idx) => (
                   <li key={idx} className="flex items-center gap-3 bg-gray-50 p-4 border-l-2 border-brand-green">
                     <span className="w-2 h-2 bg-brand-green rounded-full"></span>
                     <span>{app}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
             {/* Material Info */}
             <div className="bg-brand-dark p-8 text-white">
                <h4 className="text-brand-yellow font-bold mb-2 uppercase tracking-wider">Material</h4>
                <p className="text-xl font-bold">{product.material}</p>
             </div>

             {/* Downloads */}
             <div className="border border-gray-200 p-8">
                <h4 className="font-bold mb-6 text-lg">相關文件下載</h4>
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-brand-yellow hover:text-black transition-colors group">
                    <span className="text-sm font-bold">產品型錄 (PDF)</span>
                    <span className="text-xl">↓</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-brand-yellow hover:text-black transition-colors group">
                    <span className="text-sm font-bold">測試報告 (PDF)</span>
                    <span className="text-xl">↓</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-brand-yellow hover:text-black transition-colors group">
                    <span className="text-sm font-bold">施工規範 (DWG)</span>
                    <span className="text-xl">↓</span>
                  </button>
                </div>
             </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="border-t pt-20">
             <SectionTitle title="相關工程實績" />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {relatedProjects.map(project => (
                 <div 
                   key={project.id} 
                   className="cursor-pointer group"
                   onClick={() => setSelectedProject(project.id)}
                 >
                   <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                      <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white border border-white px-4 py-2 text-sm">VIEW PROJECT</span>
                      </div>
                   </div>
                   <h4 className="font-bold text-lg group-hover:text-brand-yellow transition-colors">{project.title}</h4>
                   <p className="text-sm text-brand-textSec">{project.location} | {project.year}</p>
                 </div>
               ))}
             </div>
          </div>
        )}
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export const Products: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/:slug" element={<ProductDetail />} />
    </Routes>
  );
};