import { Component, Input } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) {}

  @Input() article?: Article;

  ngOnInit(): void {
    this.getArticle();
  }
  
  getArticle(): void {
    const URI = String(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticle(URI)
      .subscribe(article => this.article = article);
  }
}
