import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/model/User';
import { Feedback } from 'src/app/shared/model/Feedback';


@Component({
  selector: 'app-user-card-panel',
  templateUrl: './user-card-panel.component.html',
  styleUrls: ['./user-card-panel.component.css']
})
export class UserCardPanelComponent {

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
