import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { blogPosts } from '../data/blogPosts';

const BlogPage = (props) => {
  const { blogId } = props;
  const blog = blogPosts.find(post => post.id === blogId);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [blogId]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
              <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <button
                onClick={props.onBackToHome}
                className="inline-flex items-center text-white hover:text-primary-dark font-medium transition-colors duration-200 cursor-pointer px-8 py-3 bg-blue-500 rounded-md"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        <article className="bg-white">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={props.onBackToHome}
                className="inline-flex items-center text-white/90 hover:text-white font-medium transition-colors duration-200 cursor-pointer mb-8"
              >
                ← Back to Home
              </button>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                  {blog.category}
                </span>
                <span className="text-white/90 text-sm">{blog.readTime}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {blog.title}
              </h1>

              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <p className="font-medium text-white">{blog.author}</p>
                    <p className="text-sm text-white/80">{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Content */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Featured Image/Icon */}
            <div className="flex justify-center mb-12">
              <div className="text-9xl">{blog.image}</div>
            </div>

            {/* Excerpt */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                {blog.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content && blog.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About {blog.author}</h3>
                  <p className="text-gray-600">
                    {blog.author} is a passionate writer and expert in {blog.category.toLowerCase()}, 
                    sharing insights and best practices with the development community.
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <button
                onClick={props.onBackToHome}
                className="inline-flex items-center text-white hover:text-primary-dark font-medium transition-colors duration-200 cursor-pointer px-8 py-3 bg-blue-500 rounded-md"
              >
                ← Back to Home
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(post => post.id !== blog.id && post.category === blog.category)
                  .slice(0, 2)
                  .map((post, index) => (
                    <div
                      key={index}
                      onClick={() => props.onNavigateToBlog(post.id)}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-6"
                    >
                      <div className="text-4xl mb-4">{post.image}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <span className="text-blue-600 font-medium text-sm">Read →</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
