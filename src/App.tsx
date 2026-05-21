import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Smartphone, ArrowRight } from 'lucide-react';

// 微信图标组件
const WechatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
  </svg>
);

// --- Decorative SVG Components ---
const Sparkle = ({ className, color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 0C50 0 54 38 78 48C54 58 50 100 50 100C50 100 46 58 22 48C46 38 50 0 50 0Z" fill={color} stroke="var(--color-text-brown)" strokeWidth="4" strokeLinejoin="round"/>
  </svg>
);

const Swirl = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 25C20 5 40 45 60 25C80 5 95 25 95 25" stroke="var(--color-text-brown)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloudBlob = ({ className, color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25 45C25 33.9543 33.9543 25 45 25C47.8817 25 50.621 25.6084 53.0782 26.6974C56.6661 16.1437 66.5298 8.5 78 8.5C92.9117 8.5 105 20.5883 105 35.5C105 40.5054 103.637 45.1916 101.272 49.2312C106.666 53.1118 110 59.5446 110 66.5C110 78.3741 100.374 88 88.5 88H25C11.1929 88 0 76.8071 0 63C0 49.1929 11.1929 38 25 38C25 40.3333 25 42.6667 25 45Z" fill={color} stroke="var(--color-text-brown)" strokeWidth="4" strokeLinejoin="round"/>
  </svg>
);

const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25 5V45M5 25H45M10.8579 10.8579L39.1421 39.1421M10.8579 39.1421L39.1421 10.8579" stroke="var(--color-text-brown)" strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

// 云朵形状 - 简洁风格
const CloudShape = ({ className, color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25 45C25 34 34 25 45 25C47 25 49 25.5 51 26.5C54 17 63 10 74 10C88 10 100 22 100 36C100 41 98 45 95 48C98 51 100 55 100 60H20C9 60 0 51 0 40C0 32 5 25 12 22C14 14 21 8 30 8C32 8 34 8.5 36 9.5" fill={color} stroke="var(--color-text-brown)" strokeWidth="3" strokeLinejoin="round"/>
  </svg>
);

// 小象装饰 - 简约线条风格
const LittleElephant = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* 身体 */}
    <ellipse cx="45" cy="38" rx="22" ry="18" fill="var(--color-accent-green)" stroke="var(--color-text-brown)" strokeWidth="3"/>
    {/* 头 */}
    <circle cx="28" cy="28" r="14" fill="var(--color-bg-cream)" stroke="var(--color-text-brown)" strokeWidth="3"/>
    {/* 耳朵 */}
    <ellipse cx="20" cy="26" rx="6" ry="8" fill="var(--color-accent-orange)" stroke="var(--color-text-brown)" strokeWidth="2"/>
    {/* 眼睛 */}
    <circle cx="24" cy="26" r="2" fill="var(--color-text-brown)"/>
    {/* 鼻子 */}
    <path d="M18 32C14 32 12 36 12 40C12 44 16 46 18 44" stroke="var(--color-text-brown)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    {/* 腿 */}
    <rect x="32" y="52" width="6" height="8" rx="2" fill="var(--color-text-brown)"/>
    <rect x="52" y="52" width="6" height="8" rx="2" fill="var(--color-text-brown)"/>
    <rect x="62" y="48" width="6" height="8" rx="2" fill="var(--color-text-brown)"/>
    {/* 尾巴 */}
    <path d="M67 38C72 38 74 42 74 45" stroke="var(--color-text-brown)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// --- Data ---
export const projects = [
  {
    id: 1,
    title: "苏澳大厦",
    category: "Commercial",
    description: "简洁、自然、具有未来感的花园办公空间。",
    image: "./images/suao-1.png",
    tags: ["景观设计", "景观", "商业景观"],
    details: {
      location: "江苏常州",
      type: "商业办公"
    },
    fullDescription: `项目位于常州两湖创新区洞湖北侧，处于沪宁发展轴与长三角一体化示范区的重要节点。设计以"湖山流水"为核心理念，延续建筑"湖山叠石"的形态语言，通过横向线条的铺陈，实现景观与建筑立面的一体化衔接。

在空间结构上，设计延展城市既有景观脉络，串联中央公园、生态创智空间与TOD连接节点，形成由绿坡围合、裙房绿景、沿街绿地及街坊绿地构成的多层次绿色网络。界面处理上，西太湖大道一侧强调规整、大气的办公形象；同舟路一侧则呈现自然、活泼的花园氛围。

节点系统涵盖入口广场、活力绿地、地面特色铺装及屋顶运动场。为回应年轻化使用需求，场地内植入活力跑道、多功能运动场地、趣味座椅、智能互动设备及互动装置。铺装语言延续建筑竖向延伸的语汇，以南北走向线条营造水波荡漾的流动感，强化场地整体统一性。

项目整体立足于生态协同与创新街坊的融合发展，回应高定位、大格局、创未来的区域愿景，构建面向未来的城市创智空间。`,
    renderings: [
      "./images/suao-r1.png",
      "./images/suao-r2.png",
      "./images/suao-r3.png",
      "./images/suao-r4.png"
    ]
  },

  {
    id: 3,
    title: "悦来汇中心",
    category: "Commercial",
    description: "公园商业一体化多元模式。",
    image: "./images/yuelai-main.png",
    tags: ["商业综合体", "多元空间", "景观"],
    details: {
      location: "河南平顶山",
      type: "商业综合体"
    },
    fullDescription: `项目位于城市发展新城核心区域，周边行政、教育、医疗资源成熟，人口密集，但缺乏集中式商业服务设施。本案以"云上山林·水韵商街"为设计愿景，借鉴白龟湖湿地、尧山等自然景观资源，提出"公园+商业一体化"的景观模式。

设计以"山林、溪谷，云海、湖泊"为空间意象，构建多主题景观节点：入口广场以"石林"形态打造地标打卡点；下沉广场利用高差形成"峡谷对望"的视线互动；室外商业街以"山林溪谷"为意向，组织铺装、植物与外摆空间，营造自然松弛的街区氛围。

竞品项目中广场硬质过多、可停留节点缺失、室内外联动不足等问题，强化了亲水体验、休息节点和街区式的空间串联。整体上，景观不是商业的附属，而是与商业功能并行的公共载体，旨在实现繁忙城市中的一片宁静与自然体验的融合。`,
    renderings: [
      "./images/yuelai-r1.png",
      "./images/yuelai-r2.png",
      "./images/yuelai-r3.png",
      "./images/yuelai-r4.png"
    ]
  },
  {
    id: 4,
    title: "吾悦学府三期",
    category: "Landscape",
    description: "一个充满诗意的雅士栖居之所。",
    image: "./images/wuyue-main.png",
    tags: ["住宅景观", "生态", "总体规划"],
    details: {
      location: "山东东营",
      type: "住宅景观"
    },
    fullDescription: `项目位于山东东营，本案附近教育资源丰富，有浓厚的学术氛围。

景观设计以牡丹精神品格与文人雅士生活意趣为双重内核。设计从牡丹"不屈傲骨"的文化象征中提取色彩、花形及形态语言，转译为入口礼序、巷道空间及节点花园的铺装、构筑与雕塑体系；同时以赋诗、对弈、品茗、赏月等九类雅士活动为功能导向，构建共享会客厅、林下阅读、全龄儿童活动及康养健身等多元场景。

整体依托五进院落式空间序列，在礼制与自然之间形成"一半烟火、一半清欢"的栖居格局，兼顾日常生活的便利性与精神层面的诗意体验。`,
    renderings: [
      "./images/wuyue-r1.png",
      "./images/wuyue-r2.png",
      "./images/wuyue-r3.png",
      "./images/wuyue-r4.png"
    ]
  },
  {
    id: 5,
    title: "天乐社区旧改",
    category: "Landscape",
    description: "老旧社区空间更新改造。",
    image: "./images/tianle-main.jpg",
    tags: ["城市", "硬质景观", "活动"],
    details: {
      location: "安徽合肥",
      type: "社区更新"
    },
    fullDescription: `天乐社区旧改项目位于安徽合肥，是一处针对老旧社区公共空间的更新改造设计。

项目在保留原有社区结构的基础上，对硬质铺装、活动设施、绿化种植以及夜景照明进行了全面提升。

设计中特别关注老年居民的使用需求，设置了无障碍通道、休憩廊架以及康体健身区域。同时，通过社区文化墙和景观小品，讲述社区历史，增强居民归属感。`,
    renderings: [
      "./images/tianle-r1.jpg",
      "./images/tianle-r2.jpg",
      "./images/tianle-r3.jpg"
    ]
  }
];

export default function App() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <div className="min-h-screen font-sans selection:bg-accent-orange/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg-cream/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex gap-8 hidden md:flex font-medium text-text-brown/60">
            <a href="#work" className="hover:text-text-brown transition-colors">作品</a>
            <a href="#about" className="hover:text-text-brown transition-colors">关于</a>
          </div>
          
          <a href="#" className="font-hand text-4xl font-bold tracking-tight absolute left-1/2 -translate-x-1/2">
            裴小童.
          </a>

          <div className="flex gap-8 hidden md:flex font-medium text-text-brown/60">
            <a href="#experience" className="hover:text-text-brown transition-colors">简历</a>
            <a href="#contact" className="hover:text-text-brown transition-colors">联系</a>
          </div>
          
          {/* Mobile menu simple replacement */}
          <div className="md:hidden flex gap-4 text-sm font-medium">
            <a href="#work">作品</a>
            <a href="#contact">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[90vh]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 云朵装饰 - 左上角 */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 0.6, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="absolute top-[8%] left-[8%] w-20">
            <CloudShape color="var(--color-accent-blue)" />
          </motion.div>
          {/* 云朵装饰 - 右上角 */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 0.5, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="absolute top-[12%] right-[12%] w-16">
            <CloudShape color="var(--color-bg-cream)" />
          </motion.div>

          {/* 云朵装饰 - 右下角 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.4, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="absolute bottom-[20%] right-[18%] w-12">
            <CloudShape color="var(--color-accent-green)" />
          </motion.div>
          {/* 原有装饰元素 */}
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="absolute top-[10%] left-[25%] w-8 text-transparent">
            <Sparkle color="transparent" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="absolute top-[30%] left-[80%] w-12 text-transparent">
            <Asterisk />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-[15%] right-[20%] w-20">
            <Sparkle color="var(--color-accent-orange)" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="absolute bottom-[25%] left-[20%] w-24">
            <Swirl />
          </motion.div>
           <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-[10%] right-[10%] w-10">
            <Asterisk />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center z-10 max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-text-brown">
            你好！我是裴小童
          </h1>
          
          <div className="flex items-center justify-center gap-6 mt-12 flex-col sm:flex-row">
            <a href="#contact" className="bg-text-brown text-bg-cream px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              开始交流
            </a>
          </div>
        </motion.div>
      </section>

      {/* Ground Line Decoration */}
      <div className="w-full max-w-5xl mx-auto h-0.5 bg-text-brown rounded-full mb-32 relative">
      </div>

      {/* Work Section */}
      <section id="work" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">精选作品</h2>
            <p className="text-text-brown/70 max-w-lg">
              从打造户外景观到设计沉浸式商业空间，我的设计之旅致力于创造与人产生共鸣的空间。
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 bg-text-brown/5 p-1 rounded-full w-fit">
            {[
              { key: "All", label: "全部" },
              { key: "Commercial", label: "商业" },
              { key: "Landscape", label: "景观" }
            ].map(({ key, label }) => (
              <button 
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === key ? 'bg-bg-cream shadow-sm text-text-brown' : 'text-text-brown/60 hover:text-text-brown'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                key={project.id} 
                className="group"
              >
                <Link to={`/project/${project.id}`} className="block cursor-pointer">
                  <div className="overflow-hidden rounded-3xl mb-6 relative aspect-[4/3] bg-text-brown/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-text-brown/0 group-hover:bg-text-brown/10 transition-colors duration-300"></div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-2">{project.title}</h3>
                      <p className="text-text-brown/70 mb-4">{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-3 py-1 border border-text-brown/20 rounded-full text-text-brown/60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-text-brown/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* About & Experience Section */}
      <section id="about" className="py-32 bg-text-brown text-bg-cream mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">关于我</h2>
            <div className="space-y-6 text-bg-cream/80 text-lg leading-relaxed">
              <p>
                具备扎实的环境艺术与空间设计基础，拥有商业、办公及公共空间项目经验。熟悉空间设计从概念推演、模型搭建、效果表现到方案汇报的完整流程。
              </p>
              <p>
                擅长通过空间、场景氛围塑造与视觉表达提升空间体验价值，对潮玩IP主题空间、商业中庭互动场景及社交共享空间方向具有浓厚兴趣。具备较强执行力、学习能力及审美判断，能够快速适应商业空间设计节奏，期待深耕商业体验空间与年轻化消费场景设计领域。
              </p>
            </div>
            
            <div className="mt-12">
               <h3 className="font-serif text-2xl mb-6 flex items-center gap-2">
                 <Sparkle className="w-8 h-8 text-accent-orange" color="currentColor" /> 
                 技能
               </h3>
               <div className="flex flex-wrap gap-3">
                 {["revit", "AutoCAD", "SketchUp", "PS", "ID", "AI辅助渲染", "3D 渲染", "视频剪辑"].map(skill => (
                   <span key={skill} className="px-4 py-2 rounded-full border border-bg-cream/20 text-sm">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>

          </div>

          <div id="experience">
            <h2 className="font-serif text-4xl md:text-5xl mb-8">工作经历</h2>
            <div className="space-y-10">
               <div className="relative pl-8 border-l border-bg-cream/20">
                 <div className="absolute w-4 h-4 bg-accent-blue rounded-full -left-[9px] top-1"></div>
                 <h4 className="text-xl font-medium">筑森建筑设计有限公司｜助理景观设计师</h4>
                 <p className="text-bg-cream/60 text-sm mb-2">2023.08 – 2026.04</p>
                 <p className="text-bg-cream/80">参与商业办公、住宅社区及公共空间等项目设计，协助完成从概念方案、汇报文本到施工图深化的全流程工作。负责分析图绘制、文本排版及效果表达，熟练运用 SketchUp、CAD、D5、Revit 完成建模及节点深化。结合场地条件优化空间动线与功能布局，参与投标方案制作及汇报支持，运用 AI 工具辅助概念推演与方案迭代，提升设计效率。</p>
               </div>
               
               <div className="relative pl-8 border-l border-bg-cream/20">
                 <div className="absolute w-4 h-4 bg-accent-green rounded-full -left-[9px] top-1"></div>
                 <h4 className="text-xl font-medium">西安木玉泽景观规划设计有限公司｜景观设计师</h4>
                 <p className="text-bg-cream/60 text-sm mb-2">2022.07 – 2023.06</p>
                 <p className="text-bg-cream/80">负责校园景观、商业配套及公共空间改造项目的方案设计、施工图绘制及效果图制作，项目前期分析与设计深化。完成景观平面优化、节点深化及成果表达，推进项目汇报。兼任公众号内容排版与案例整理工作，参与短视频拍摄剪辑及直播辅助，提升视觉表达与跨部门协作能力。</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6 max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-8">让我们一起创造美好。</h2>
          <p className="text-text-brown/70 text-lg mb-16 max-w-2xl mx-auto">
            我正在寻找商业室内设计或空间体验设计的全职职位。期待与您联系！
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="mailto:pxiaotong@outlook.com" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white shadow-sm border border-text-brown/10 hover:shadow-md hover:-translate-y-1 transition-all group">
              <Mail className="text-accent-orange" />
              <span className="font-medium">pxiaotong@outlook.com</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white shadow-sm border border-text-brown/10 hover:shadow-md hover:-translate-y-1 transition-all group">
              <Smartphone className="text-accent-blue" />
              <span className="font-medium">13409365567</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white shadow-sm border border-text-brown/10 hover:shadow-md hover:-translate-y-1 transition-all group">
              <WechatIcon className="w-5 h-5 text-accent-green" />
              <span className="font-medium">13409365567</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-text-brown/40 text-sm border-t border-text-brown/10">
        <p>© {new Date().getFullYear()} 裴小童空间设计. 保留所有权利。</p>
      </footer>
    </div>
  );
}
