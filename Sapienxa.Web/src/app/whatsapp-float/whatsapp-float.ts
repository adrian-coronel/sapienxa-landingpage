import {
  Component,
  ChangeDetectionStrategy,
  signal,
  HostListener,
  ElementRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  templateUrl: './whatsapp-float.html',
  styleUrl: './whatsapp-float.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappFloatComponent implements OnInit {
  private el = inject(ElementRef);

  isOpen = signal(false);
  hasPulsed = signal(false);

  ngOnInit() {
    const interacted = sessionStorage.getItem('wa_interacted');
    if (interacted) this.hasPulsed.set(true);
  }

  toggle() {
    this.isOpen.update(v => !v);
    if (!this.hasPulsed()) {
      this.hasPulsed.set(true);
      sessionStorage.setItem('wa_interacted', '1');
    }
  }

  close() {
    this.isOpen.set(false);
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    if (this.isOpen() && !this.el.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  readonly options = [
    {
      icon: '📞',
      label: 'Te llamamos',
      sub: 'En menos de 1 hora',
      href: 'https://wa.me/51980199082?text=Hola%2C%20me%20gustar%C3%ADa%20que%20me%20llamaran%20para%20conocer%20m%C3%A1s%20sobre%20Sapienxa.',
    },
    {
      icon: '💬',
      label: 'Escríbenos por WhatsApp',
      sub: 'Chat en vivo ahora',
      href: 'https://wa.me/51980199082?text=Hola%2C%20quiero%20escribirles%20para%20saber%20m%C3%A1s%20sobre%20Sapienxa.',
    },
    {
      icon: '🎧',
      label: 'Atención al Cliente',
      sub: 'Soporte técnico y ventas',
      href: 'https://wa.me/51980199082?text=Hola%2C%20necesito%20ayuda%20con%20Sapienxa.%20%C2%BFMe%20pueden%20atender%3F',
    },
  ];
}
