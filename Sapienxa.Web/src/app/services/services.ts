import {
  Component,
  ChangeDetectionStrategy,
  signal,
  AfterViewInit,
  ElementRef,
  inject,
} from '@angular/core';

interface Service {
  id: string;
  title: string;
  description: string;
  result: string;
  category: 'ia' | 'automatizacion' | 'integracion';
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements AfterViewInit {
  private el = inject(ElementRef);

  activeTab = signal<string>('todos');

  readonly tabs = [
    { id: 'todos', label: 'Todos' },
    { id: 'ia', label: 'Inteligencia Artificial' },
    { id: 'automatizacion', label: 'Automatización' },
    { id: 'integracion', label: 'Integración' },
  ];

  readonly services: Service[] = [
    {
      id: 'chatbots',
      title: 'Chatbots IA',
      description: 'Atención 24/7 en WhatsApp y web.',
      result: 'Reduce hasta 60% las consultas manuales.',
      category: 'ia',
    },
    {
      id: 'crm',
      title: 'CRM Automatizado',
      description: 'Seguimiento de leads y pipeline inteligente.',
      result: 'Cierra más negocios con menos esfuerzo.',
      category: 'automatizacion',
    },
    {
      id: 'rpa',
      title: 'RPA Empresarial',
      description: 'Bots para facturación, reportes y RRHH.',
      result: 'Recupera 20+ horas semanales de tu equipo.',
      category: 'automatizacion',
    },
    {
      id: 'analytics',
      title: 'Análisis Predictivo',
      description: 'Dashboards en tiempo real, decisiones con datos.',
      result: 'Anticipa tendencias antes que tu competencia.',
      category: 'ia',
    },
    {
      id: 'integracion',
      title: 'Integración de Sistemas',
      description: 'Conectamos ERP, CRM, ecommerce y más.',
      result: 'Un ecosistema digital unificado y eficiente.',
      category: 'integracion',
    },
    {
      id: 'ia-custom',
      title: 'IA Personalizada',
      description: 'Modelos entrenados para tu industria específica.',
      result: 'Ventaja competitiva real desde el primer mes.',
      category: 'ia',
    },
  ];

  get filtered() {
    const tab = this.activeTab();
    return tab === 'todos' ? this.services : this.services.filter(s => s.category === tab);
  }

  setTab(id: string) {
    this.activeTab.set(id);
    // After Angular re-renders the filtered cards, immediately make them visible
    setTimeout(() => {
      this.el.nativeElement.querySelectorAll('.service-card.reveal:not(.in)').forEach(
        (el: Element) => el.classList.add('in')
      );
    }, 0);
  }

  ngAfterViewInit() {
    // Cards in view on load are handled by the global reveal observer in LandingPageComponent.
    // Nothing additional needed here.
  }
}
