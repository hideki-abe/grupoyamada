import { Component } from '@angular/core';
import { CardServicoComponent } from "../../components/card-servico/card-servico.component";
import { NgForOf, NgIf } from "@angular/common";

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
  services = [
    {
      title: 'Cortes a Laser',
      description: 'Tecnologia de ponta para cortes precisos em diversos materiais com acabamento perfeito.',
      icon: 'fas fa-cut',
      imageUrl: '/assets/fotos/chapa.png',
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
      title: 'Dobras',
      description: 'Conformação de chapas metálicas com precisão para atender suas necessidades específicas.',
      icon: 'fas fa-compress-arrows-alt',
      imageUrl: '/assets/fotos/chapa.png',
      features: [
        'Dobras precisas e uniformes',
        'Diversos ângulos disponíveis',
        'Acabamento profissional',
        'Flexibilidade de projetos'
      ],
      specifications: [
        'Até 12,7mm de espessura',
        'Todos os tipos de materiais',
        'Comprimento até 3000mm'
      ]
    },
    {
      title: 'Cortes com Serra',
      description: 'Serviços especializados de corte para tarugos e trefilados de diversos materiais.',
      icon: 'fas fa-tools',
      imageUrl: '/assets/fotos/chapa.png',
      features: [
        'Cortes retos e precisos',
        'Diversos diâmetros',
        'Acabamento limpo',
        'Produção em série'
      ],
      specifications: [
        'Tarugos e trefilados',
        'Aços 1020, 1045',
        'Cromo níquel'
      ]
    },
    {
      title: 'Projetos Personalizados',
      description: 'Aqui fazemos os projetos do seu jeito em aço carbono, inox e alumínio.',
      icon: 'fas fa-cogs',
      imageUrl: '/assets/fotos/chapa.png',
      features: [
        'Softwares de modelagem avançados',
        'Atendimento especializado',
        'Controle de qualidade',
        'Rapidez na entrega'
      ],
      specifications: [
        '',
        'Processos personalizados',
        'Certificação de qualidade'
      ]
    }

  ];

  scrollToContact() {
    // Scroll to contact section or navigate to contact page
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
