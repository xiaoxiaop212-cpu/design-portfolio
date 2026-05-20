import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { projects } from './App';

// 作品详情页组件
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '0'));

  if (!project) {
    return (
      <div className="min-h-screen font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif text-text-brown mb-4">作品不存在</h1>
          <Link to="/" className="text-accent-orange hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  const allImages = project.images || [project.image];

  return (
    <div className="min-h-screen font-sans bg-bg-cream">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 bg-bg-cream/80 backdrop-blur-md border-b border-text-brown/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-text-brown/60 hover:text-text-brown transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">返回作品</span>
          </Link>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="pt-24 pb-20">
        {/* 标题区域 */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-text-brown/10 text-sm font-medium text-text-brown/70">
                {project.category === 'Commercial' ? '商业空间' : '景观设计'}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-text-brown mb-6">{project.title}</h1>
            <p className="text-xl text-text-brown/70 max-w-3xl leading-relaxed">{project.description}</p>
            
            {/* 项目信息 */}
            {project.details && (
              <div className="mt-8 grid grid-cols-2 gap-6">
                {project.details.location && (
                  <div>
                    <p className="text-sm text-text-brown/50 mb-1">项目地点</p>
                    <p className="text-text-brown font-medium">{project.details.location}</p>
                  </div>
                )}
                {project.details.type && (
                  <div>
                    <p className="text-sm text-text-brown/50 mb-1">项目类型</p>
                    <p className="text-text-brown font-medium">{project.details.type}</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* 主图展示 */}
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-3xl overflow-hidden aspect-[16/9] bg-text-brown/5">
              <img 
                src={allImages[0]} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 多图网格展示 */}
        {allImages.length > 1 && (
          <div className="max-w-7xl mx-auto px-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allImages.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className={`rounded-2xl overflow-hidden bg-text-brown/5 ${
                    index === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} - ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 项目描述详情 */}
        {project.fullDescription && (
          <div className="max-w-4xl mx-auto px-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg text-text-brown/80"
            >
              {project.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
              ))}
            </motion.div>
          </div>
        )}

        {/* 效果图展示 */}
        {project.renderings && project.renderings.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="font-serif text-xl md:text-2xl text-text-brown mb-10">效果图展示</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.renderings.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                    className="rounded-2xl overflow-hidden bg-text-brown/5 aspect-[16/9]"
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} 效果图 ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* 标签 */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="flex flex-wrap gap-3">
            {project.tags?.map(tag => (
              <span 
                key={tag} 
                className="px-4 py-2 rounded-full border border-text-brown/20 text-sm text-text-brown/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
