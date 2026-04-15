import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.html',
  styleUrl: './process.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent implements AfterViewInit {
  private el = inject(ElementRef);

  readonly steps = [
    {
      number: '01',
      title: 'Entendemos tu negocio',
      description:
        'Realizamos un diagnóstico gratuito de tus procesos actuales para identificar oportunidades de automatización de alto impacto.',
    },
    {
      number: '02',
      title: 'Creamos tu solución a medida',
      description:
        'Diseñamos una hoja de ruta personalizada con las tecnologías exactas que necesitas, sin sobrecostos ni funciones innecesarias.',
    },
    {
      number: '03',
      title: 'Implementamos en tiempo récord',
      description:
        'Desplegamos tu solución en menos de 48 horas. Tu equipo opera el nuevo sistema desde el primer día.',
    },
    {
      number: '04',
      title: 'Optimizamos contigo',
      description:
        'Soporte continuo, monitoreo de métricas y mejoras iterativas para que tu inversión siga creciendo.',
    },
  ];

  ngAfterViewInit() {
    const items = this.el.nativeElement.querySelectorAll('.step');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item: Element) => observer.observe(item));
  }
}
