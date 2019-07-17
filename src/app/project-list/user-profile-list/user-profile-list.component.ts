import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/model/User';
import { Feedback } from 'src/app/shared/model/Feedback';


@Component({
  selector: 'app-user-profile-list',
  templateUrl: './user-profile-list.component.html',
  styleUrls: ['./user-profile-list.component.css']
})
export class UserProfileListComponent {

  @Input() model: Map<User, Feedback[]>;
  @Input() showButtons: boolean;
  @Output() reject = new EventEmitter<User>();
  @Output() accept = new EventEmitter<User>();

  onAccept(user: User) {
    this.accept.emit(user);
  }

  onReject(user: User) {
    this.reject.emit(user);
  }

}
