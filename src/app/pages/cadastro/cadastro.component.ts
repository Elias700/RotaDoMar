import { Component } from '@angular/core';
import { PrivacyModalComponent } from '../../components/privacy-modal/privacy-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  standalone: true,
  imports: [CommonModule, PrivacyModalComponent], // <--- CommonModule necessário para *ngIf
})
export class CadastroComponent {
  isPrivacyModalOpen = false;

  openPrivacyModal() {
    this.isPrivacyModalOpen = true;
  }

  closePrivacyModal() {
    this.isPrivacyModalOpen = false;
  }
}
