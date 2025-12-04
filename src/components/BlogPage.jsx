import React, { useEffect, useMemo, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  ChevronRight,
  BookOpen,
  Tag
} from 'lucide-react';

import { blogPosts } from '../data/blogPosts';

// --- Sub-component: BlogMedia ---
const BlogMedia = ({ src, category, className }) => {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-[#D9E4F2] ${className}`}>
        <img src={src} alt="Article cover" className="h-full w-full object-cover" />
      </div>
    );
  }

  // Abstract Pattern Placeholder for Enterprise look
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#1A3A6F] rounded-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#2DA3DB]/20 to-[#1A3A6F]/80 mix-blend-overlay" />
      {/* Decorative Circles */}
      <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#2DA3DB]/20 blur-3xl opacity-60" />
      <div className="absolute -left-10 -bottom-10 h-64 w-64 rounded-full bg-[#FAFAFA]/10 blur-3xl opacity-40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <BookOpen size={40} />
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-widest text-[#D9E4F2] backdrop-blur-sm border border-white/10">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
};

const BlogPage = (props) => {
  // FIX: Default to ID 1 if props.blogId is missing (allows preview without router)
  // FIX: Use loose equality (==) to handle string vs number ID mismatches
  const blogId = props.blogId || 1;
  const blog = blogPosts.find(post => post.id == blogId);

  const navigate = useNavigate();
  const location = useLocation();

  const backTarget = useMemo(() => {
    if (location.state?.from) {
      return location.state.from;
    }
    if (document.referrer && !document.referrer.includes(window.location.origin)) {
      return document.referrer;
    }
    return '/blog';
  }, [location.state?.from]);

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    if (backTarget.startsWith('http') && backTarget.includes(window.location.origin)) {
      navigate(backTarget.replace(window.location.origin, ''));
      return;
    }

    if (backTarget.startsWith('http')) {
      window.location.href = backTarget;
      return;
    }

    if (backTarget) {
      navigate(backTarget);
      return;
    }

    if (props.onBackToHome) {
      props.onBackToHome();
    } else {
      navigate('/');
    }
  }, [backTarget, navigate, props.onBackToHome]);

  const relatedPosts = useMemo(() => {
    if (!blog) return [];
    return blogPosts
      .filter(post => post.id !== blog.id && post.category === blog.category)
      .slice(0, 3);
  }, [blog]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [blogId]);

  // --- Not Found State ---
  if (!blog) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#D9E4F2] text-[#1A3A6F]">
            <BookOpen size={40} />
          </div>
          <h1 className="text-3xl font-bold text-[#1C1F26] mb-4">Article Not Found</h1>
          <p className="text-[#6E7787] mb-8">The insight you are looking for has been moved or does not exist.</p>
          <button
            onClick={() => props.onBackToHome && props.onBackToHome()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A3A6F] text-white rounded-full font-bold text-sm hover:bg-[#2DA3DB] transition-all"
          >
            <ArrowLeft size={16} /> Back to Library
          </button>
        </div>
      </div>
    );
  }

  // --- Success State ---
  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6E7787] hover:text-[#1A3A6F] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Insights</span>
            <span className="sm:hidden ">Back</span>
          </button>

          <div className="flex items-center gap-2">
            <button className="p-2 text-[#6E7787] hover:text-[#2DA3DB] transition-colors" aria-label="Share on Twitter">
              <Twitter size={18} />
            </button>
            <button className="p-2 text-[#6E7787] hover:text-[#1A3A6F] transition-colors" aria-label="Share on LinkedIn">
              <Linkedin size={18} />
            </button>
            <button className="p-2 text-[#6E7787] hover:text-[#1C1F26] transition-colors" aria-label="Copy Link">
              <LinkIcon size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="pb-20">
        <article>
          {/* Header / Hero */}
          <header className="relative bg-[#1A3A6F] text-white py-20 lg:py-24 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A3A6F] to-[#0f2347]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DA3DB]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#2DA3DB]/20 border border-[#2DA3DB]/30 text-[#2DA3DB] text-xs font-bold uppercase tracking-widest">
                  {blog.category}
                </span>
                <span className="flex items-center text-[#D9E4F2]/80 text-sm font-medium">
                  <Clock size={14} className="mr-1.5" />
                  {blog.readTime}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                {blog.title}
              </h1>

              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#D9E4F2] flex items-center justify-center text-[#1A3A6F] font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm">{blog.author}</p>
                    <p className="text-[#D9E4F2]/60 text-xs">{blog.role}</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div className="flex items-center text-[#D9E4F2]/80 text-sm">
                  <Calendar size={14} className="mr-1.5" />
                  {blog.date}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
            <BlogMedia
              src={blog.image}
              category={blog.category}
              className="h-64 sm:h-80 md:h-[450px] shadow-2xl shadow-[#1A3A6F]/20"
            />
          </div>

          {/* Article Body */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* Excerpt */}
            <div className="mb-12">
              <p className="text-xl sm:text-2xl text-[#1C1F26] leading-relaxed font-medium border-l-4 border-[#2DA3DB] pl-6 py-1">
                {blog.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="space-y-6 text-[#4B5563] text-lg leading-loose">
              {blog.content && blog.content.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags (Mock) */}
            <div className="mt-12 pt-8 border-t border-[#D9E4F2] flex flex-wrap gap-2">
              <span className="text-sm font-bold text-[#1C1F26] mr-2 flex items-center">
                <Tag size={16} className="mr-1" /> Related Topics:
              </span>
              {['Enterprise', 'Innovation', 'Scalability'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-[#F0F7FF] text-[#1A3A6F] text-xs font-semibold rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        <div className="bg-white border-t border-[#D9E4F2] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-[#1C1F26]">Related Insights</h2>
              <button
                onClick={() => props.onBackToHome && props.onBackToHome()}
                className="hidden sm:flex items-center text-[#2DA3DB] font-bold text-sm hover:text-[#1A3A6F] transition-colors"
              >
                View all articles <ChevronRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => props.onNavigateToBlog && props.onNavigateToBlog(post.id)}
                    className="group cursor-pointer flex flex-col h-full bg-[#FAFAFA] rounded-2xl border border-[#D9E4F2] overflow-hidden hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-40 relative overflow-hidden bg-[#1A3A6F]">
                      {/* Mini Placeholder for related posts */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2DA3DB]/20 to-[#1A3A6F]/80 mix-blend-overlay" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="text-white/20" size={32} />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 rounded bg-white/90 text-[10px] font-bold uppercase tracking-wider text-[#1A3A6F]">
                          {post.category}
                        </span>
                      </div>
                    </div>


                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[#1C1F26] mb-2 group-hover:text-[#2DA3DB] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[#6E7787] line-clamp-2 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs font-medium text-[#6E7787] pt-4 border-t border-[#D9E4F2]/50">
                        <span>{post.readTime}</span>
                        <span className="flex items-center text-[#1A3A6F] group-hover:translate-x-1 transition-transform">
                          Read <ChevronRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-[#FAFAFA] border border-dashed border-[#D9E4F2] rounded-2xl text-[#6E7787]">
                  No related articles yet. Explore other categories for more insights.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;