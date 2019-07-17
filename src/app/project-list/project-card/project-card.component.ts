import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/shared/model/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {

  @Input() project: Project;
  @Input() compact: boolean;

  @Input() applyApplicationButton: boolean;
  @Input() withdrawApplicationButton: boolean;
  @Input() clientProfileButton: boolean;
  @Input() candidateProfilesButton: boolean;
  @Input() contractorProfileButton: boolean;
  @Input() editButton: boolean;
  @Input() completeButton: boolean;
  @Input() candidatesStatusIcon: boolean;
  @Input() contractStatusIcon: boolean;
  @Input() completedStatusIcon: boolean;

  @Output() details = new EventEmitter<void>();
  @Output() applyApplication = new EventEmitter<void>();
  @Output() withdrawApplication = new EventEmitter<void>();
  @Output() clientProfile = new EventEmitter<void>();
  @Output() candidateProfiles = new EventEmitter<void>();
  @Output() contractorProfile = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() completion = new EventEmitter<void>();

  constructor() { }

  getShortDescription(description: string): string {
    if (description.length > 400) {
      return description.substring(0, 400) + '...';
    }
    return description;
  }

  onApplyApplication() {
    this.applyApplication.emit();
  }

  onWithdrawApplication() {
    this.withdrawApplication.emit();
  }

  onClientProfile() {
    this.clientProfile.emit();
  }

  onCandidateProfiles() {
    this.candidateProfiles.emit();
  }

  onContractorProfile() {
    this.contractorProfile.emit();
  }

  onEdit() {
    this.edit.emit();
  }

  onCompletion() {
    console.log('completion called on card');
    this.completion.emit();
  }

  onDetails() {
    this.details.emit();
  }

}

