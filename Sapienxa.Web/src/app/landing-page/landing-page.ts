import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  inject,
} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar';
import { HeroComponent } from '../hero/hero';
import { MetricsComponent } from '../metrics/metrics';
import { BenefitsComponent } from '../benefits/benefits';
import { ServicesComponent } from '../services/services';
import { TechnologiesComponent } from '../technologies/technologies';
import { ProcessComponent } from '../process/process';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { ContactFormComponent } from '../contact-form/contact-form';
import { FooterComponent } from '../footer/footer';
import { WhatsappFloatComponent } from '../whatsapp-float/whatsapp-float';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    HeroComponent,
    MetricsComponent,
    BenefitsComponent,
    ServicesComponent,
    TechnologiesComponent,
    ProcessComponent,
    TestimonialsComponent,
    ContactFormComponent,
    FooterComponent,
    WhatsappFloatComponent,
  ],
})
export class LandingPageComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private revealObserver!: IntersectionObserver;

  ngAfterViewInit() {
    this.revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            this.revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    this.el.nativeElement.querySelectorAll('.reveal').forEach((el: Element) => {
      this.revealObserver.observe(el);
    });
  }

  ngOnDestroy() {
    this.revealObserver?.disconnect();
  }
}
