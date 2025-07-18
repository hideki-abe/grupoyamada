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
      imageUrl: '/assets/fotos/laser.jpg',
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
      imageUrl: '/assets/fotos/dobra.jpg',
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
      imageUrl: '/assets/fotos/chapa.png',
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
      imageUrl: '/assets/fotos/chapa.png',
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
      imageUrl: '/assets/fotos/chapa.png',
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
