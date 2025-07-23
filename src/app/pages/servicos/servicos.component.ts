import { Component } from '@angular/core';
import { CardServicoComponent } from "../../components/card-servico/card-servico.component";
import { NgForOf, NgIf } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-servicos',
  standalone: true,
    imports: [
    CardServicoComponent,
    NgForOf,
    NgIf
],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {
  constructor(private router: Router) {}

  services = [
    {
      title: 'Cortes a Laser',
      description: 'Tecnologia de ponta para cortes precisos em diversos materiais com acabamento perfeito.',
      icon: 'fas fa-bolt',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/laser.webp?alt=media&token=23ecc6af-c1d7-4b65-af0e-a4d562a7eeb0',
      features: [
        'Alta precisão e qualidade',
        'Cortes complexos e detalhados',
        'Acabamento superior',
        'Rapidez na execução'
      ],
      specifications: [
        'Até 25mm de espessura',
        'Ferro, alumínio e inox',
        'Tolerância ±0,1mm'
      ]
    },
    {
      title: 'Dobras e Calandras',
      description: 'Conformação de chapas metálicas com precisão para atender suas necessidades específicas.',
      icon: 'fas fa-drafting-compass',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/dobra.webp?alt=media&token=c0bb2a30-1f83-4a4f-86fb-7c5f0d95b198',
      features: [
        'Dobras e calandras precisas e uniformes',
        'Diversos ângulos disponíveis',
        'Acabamento profissional',
        'Flexibilidade de projetos'
      ],
      specifications: [
        'Até 12,7mm de espessura',
        'Comprimento até 3000mm'
      ]
    },
    {
      title: 'Cortes com Serra',
      description: 'Serviços especializados de corte para tarugos e trefilados de diversos materiais.',
      icon: 'fas fa-cog',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/serra.webp?alt=media&token=225653bf-931e-4f5e-8b3d-b136aff95da6',
      features: [
        'Cortes retos e precisos',
        'Variedade de materiais',
        'Acabamento limpo',
        'Produção em série'
      ],
      specifications: [
        'Tarugos, tubos e trefilados',
        'Aços 1020, 1045',
        'Cromo níquel'
      ]
    },
    {
      title: 'Projetos Personalizados',
      description: 'Aqui fazemos os projetos do seu jeito em aço carbono, inox e alumínio.',
      icon: 'fas fa-desktop',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/chapas.webp?alt=media&token=4ce04a2f-b410-42d7-b848-7686bee5e46d',
      features: [
        'Softwares de modelagem avançados',
        'Atendimento especializado',
        'Controle de qualidade',
        'Rapidez na entrega'
      ],
      specifications: [
        'Processos personalizados',
        'Certificação de qualidade'
      ]
    },
    {
      title: 'Soluções em Inox e Alumínio',
      description: 'Oferecemos estruturas, peças e componentes em inox e alumínio para diversos fins, como: bancadas em inox, roscas sem fim, estruturas em geral, entre outros.',
      icon: 'fas fa-cubes',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/inox.webp?alt=media&token=2e28839a-1319-4e5a-a9eb-43e54ec8ed31',
      features: [
        'Corte e dobra de inox e alumínio',
        'Acabamentos com solda e polimento',
        'Serviço personalizado',
        'Rapidez na entrega'
      ],
      specifications: [
        'Diversos tipos de materiais',
        'Processos personalizados',
        'Certificação de qualidade'
      ]
    }

  ];

  scrollToContact() {
      this.router.navigate(['/sobre']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
