import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8080/api/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error('获取文章详情失败:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="loading">加载中...</div>;
  if (error) return <div className="error">错误: {error}</div>;
  if (!post) return <div className="not-found">文章未找到</div>;

  return (
    <article className="post-detail">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        <span className="post-author">作者: {post.author}</span>
        <span className="post-date">
          发布时间: {new Date(post.createTime).toLocaleDateString()}
        </span>
      </div>
      <div className="post-content">{post.content}</div>
    </article>
  );
};

export default PostDetail;