import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  readonly serviceLinks = [
    { label: 'Chatbots IA', href: '#servicios' },
    { label: 'CRM Automatizado', href: '#servicios' },
    { label: 'RPA Empresarial', href: '#servicios' },
    { label: 'Análisis Predictivo', href: '#servicios' },
    { label: 'Integración de Sistemas', href: '#servicios' },
    { label: 'IA Personalizada', href: '#servicios' },
  ];

  readonly companyLinks = [
    { label: 'Sobre nosotros', href: '#inicio' },
    { label: 'Blog', href: '#inicio' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'Proceso de trabajo', href: '#inicio' },
  ];
}
