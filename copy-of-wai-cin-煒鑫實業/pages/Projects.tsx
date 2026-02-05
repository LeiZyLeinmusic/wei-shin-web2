import React, { useState } from 'react';
import { Routes, Route, useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { Card, Modal, Button } from '../components/UI';
import { PageHeader } from '../components/Layout';
import { PROJECTS, PRODUCTS } from '../constants';
import { Project, ProjectCategory, CATEGORY_MAP } from '../types';

// Modal Content Component
export const ProjectModal: React.FC<{ projectId: string; onClose: () => void }> = ({ projectId, onClose }) => {
  const project = PROJECTS.find(p => p.id === projectId);
  const [currentImg, setCurrentImg] = useState(0);

  if (!project) return null;

  const usedProducts = PRODUCTS.filter(p => project.relatedProductSlugs.includes(p.slug));

  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
        {/* Left: Gallery */}
        <div className="bg-black relative h-64 lg:h-auto">
          <img src={project.images[currentImg]} alt={project.title} className="w-full h-full object-contain" />
          {project.images.length > 1 && (
             <>
               <button onClick={() => setCurrentImg(prev => prev > 0 ? prev - 1 : project.images.length - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 w-10 h-10 flex items-center justify-center hover:bg-brand-yellow hover:text-black">←</button>
               <button onClick={() => setCurrentImg(prev => prev < project.images.length - 1 ? prev + 1 : 0)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 w-10 h-10 flex items-center justify-center hover:bg-brand-yellow hover:text-black">→</button>
             </>
          )}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {project.images.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentImg(idx)}
                className={`w-2 h-2 rounded-full ${currentImg === idx ? 'bg-brand-yellow' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="p-8 lg:p-12 overflow-y-auto">
          <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase mb-2 block">{CATEGORY_MAP[project.category]}</span>
          <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
             <div>
                <span className="block text-gray-400 mb-1">地點 Location</span>
                <span className="font-bold">{project.location}</span>
             </div>
             <div>
                <span className="block text-gray-400 mb-1">年份 Year</span>
                <span className="font-bold">{project.year}</span>
             </div>
          </div>

          <div className="mb-8">
            <h4 className="font-bold mb-4 border-l-4 border-brand-yellow pl-3">工程簡介</h4>
            <p className="text-brand-textSec leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-8">
            <h4 className="font-bold mb-4 border-l-4 border-brand-yellow pl-3">使用材料/工法</h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((m, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 text-sm font-medium">{m}</span>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-4 border-l-4 border-brand-yellow pl-3">相關產品</h4>
             <div className="space-y-3">
               {usedProducts.map(p => (
                 <Link 
                   key={p.id} 
                   to={`/products/${p.slug}`} 
                   className="flex items-center gap-4 group p-2 border border-transparent hover:border-gray-200 transition-colors"
                   onClick={onClose} // Close modal when navigating
                 >
                   <img src={p.images[0]} alt={p.name} className="w-16 h-12 object-cover" />
                   <div>
                     <div className="font-bold group-hover:text-brand-yellow transition-colors">{p.name}</div>
                     <div className="text-xs text-gray-500">查看產品詳情 →</div>
                   </div>
                 </Link>
               ))}
             </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const ProjectsList: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Filter projects
  const filteredProjects = category 
    ? PROJECTS.filter(p => p.category === category)
    : PROJECTS;

  // Categories for filter UI
  const categories: { label: string; value: string }[] = [
    { label: '全部 ALL', value: '' },
    ...(Object.entries(CATEGORY_MAP) as [string, string][]).map(([key, label]) => ({ label, value: key }))
  ];

  const handleFilterClick = (catValue: string) => {
    navigate(catValue ? `/projects/${catValue}` : '/projects');
  };

  return (
    <>
      <PageHeader title="工程實績" breadcrumb="PROJECTS" />
      
      {/* Filter Bar */}
      <div className="sticky top-[80px] z-30 bg-white/95 backdrop-blur border-b border-gray-100 py-4 px-10 shadow-sm">
        <div className="max-w-[1320px] mx-auto overflow-x-auto whitespace-nowrap hide-scrollbar">
          <div className="flex gap-2 md:gap-4">
            {categories.map(cat => {
              const isActive = cat.value === (category || '');
              return (
                <button
                  key={cat.value}
                  onClick={() => handleFilterClick(cat.value)}
                  className={`px-4 py-2 text-sm font-bold transition-all rounded-full ${
                    isActive 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 px-10 max-w-[1320px] mx-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="cursor-pointer group relative overflow-hidden bg-gray-100"
              onClick={() => setSelectedProjectId(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                 <span className="text-brand-yellow font-bold text-xs tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   {CATEGORY_MAP[project.category]}
                 </span>
                 <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                   {project.title}
                 </h3>
                 <p className="text-sm text-gray-500 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                   {project.location} | {project.year}
                 </p>
                 <div className="mt-6 w-8 h-8 rounded-full border border-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                   +
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            目前此分類尚無案例。
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProjectId && (
        <ProjectModal 
          projectId={selectedProjectId} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}
    </>
  );
};

export const Projects: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectsList />} />
      <Route path="/:category" element={<ProjectsList />} />
    </Routes>
  );
};