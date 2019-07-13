import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Feedback } from 'src/app/model/Feedback';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-request-card',
  templateUrl: './feedback-request-card.component.html',
  styleUrls: ['./feedback-request-card.component.css']
})
export class FeedbackRequestCardComponent implements OnInit {

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
