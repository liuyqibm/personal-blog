package com.example.blog.service;

import com.example.blog.model.Article;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService {

    private List<Article> articles = new ArrayList<>();

    public BlogService() {
        // Sample data
        articles.add(new Article("First Post", "This is the content of the first post.", "Author 1"));
        articles.add(new Article("Second Post", "This is the content of the second post.", "Author 2"));
    }

    public List<Article> getAllArticles() {
        return articles;
    }
    public Article getArticleById(String id) {
        return articles.stream()
                .filter(article -> article.getId().equals(id))
                .findFirst()
                .orElse(null);
    }
}