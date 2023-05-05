import { Component } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../mock-articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles = ARTICLES;

  selectedArticle?: Article;
  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

}


// {
//   "status": "ok",
//   "message-type": "work-list",
//   "message-version": "1.0.0",
//   "message": {
//     "facets": {},
//     "total-results": 144501287,
//     "items": [
//       {
//         "DOI": "10.1200/jco.2007.25.18_suppl.3507",
//         "title": [
//           "Circulating tumor cells expressing the insulin growth factor-1 receptor (IGF-1R): Method of detection, incidence and potential applications"
//         ]
//       },
//       {
//         "DOI": "10.1111/read.1991.25.issue-1"
//       },
//       {
//         "DOI": "10.1093/ww/9780199540884.013.u52741",
//         "title": [
//           "Boxer, Rear-Adm. Henry Percy, (14 Oct. 1885–30 June 1961)"
//         ]
//       },
//       {
//         "DOI": "10.31838/srp.2020.5.28",
//         "title": [
//           "The Mechanism of Endoplasmic Reticulum Stress and the Cyclin D2 Expression on Ovarian Granulosa Cell Cycle in Infertile Women with Endometriosis"
//         ]
//       },
//       {
//         "DOI": "10.1371/journal.pone.0020476.s005"
//       },
//       {
//         "DOI": "10.2307/j.ctt1tg5gs2.19",
//         "title": [
//           "Notes"
//         ]
//       },
//       {
//         "DOI": "10.1109/elinsl.1996.549297",
//         "title": [
//           "Discrimination of partial discharge electromagnetic signal in SF/sub 6/ gas from external noises using phase gate control method"
//         ]
//       },
//       {
//         "DOI": "10.1163/2214-871x_ei1_sim_5628",
//         "title": [
//           "TAʿIZZ"
//         ]
//       },
//       {
//         "DOI": "10.1016/j.jacc.2017.11.012",
//         "title": [
//           "TMVR With Artificial Cords in the Treatment of Mitral Regurgitation"
//         ]
//       },
//       {
//         "DOI": "10.1111/j.1471-4159.1992.tb08891.x",
//         "title": [
//           "In Vivo Evidence that Lithium Inactivates G<sub>i</sub>Modulation of Adenylate Cyclase in Brain"
//         ]
//       }
//     ],
//     "items-per-page": 10,
//     "query": {
//       "start-index": 0,
//       "search-terms": null
//     }
//   }
// }