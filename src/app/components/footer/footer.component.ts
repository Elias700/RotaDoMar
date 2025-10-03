import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyModalComponent } from '../../components/privacy-modal/privacy-modal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, PrivacyModalComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isPrivacyModalOpen = false;

  openPrivacyModal() {
    this.isPrivacyModalOpen = true;
  }

  closePrivacyModal() {
    this.isPrivacyModalOpen = false;
  }
}
