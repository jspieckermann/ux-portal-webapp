import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';
import { Feedback } from 'src/app/model/Feedback';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})
export class UserProfileCardComponent {

  @Input() user: User;
  @Input() feedback: Feedback[];
  @Input() showButtons: boolean;
  @Output() reject = new EventEmitter<User>();
  @Output() accept = new EventEmitter<User>();

  onReject() {
    this.reject.emit(this.user);
  }

  onAccept() {
    this.accept.emit(this.user);
  }

  getRating(): string {
    const rating = (this.feedback.reduce((sum, entry) => sum + entry.rating, 0) / this.feedback.length).toFixed(2);
    return rating + ' / ' + 5 + '   (' + this.feedback.length + ' Bewertungen)';
  }

}
