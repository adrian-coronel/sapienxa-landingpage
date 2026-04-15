import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenefitsComponent implements AfterViewInit {
  private el = inject(ElementRef);

  readonly benefits = [
    {
      title: 'Automatización de Procesos RPA',
      description:
        'Eliminamos tareas repetitivas integrando tus sistemas actuales sin reemplazarlos. Más producción, menos fricción operativa.',
      link: '#servicios',
    },
    {
      title: 'Inteligencia Artificial Aplicada',
      description:
        'Entrenamos chatbots, análisis predictivo y CRM inteligente diseñados específicamente para tu industria.',
      link: '#servicios',
    },
    {
      title: 'Crecimiento Escalable',
      description:
        'Construimos infraestructura que crece con tu empresa, sin necesidad de contratar más personal operativo.',
      link: '#servicios',
    },
  ];

  ngAfterViewInit() {
    const cards = this.el.nativeElement.querySelectorAll('.benefit-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card: Element) => observer.observe(card));
  }
}
