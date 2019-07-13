import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.css']
})
export class UserProfileCardComponent {

  @Input() user: User;
  @Input() showButtons: boolean;
  @Output() reject = new EventEmitter<User>();
  @Output() accept = new EventEmitter<User>();

  onReject() {
    this.reject.emit(this.user);
  }

  onAccept() {
    this.accept.emit(this.user);
  }

}
