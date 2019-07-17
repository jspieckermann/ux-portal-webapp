import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Feedback } from 'src/app/shared/model/Feedback';

@Component({
  selector: 'app-user-rating-request-card',
  templateUrl: './user-rating-request-card.component.html',
  styleUrls: ['./user-rating-request-card.component.css']
})
export class UserRatingRequestCardComponent implements OnInit {

  @Input()
  feedback: Feedback;
  @Output()
  submitFeedback: EventEmitter<Feedback> = new EventEmitter<Feedback>();

  form: FormGroup;
  rating = 3;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      comment: ['', '']
    });
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
  }

  submit() {
    this.feedback.rating = this.rating;
    this.feedback.comment = this.form.controls.comment.value;
    this.submitFeedback.emit(this.feedback);
  }

}
