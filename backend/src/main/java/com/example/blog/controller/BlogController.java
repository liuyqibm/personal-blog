package com.example.blog.controller;

import com.example.blog.model.Article;
import com.example.blog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // 添加CORS支持
public class BlogController {

    @Autowired
    private BlogService blogService;

    @GetMapping("/articles")
    public List<Article> getAllArticles() {
        return blogService.getAllArticles();
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Article>> getAllPosts() {
        return ResponseEntity.ok(blogService.getAllArticles());
    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Article> getPost(@PathVariable String id) {
        Article article = blogService.getArticleById(id);
        if (article != null) {
            return ResponseEntity.ok(article);
        }
        return ResponseEntity.notFound().build();
    }
}
