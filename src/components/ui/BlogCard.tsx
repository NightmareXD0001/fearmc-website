
import { BlogPost } from '@/utils/blogPosts';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`} className="block">
      <div className="glass-card rounded-xl overflow-hidden h-full transition-all duration-300 glow-hover hover:-translate-y-1">
        {/* Image */}
        {post.imageUrl && (
          <div className="h-40 overflow-hidden">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              post.tag === 'Update' ? 'bg-blue-500/20 text-blue-400' :
              post.tag === 'Event' ? 'bg-green-500/20 text-green-400' :
              'bg-fear-red/20 text-fear-red'
            }`}>
              {post.tag}
            </span>
            <span className="text-xs text-gray-400">{post.date}</span>
          </div>
          
          <h3 className="font-medium text-lg mb-2 text-white">{post.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
