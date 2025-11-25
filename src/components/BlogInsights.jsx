import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, BookOpen, Calendar, ChevronRight, Clock, Tag, User } from 'lucide-react';

const BlogInsights = (props) => {
  const location = useLocation();
  const isStandalonePage = location?.pathname === '/blog';

  const categories = ['All', 'Technology Trends', 'Development', 'Design', 'Performance', 'Security', 'Mobile'];
  const [activeCategory, setActiveCategory] = React.useState(props.initialCategory || 'All');

  const filteredPosts = React.useMemo(() => {
    if (activeCategory === 'All') return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPosts = React.useMemo(() => {
    const posts = filteredPosts.filter(post => post.featured);
    return isStandalonePage ? posts : posts.slice(0, 2);
  }, [filteredPosts, isStandalonePage]);

  const regularPosts = React.useMemo(() => {
    const posts = filteredPosts.filter(post => !post.featured);
    return isStandalonePage ? posts : posts.slice(0, 3);
  }, [filteredPosts, isStandalonePage]);
  const BlogImagePlaceholder = ({ className = '', src, title }) => (
    <div className={`relative w-full h-full min-h-[240px] bg-[#1A3A6F] overflow-hidden ${className}`}>
      {typeof src === 'string' && (src.startsWith('http') || src.startsWith('data:image')) ? (
        <img
          src={src}
          alt={title ? `${title} cover` : ''}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <span
          className="absolute inset-0 flex items-center justify-center text-6xl text-white/70"
          role="img"
          aria-label={title ? `${title} illustration` : 'Article illustration'}
        >
          {src || '📰'}
        </span>
      )}
    </div>
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className={`py-10 bg-gray-50 ${isStandalonePage ? 'mt-20' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1A3A6F] mb-4">
            Latest Insights & Trends
          </h2>
          <p className="text-xl text-[#1A3A6F] max-w-3xl mx-auto">
            Stay ahead of the curve with our expert insights on web development, design, and technology trends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${category === activeCategory
                ? 'bg-[#1A3A6F] text-white border-[#1A3A6F] shadow-lg shadow-[#1A3A6F]/20'
                : 'bg-white text-[#6E7787] border-[#D9E4F2] hover:border-[#2DA3DB] hover:text-[#1A3A6F]'
                }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>



        {featuredPosts.length > 0 && (
          <div className="mb-16 flex flex-col gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-3xl bg-white border border-[#D9E4F2] shadow-xl shadow-[#1A3A6F]/5 hover:shadow-2xl hover:shadow-[#1A3A6F]/10 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[1.2fr_1fr] h-full">
                  {/* Image Side */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <BlogImagePlaceholder
                      src={post.image}
                      title={post.title}
                      className="h-full w-full group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      {/* <span className="px-3 py-1 bg-[#2DA3DB]/10 text-[#1A3A6F] text-xs font-bold uppercase tracking-wider rounded-md">
                        Featured
                      </span> */}

                      <span className="px-3 py-1 bg-[#2DA3DB]/10 text-[#1A3A6F] text-xs font-bold uppercase tracking-wider rounded-md">
                        {post.category}
                      </span>

                      <div className="flex items-center text-[#6E7787] text-xs font-medium">
                        <Clock size={14} className="mr-1.5" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1F26] mb-4 group-hover:text-[#2DA3DB] transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-[#6E7787] mb-8 leading-relaxed text-base sm:text-lg">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#FAFAFA]">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-[#D9E4F2] rounded-full flex items-center justify-center text-[#1A3A6F] font-bold text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#1C1F26] text-sm">{post.author}</p>
                          <p className="text-xs text-[#6E7787]">{post.date}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => props.onReadBlog?.(post.id)}
                        className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#1A3A6F] text-white group-hover:bg-[#2DA3DB] transition-all"
                        aria-label="Read featured post"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#D9E4F2] shadow-sm hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Card Header/Image Area */}
                <div className="relative h-48 overflow-hidden bg-[#FAFAFA] border-b border-[#D9E4F2]">
                  {/* Simplified visual pattern for non-featured posts */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <span className="text-4xl opacity-20">
                       <Tag />
                     </span> */}
                    {typeof post.image === 'string' && (post.image.startsWith('http') || post.image.startsWith('data:image')) ? (
                      <img
                        src={post.image}
                        alt={`${post.title} cover`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span
                        className="text-5xl"
                        role="img"
                        aria-label={`${post.title} illustration`}
                      >
                        {post.image || '📰'}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/80 backdrop-blur-sm border border-[#D9E4F2] text-[10px] font-bold uppercase tracking-wider text-[#1A3A6F]">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3 text-xs font-medium text-[#6E7787]">
                    <span className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#D9E4F2]" />
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1C1F26] mb-3 leading-snug group-hover:text-[#2DA3DB] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[#6E7787] text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#FAFAFA] mt-auto">
                    <span className="text-xs font-semibold text-[#1C1F26] flex items-center gap-2">
                      <User size={12} className="text-[#2DA3DB]" />
                      {post.author}
                    </span>
                    <button
                      onClick={() => props.onReadBlog?.(post.id)}
                      className="text-[#1A3A6F] font-bold text-xs uppercase tracking-wider flex items-center gap-1 hover:text-[#2DA3DB] transition-colors"
                    >
                      Read Article
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#D9E4F2] border-dashed">
            <p className="text-[#6E7787]">No articles found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-[#2DA3DB] font-bold hover:underline"
            >
              View all posts
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default BlogInsights;
