import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  readonly testimonials: Testimonial[] = [
    {
      quote:
        'Automatizamos nuestro proceso de facturación y redujimos 15 horas semanales de trabajo manual. El ROI fue visible desde el primer mes.',
      author: 'Ana Martínez',
      role: 'CEO',
      company: 'LogiPyme S.A.C.',
      rating: 5,
    },
    {
      quote:
        'El chatbot de ventas de Sapienxa generó 40% más cierres en el primer mes. Ahora atendemos 200 consultas diarias sin contratar a nadie más.',
      author: 'Carlos Ríos',
      role: 'Director Comercial',
      company: 'InnovaRetail',
      rating: 5,
    },
    {
      quote:
        'La integración de sistemas que necesitábamos hace años, lista en 2 días. Conectaron nuestro ERP con el CRM sin interrumpir operaciones.',
      author: 'María Torres',
      role: 'Gerente TI',
      company: 'FinGroup Perú',
      rating: 5,
    },
  ];

  currentIndex = signal(0);
  isPaused = false;
  private interval?: ReturnType<typeof setInterval>;

  readonly stars = [1, 2, 3, 4, 5];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  private startAutoplay() {
    this.interval = setInterval(() => {
      if (!this.isPaused) {
        this.currentIndex.update(i => (i + 1) % this.testimonials.length);
      }
    }, 4500);
  }

  private stopAutoplay() {
    if (this.interval) clearInterval(this.interval);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }

  pause() { this.isPaused = true; }
  resume() { this.isPaused = false; }

  @HostListener('keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
    if (e.key === 'ArrowRight') this.currentIndex.update(i => (i + 1) % this.testimonials.length);
  }
}
