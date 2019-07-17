import { Component, OnInit, Input } from '@angular/core';
import { Feedback } from 'src/app/shared/model/Feedback';

@Component({
  selector: 'app-user-rating-card',
  templateUrl: './user-rating-card.component.html',
  styleUrls: ['./user-rating-card.component.css']
})
export class UserRatingCardComponent implements OnInit {

  @Input() feedback: Feedback;
  @Input() showDivider: boolean;
  @Input() starCount = 5;

  ratingArr = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  showIcon(index: number) {
    if (this.feedback.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
