import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/UI';
import { PageHeader } from '../components/Layout';

const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const links = [
    { to: '/about', label: '關於煒鑫' },
    { to: '/about/chairman', label: '董事長的話' },
    { to: '/about/team', label: '團隊介紹' },
    { to: '/about/business', label: '營業項目' },
    { to: '/about/history', label: '公司沿革' },
    { to: '/about/experience', label: '工程經驗' },
    { to: '/about/affiliates', label: '關係企業' },
  ];

  return (
    <>
      <PageHeader title="關於我們" breadcrumb="ABOUT US" />
      <div className="max-w-[1320px] mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <aside className="lg:col-span-1">
          <nav className="sticky top-32 flex flex-col space-y-1">
             {links.map(link => {
               const isActive = location.pathname === link.to;
               return (
                 <Link 
                   key={link.to} 
                   to={link.to}
                   className={`px-4 py-3 text-sm font-bold border-l-4 transition-all ${
                     isActive 
                       ? 'border-brand-yellow bg-gray-50 text-black' 
                       : 'border-transparent text-gray-500 hover:text-black hover:border-gray-200'
                   }`}
                 >
                   {link.label}
                 </Link>
               );
             })}
          </nav>
        </aside>
        <main className="lg:col-span-3 min-h-[500px]">
          {children}
        </main>
      </div>
    </>
  );
};

// Sub-page components placeholder
const Overview = () => (
  <div>
    <SectionTitle title="專業、誠信、永續經營" />
    <p className="mb-6 text-brand-textSec leading-loose">
      煒鑫實業自成立以來，始終專注於建築結構的高效防水與樓板隔音工程。我們深知建築物的耐久性與居住舒適度息息相關，因此堅持引進符合國際標準的高性能材料，並結合在地化的專業施工團隊，為每一棟建築提供最完善的保護。
    </p>
    <img src="https://picsum.photos/1000/500?random=about" alt="Office" className="w-full mb-8" />
    <p className="text-brand-textSec leading-loose">
      我們不只販售材料，更提供從設計規劃、工法建議到現場施作的一條龍服務。無論是公共工程的嚴苛要求，或是私人宅邸的細膩質感，煒鑫實業都能精準達成客戶期待。
    </p>
  </div>
);

const Chairman = () => (
  <div>
    <SectionTitle title="董事長的話" />
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <img src="https://picsum.photos/400/500?random=chairman" className="w-full md:w-1/3 object-cover" alt="Chairman" />
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-4">堅持品質，守護建築價值</h3>
        <p className="text-brand-textSec leading-loose mb-4">
          「水，是生命之源，但也可能是建築之癌。」這是我從業三十年來的深刻體悟。
        </p>
        <p className="text-brand-textSec leading-loose">
          創立煒鑫實業的初衷，就是希望透過引進更先進、更環保的材料工法，解決台灣氣候潮濕多雨所帶來的建築漏水痛點。近年來，隨著生活品質提升，我們更跨足樓板隔音領域，期許能為人們創造一個既乾燥又寧靜的安居空間。
        </p>
        <div className="mt-8">
           <p className="font-bold text-lg">陳煒鑫</p>
           <p className="text-sm text-gray-500">董事長</p>
        </div>
      </div>
    </div>
  </div>
);

const Business = () => (
  <div>
    <SectionTitle title="營業項目" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        '建築防水工程規劃施工',
        '樓板隔音系統規劃施工',
        '地下結構止水工程',
        '工業防蝕襯裡工程',
        '伸縮縫安裝工程',
        '防水隔音材料進出口買賣'
      ].map((item, idx) => (
        <div key={idx} className="bg-gray-50 p-6 border-l-4 border-brand-green hover:bg-white hover:shadow-sharp transition-all">
          <h4 className="font-bold text-lg">{item}</h4>
        </div>
      ))}
    </div>
  </div>
);

// Fallback for other sections
const Placeholder = ({ title }: { title: string }) => (
  <div>
    <SectionTitle title={title} />
    <div className="bg-gray-100 p-12 text-center text-gray-500">
      <p>內容建置中...</p>
    </div>
  </div>
);

export const About: React.FC = () => {
  return (
    <AboutLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/chairman" element={<Chairman />} />
        <Route path="/team" element={<Placeholder title="團隊介紹" />} />
        <Route path="/business" element={<Business />} />
        <Route path="/history" element={<Placeholder title="公司沿革" />} />
        <Route path="/experience" element={<Placeholder title="工程經驗" />} />
        <Route path="/affiliates" element={<Placeholder title="關係企業" />} />
      </Routes>
    </AboutLayout>
  );
};