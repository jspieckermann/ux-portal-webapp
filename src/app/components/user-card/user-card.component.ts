import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

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
