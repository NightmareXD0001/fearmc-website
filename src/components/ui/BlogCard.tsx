
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import type { BlogPost } from '@/utils/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      {post.image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-medium text-fear-red bg-fear-red/10 rounded-full px-2.5 py-1">
            {post.category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-400">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <Link to={`/blog/${post.id}`} className="text-xs font-medium text-fear-red hover:text-fear-red/80">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
