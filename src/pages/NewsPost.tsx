
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import { newsPosts, NewsPost as NewsPostType } from '@/utils/newsPosts';
import { Calendar, Tag, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const NewsPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<NewsPostType | null>(null);
  const [serverStatus, setServerStatus] = useState(null);

  useEffect(() => {
    // Find the news post with the matching id
    const foundPost = newsPosts.find(post => post.id === id);
    setPost(foundPost || null);
  }, [id]);

  if (!post) {
    return (
      <PageLayout>
        <Header serverStatus={serverStatus} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">News Post Not Found</h1>
          <p className="text-gray-300 mb-8">The news post you're looking for doesn't exist or has been removed.</p>
          <Link to="/news">
            <Button variant="default" className="bg-fear-red hover:bg-fear-red/80">
              Back to News
            </Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Parse markdown content to HTML
  const renderMarkdown = (content: string) => {
    const rawHtml = marked(content);
    const cleanHtml = DOMPurify.sanitize(rawHtml);
    return { __html: cleanHtml };
  };

  return (
    <PageLayout>
      <Header serverStatus={serverStatus} />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/news" className="text-fear-red hover:text-fear-red/80 flex items-center mb-6">
          ← Back to all posts
        </Link>
        
        <div className="glass-card rounded-xl overflow-hidden">
          {/* Hero Image */}
          {post.image && (
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Category */}
            <div className="mb-3">
              <span className="text-sm font-medium text-fear-red bg-fear-red/10 rounded-full px-3 py-1">
                {post.category}
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {post.title}
            </h1>
            
            {/* Meta */}
            <div className="flex flex-wrap gap-4 items-center mb-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
              <div 
                className="text-gray-300 markdown-content"
                dangerouslySetInnerHTML={renderMarkdown(post.content)}
              />
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2 items-center">
                  <Tag size={16} className="text-gray-400" />
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NewsPost;
