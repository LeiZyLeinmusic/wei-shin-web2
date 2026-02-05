import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { SectionTitle, Card, Button } from '../components/UI';
import { PageHeader } from '../components/Layout';
import { NEWS, INSIGHTS } from '../constants';

// --- NEWS ---
const NewsList = () => (
  <>
    <PageHeader title="最新消息" breadcrumb="NEWS" />
    <div className="max-w-[1320px] mx-auto px-10 py-20">
      <div className="grid gap-8">
        {NEWS.map(item => (
          <Link to={`/news/${item.slug}`} key={item.id} className="group bg-white border border-gray-100 p-0 flex flex-col md:flex-row hover:shadow-sharp transition-all">
            <div className="w-full md:w-1/3 aspect-video md:aspect-auto overflow-hidden">
               <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center">
               <span className="text-sm text-gray-400 font-mono mb-2">{item.date}</span>
               <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-yellow transition-colors">{item.title}</h3>
               <p className="text-brand-textSec line-clamp-2">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
);

const NewsDetail = () => {
  const { slug } = useParams();
  const news = NEWS.find(n => n.slug === slug);
  if (!news) return <div>Not Found</div>;
  return (
    <>
      <div className="bg-brand-dark h-[300px] w-full relative">
        <div className="absolute bottom-0 left-0 p-10 max-w-[1320px] mx-auto w-full">
           <span className="text-brand-yellow font-mono">{news.date}</span>
           <h1 className="text-4xl font-bold text-white mt-2">{news.title}</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-10 py-20">
        <img src={news.image} alt={news.title} className="w-full mb-12" />
        <div className="prose max-w-none text-brand-text leading-loose">
          <p className="text-xl font-bold mb-8">{news.summary}</p>
          <p>{news.content}</p>
          <p>（此處為示範內容，實際內文將更長...）</p>
        </div>
        <div className="mt-20 border-t pt-10 text-center">
           <Link to="/news" className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors">回列表</Link>
        </div>
      </div>
    </>
  );
};

export const News = () => (
  <Routes>
    <Route path="/" element={<NewsList />} />
    <Route path="/:slug" element={<NewsDetail />} />
  </Routes>
);

// --- INSIGHTS ---
// (Using similar logic to News but with sidebar for variety)
const InsightsList = () => (
  <>
    <PageHeader title="技術觀點" breadcrumb="INSIGHTS" />
    <div className="max-w-[1320px] mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
       <div className="lg:col-span-2 grid gap-12">
          {INSIGHTS.map(item => (
            <Link to={`/insights/${item.slug}`} key={item.id} className="block group">
              <div className="aspect-video overflow-hidden mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-brand-green font-bold text-sm">{item.category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-brand-yellow transition-colors">{item.title}</h3>
              <p className="text-brand-textSec line-clamp-3">{item.summary}</p>
            </Link>
          ))}
       </div>
       <div className="lg:col-span-1">
          <div className="bg-gray-50 p-8 sticky top-32">
             <h4 className="font-bold mb-6 border-b pb-2">熱門分類</h4>
             <ul className="space-y-3">
               {['工法研討', '法規新知', '材料選擇', '施工實務'].map(c => (
                 <li key={c}><a href="#" className="hover:text-brand-yellow block">{c}</a></li>
               ))}
             </ul>
          </div>
       </div>
    </div>
  </>
);

const InsightDetail = () => {
    const { slug } = useParams();
    const item = INSIGHTS.find(i => i.slug === slug);
    if (!item) return <div>Not Found</div>;
    return (
        <div className="max-w-4xl mx-auto px-10 py-20">
             <span className="text-brand-green font-bold text-sm block mb-4">{item.category}</span>
             <h1 className="text-4xl font-bold mb-12">{item.title}</h1>
             <img src={item.image} alt={item.title} className="w-full mb-12 grayscale hover:grayscale-0 transition-all duration-700" />
             <div className="prose max-w-none text-brand-textSec leading-loose">
                 <p className="font-bold text-black text-lg">{item.summary}</p>
                 <br />
                 <p>{item.content}</p>
                 <p>技術文章內容示範...</p>
             </div>
        </div>
    )
}

export const Insights = () => (
  <Routes>
    <Route path="/" element={<InsightsList />} />
    <Route path="/:slug" element={<InsightDetail />} />
  </Routes>
);

// --- SUPPORT ---
export const Support = () => (
  <>
    <PageHeader title="服務支援" breadcrumb="SUPPORT" />
    <div className="max-w-[1320px] mx-auto px-10 py-20">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
             <SectionTitle title="檔案下載" subtitle="Downloads" />
             <div className="space-y-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="flex items-center justify-between border-b border-gray-200 py-4">
                    <div>
                       <p className="font-bold">2024 煒鑫實業綜合型錄 V{i}.0</p>
                       <span className="text-xs text-gray-400">PDF | 2024.01.0{i}</span>
                    </div>
                    <Button variant="outline-dark" className="!px-4 !py-2 text-xs">Download</Button>
                 </div>
               ))}
             </div>
          </div>
          <div>
             <SectionTitle title="相關連結" subtitle="Useful Links" />
             <div className="grid gap-4">
                <a href="#" className="block p-6 bg-gray-50 hover:bg-white hover:shadow-sharp border border-transparent hover:border-gray-200 transition-all">
                   <h4 className="font-bold">內政部營建署</h4>
                   <p className="text-sm text-gray-500 mt-2">最新建築法規查詢</p>
                </a>
                <a href="#" className="block p-6 bg-gray-50 hover:bg-white hover:shadow-sharp border border-transparent hover:border-gray-200 transition-all">
                   <h4 className="font-bold">台灣建築中心</h4>
                   <p className="text-sm text-gray-500 mt-2">綠建築標章與新技術認證</p>
                </a>
             </div>
          </div>
       </div>
    </div>
  </>
);

// --- CONTACT ---
export const Contact = () => (
  <>
    <PageHeader title="聯絡我們" breadcrumb="CONTACT" />
    <div className="max-w-[1320px] mx-auto px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
       <div>
          <SectionTitle title="聯絡資訊" />
          <div className="space-y-8 text-brand-textSec">
             <p>若您有任何產品需求、工程諮詢或合作提案，歡迎透過下方表單或直接與我們聯繫。</p>
             <ul className="space-y-6">
                <li className="flex gap-4">
                   <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center text-xl text-black">📍</div>
                   <div>
                      <h5 className="font-bold text-black">公司地址</h5>
                      <p>台北市中山區某某路123號10樓</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center text-xl text-black">📞</div>
                   <div>
                      <h5 className="font-bold text-black">服務電話</h5>
                      <p>02-2345-6789</p>
                   </div>
                </li>
                <li className="flex gap-4">
                   <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center text-xl text-black">✉️</div>
                   <div>
                      <h5 className="font-bold text-black">電子信箱</h5>
                      <p>service@waicin.com.tw</p>
                   </div>
                </li>
             </ul>
          </div>
       </div>
       
       <div className="bg-gray-50 p-10 shadow-sharp">
          <SectionTitle title="留言板" subtitle="Message Board" />
          <form className="space-y-6">
             <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="您的姓名" className="w-full p-4 bg-white border border-gray-200 focus:border-brand-yellow outline-none" />
                <input type="text" placeholder="聯絡電話" className="w-full p-4 bg-white border border-gray-200 focus:border-brand-yellow outline-none" />
             </div>
             <input type="email" placeholder="電子信箱" className="w-full p-4 bg-white border border-gray-200 focus:border-brand-yellow outline-none" />
             <input type="text" placeholder="公司名稱 (選填)" className="w-full p-4 bg-white border border-gray-200 focus:border-brand-yellow outline-none" />
             <textarea rows={5} placeholder="您的需求或訊息..." className="w-full p-4 bg-white border border-gray-200 focus:border-brand-yellow outline-none"></textarea>
             <Button type="submit" className="w-full">送出訊息</Button>
          </form>
       </div>
    </div>
    
    {/* Map Placeholder */}
    <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
       <span className="text-gray-500 font-bold">Google Map Embed Placeholder</span>
    </div>
  </>
);