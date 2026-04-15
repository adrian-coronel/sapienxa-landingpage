import {
  Component,
  ChangeDetectionStrategy,
  signal,
  AfterViewInit,
  ElementRef,
  inject,
} from '@angular/core';

interface Metric {
  prefix: string;
  end: number;
  suffix: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.html',
  styleUrl: './metrics.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsComponent implements AfterViewInit {
  private el = inject(ElementRef);

  readonly metrics: Metric[] = [
    { prefix: '+', end: 120, suffix: '', label: 'empresas', description: 'Clientes activos en Latam' },
    { prefix: '', end: 70, suffix: '%', label: 'reducción', description: 'de tiempo operativo recuperado' },
    { prefix: '', end: 3, suffix: 'x', label: 'ROI promedio', description: 'en los primeros 6 meses' },
    { prefix: '', end: 48, suffix: 'h', label: 'implementación', description: 'Tiempo promedio de onboarding' },
  ];

  displayed = signal(this.metrics.map(m => `${m.prefix}0${m.suffix}`));

  ngAfterViewInit() {
    const el: HTMLElement = this.el.nativeElement;
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          this.animateAll();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
  }

  private animateAll() {
    this.metrics.forEach((m, i) => {
      this.animateCounter(m, i, 1800);
    });
  }

  private animateCounter(m: Metric, index: number, duration: number) {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * m.end);
      this.displayed.update(arr => {
        const copy = [...arr];
        copy[index] = `${m.prefix}${value}${m.suffix}`;
        return copy;
      });
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
