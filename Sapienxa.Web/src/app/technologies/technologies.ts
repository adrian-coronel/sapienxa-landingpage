import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent {
  private sanitizer = inject(DomSanitizer);

  readonly technologies = [
    { name: 'OpenAI',       icon: 'openai',            color: '#74aa9c' },
    { name: 'LangChain',    icon: 'langchain',         color: '#1C7C4A' },
    { name: 'n8n',          icon: 'n8n',               color: '#ea4b71' },
    { name: 'Make',         icon: 'make',              color: '#6d4aff' },
    { name: 'Python',       icon: 'python',            color: '#3776ab' },
    { name: 'Node.js',      icon: 'nodedotjs',         color: '#339933' },
    { name: 'WhatsApp API', icon: 'whatsapp',          color: '#25d366' },
    { name: 'Zapier',       icon: 'zapier',            color: '#ff4a00' },
    { name: 'HubSpot',      icon: 'hubspot',           color: '#ff7a59' },
    { name: 'AWS',          icon: 'amazonwebservices', color: '#ff9900' },
    { name: 'Google Cloud', icon: 'googlecloud',       color: '#4285f4' },
  ];

  /** Devuelve un SafeStyle con CSS mask coloreado con el color de marca */
  maskStyle(icon: string, color: string): SafeStyle {
    const url = `${CDN}/${icon}.svg`;
    return this.sanitizer.bypassSecurityTrustStyle(
      `background-color:${color};` +
      `mask-image:url(${url});-webkit-mask-image:url(${url});` +
      `mask-size:contain;-webkit-mask-size:contain;` +
      `mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;` +
      `mask-position:center;-webkit-mask-position:center;` +
      `mask-mode:alpha;-webkit-mask-mode:alpha;`
    );
  }
}
