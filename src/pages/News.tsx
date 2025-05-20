
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import NewsCard from '@/components/ui/NewsCard';
import { newsPosts } from '@/utils/newsPosts';

const News = () => {
  const [serverStatus, setServerStatus] = useState(null);
  
  // Sort news posts by id in descending order (highest/newest first)
  const sortedPosts = [...newsPosts].sort((a, b) => 
    parseInt(b.id) - parseInt(a.id)
  );

  return (
    <PageLayout>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-white">News</h1>
          <p className="text-gray-300">
            Latest news, updates and events from the FearMC team
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts && sortedPosts.length > 0 ? (
            sortedPosts.map((post) => (
              <NewsCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full glass-card rounded-xl p-8 text-center">
              <p className="text-gray-300">No news posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
