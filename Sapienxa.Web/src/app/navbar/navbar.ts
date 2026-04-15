import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
  ElementRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private el = inject(ElementRef);

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    if (this.isMenuOpen() && !this.el.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  readonly navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Casos de Éxito', href: '#casos' },
    { label: 'Tecnologías', href: '#tecnologias' },
    { label: 'Contacto', href: '#contacto' },
  ];
}
