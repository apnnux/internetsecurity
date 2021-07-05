import { Component } from '@angular/core';

import { QuestionService } from './services/question.service';
import { QuestionBase } from './controls/question-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Ciao Mondo</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `,
  providers: [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
  title = 'dynamic-form';
}
