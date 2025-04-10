import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/posts');
        // 确保每个文章都有唯一的 ID
        const postsWithIds = Array.isArray(response.data) 
          ? response.data.map((post, index) => ({
              ...post,
              id: post.id || `post-${index}` // 使用现有ID或生成临时ID
            }))
          : [];
        setPosts(postsWithIds);
      } catch (err) {
        console.error('获取文章失败:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="loading">加载中...</div>;
  if (error) return <div className="error">错误: {error}</div>;
  if (!posts.length) return <div className="no-posts">暂无文章</div>;

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <article 
          key={post.id || `post-${index}`} 
          className="post-item"
        >
          <h2 className="post-title">{post.title}</h2>
          <div className="post-meta">
            <span className="post-author">作者: {post.author}</span>
          </div>
          <div className="post-content">{post.content}</div>
          {post.id && (
            <Link to={`/post/${post.id}`} className="read-more">
              阅读全文 →
            </Link>
          )}
        </article>
      ))}
    </div>
  );
};

export default PostList;