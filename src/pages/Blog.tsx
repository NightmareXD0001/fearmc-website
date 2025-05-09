
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts } from '@/utils/blogPosts';

const Blog = () => {
  const [serverStatus, setServerStatus] = useState(null);

  return (
    <PageLayout>
      <Header serverStatus={serverStatus} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-white">Blog</h1>
          <p className="text-gray-300">
            Latest news, updates and events from the FearMC team
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full glass-card rounded-xl p-8 text-center">
              <p className="text-gray-300">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
