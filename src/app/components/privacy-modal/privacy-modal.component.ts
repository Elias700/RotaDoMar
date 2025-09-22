import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-modal.component.html',
  styleUrls: ['./privacy-modal.component.css'],
})
export class PrivacyModalComponent {
  // Emite o evento 'close' para que o componente pai (Cadastro) possa fechar o modal
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}