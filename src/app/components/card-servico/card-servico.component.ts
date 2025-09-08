import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { VideoService, ServiceVideo } from '../../services/video.service';

@Component({
  selector: 'app-card-servico',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent implements OnInit, AfterViewInit {
  
  services: ServiceVideo[] = [];
  private loadedVideos = new Set<string>();
  private totalVideos = 0;
  private allVideosLoaded = false;

  constructor(
    private router: Router,
    private videoService: VideoService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.initializeServices();
    this.totalVideos = this.services.length;
    
    // Verifica se funcionalidades essenciais estão disponíveis
    this.checkBrowserSupport();
  }

  private checkBrowserSupport() {
    // Se IntersectionObserver não estiver disponível, força exibição imediata
    if (typeof IntersectionObserver === 'undefined') {
      console.warn('IntersectionObserver não suportado. Forçando exibição de vídeos.');
      setTimeout(() => {
        this.forceShowAllVideos();
      }, 1000);
      return;
    }
    
    // Se setTimeout não funcionar, também força exibição
    try {
      setTimeout(() => {}, 0);
    } catch (error) {
      console.warn('setTimeout não funciona. Forçando exibição imediata.');
      this.forceShowAllVideos();
    }
  }

  ngAfterViewInit() {
    // Adiciona classe para indicar que JavaScript está funcionando
    const container = this.elementRef.nativeElement.querySelector('.container');
    if (container) {
      container.classList.add('js-enabled');
    }
    
    this.setupLazyVideoLoading();
    
    // Timeout de segurança: se após 8 segundos nem todos vídeos carregaram, força a exibição
    setTimeout(() => {
      if (!this.allVideosLoaded) {
        console.warn('Timeout: Forçando exibição dos vídeos após 8 segundos');
        this.allVideosLoaded = true;
        this.showAllVideosSimultaneously();
      }
    }, 8000);
  }

  private setupLazyVideoLoading() {
    const videos = this.elementRef.nativeElement.querySelectorAll('video[data-src]');
    
    videos.forEach((video: HTMLVideoElement) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sourceUrl = video.getAttribute('data-src');
            if (sourceUrl) {
              video.src = sourceUrl;
              video.load(); // Inicia o carregamento do vídeo
            }
            observer.unobserve(video); // Para de observar após carregar
          }
        });
      }, { 
        threshold: 0.1, // Começa a carregar quando 10% está visível
        rootMargin: '100px' // Começa 100px ANTES de entrar na tela
      });

      observer.observe(video);
    });
  }

  private initializeServices() {
    const videoConfigs = this.videoService.getAllVideoConfigs();
    
    this.services = [
      {
        id: 'corte-laser',
        title: 'Cortes a Laser',
        description: 'Cortes a laser em até 1"(1 polegada - 25mm) nas chapas de ferro, alumínio e inox.',
        videos: videoConfigs['corte-laser'],
        poster: videoConfigs['corte-laser'].poster
      },
      {
        id: 'dobra',
        title: 'Dobras',
        description: 'Dobras nas chapas de até #1/2\' (meia polegada), ou 12,7 milímetros em todos os tipos de materiais.',
        videos: videoConfigs['dobra'],
        poster: videoConfigs['dobra'].poster
      },
      {
        id: 'serra',
        title: 'Serra',
        description: 'Realizamos serviços de cortes de tarugos e trefilados 1020, 1045 e cromo níquel.',
        videos: videoConfigs['serra'],
        poster: videoConfigs['serra'].poster
      }
    ];
  }

  navigateToServices() {
    this.router.navigate(['/servicos']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  onVideoError(event: any, service: ServiceVideo) {
    console.warn(`Video failed to load for ${service.title}:`, event);
    const videoElement = event.target as HTMLVideoElement;
    
    // Adiciona ao conjunto mesmo com erro para não travar a sincronização
    this.loadedVideos.add(service.id);
    
    videoElement.style.display = 'none';
    
    if (service.poster) {
      const posterImg = videoElement.parentElement?.querySelector('img');
      if (posterImg) {
        posterImg.style.display = 'block';
      }
    }
    
    // Verifica se todos os vídeos foram processados (carregados ou com erro)
    if (this.loadedVideos.size === this.totalVideos && !this.allVideosLoaded) {
      this.allVideosLoaded = true;
      this.showAllVideosSimultaneously();
    }
  }

  onVideoLoaded(event: any, service: ServiceVideo) {
    console.log(`Video loaded successfully for ${service.title}`);
    const videoElement = event.target as HTMLVideoElement;
    
    // Adiciona o vídeo ao conjunto de vídeos carregados
    this.loadedVideos.add(service.id);
    
    // Verifica se todos os vídeos foram carregados
    if (this.loadedVideos.size === this.totalVideos && !this.allVideosLoaded) {
      this.allVideosLoaded = true;
      this.showAllVideosSimultaneously();
    }
  }

  onVideoCanPlay(event: any) {
    const videoElement = event.target as HTMLVideoElement;
    // Não mostra o vídeo imediatamente, aguarda sincronização
  }

  private showAllVideosSimultaneously() {
    // Aguarda um pequeno delay para garantir que todos os vídeos estão prontos
    setTimeout(() => {
      const videos = this.elementRef.nativeElement.querySelectorAll('video[data-src]');
      
      videos.forEach((video: HTMLVideoElement) => {
        // Marca como carregado e mostra com transição suave
        video.setAttribute('data-loaded', 'true');
        video.style.opacity = '1';
        
        // Inicia reprodução
        video.play().catch(error => {
          console.warn("Autoplay foi bloqueado pelo navegador:", error);
        });
      });
      
      console.log('Todos os vídeos foram sincronizados e estão sendo exibidos simultaneamente');
    }, 300);
  }

  // Método público para forçar exibição (pode ser chamado externamente se necessário)
  public forceShowAllVideos() {
    const videos = this.elementRef.nativeElement.querySelectorAll('video');
    
    videos.forEach((video: HTMLVideoElement) => {
      video.setAttribute('data-loaded', 'true');
      video.style.opacity = '1';
      video.style.transform = 'scale(1)';
      
      // Tenta reproduzir o vídeo
      if (video.src || video.getAttribute('data-src')) {
        video.play().catch(error => {
          console.warn("Não foi possível reproduzir o vídeo:", error);
        });
      }
    });
    
    this.allVideosLoaded = true;
    console.log('Vídeos forçados a aparecer devido a fallback');
  }

  getBestVideoSource(service: ServiceVideo): string {
    return this.videoService.getBestVideoFormat(service.videos);
  }
}
