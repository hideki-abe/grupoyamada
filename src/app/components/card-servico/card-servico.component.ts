import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, signal } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { VideoService, ServiceVideo, VideoConfig } from '../../services/video.service';
import { Subject, takeUntil } from 'rxjs';

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  videos: VideoConfig;
  poster: string;
}

@Component({
  selector: 'app-card-servico',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardServicoComponent implements OnInit, OnDestroy {
  
  services = signal<ServiceCard[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  
  private readonly destroy$ = new Subject<void>();
  
  // Service configuration with type safety
  private readonly serviceConfigs: ReadonlyArray<Omit<ServiceCard, 'videos' | 'poster'>> = [
    {
      id: 'corte-laser',
      title: 'Cortes a Laser',
      description: 'Cortes a laser em até 1" (1 polegada - 25mm) nas chapas de ferro, alumínio e inox.'
    },
    {
      id: 'dobra',
      title: 'Dobras',
      description: 'Dobras nas chapas de até #1/2\' (meia polegada), ou 12,7 milímetros em todos os tipos de materiais.'
    },
    {
      id: 'serra',
      title: 'Serra',
      description: 'Realizamos serviços de cortes de tarugos e trefilados 1020, 1045 e cromo níquel.'
    }
  ];

  constructor(
    private readonly router: Router,
    private readonly videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.initializeServices();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeServices(): void {
    try {
      const videoConfigs = this.videoService.getAllVideoConfigs();
      
      const services = this.serviceConfigs.map(config => {
        const videoConfig = videoConfigs[config.id];
        
        if (!videoConfig) {
          console.warn(`Video configuration not found for service: ${config.id}`);
          throw new Error(`Missing video configuration for ${config.id}`);
        }
        
        return {
          ...config,
          videos: videoConfig,
          poster: videoConfig.poster || '/assets/fotos/placeholder.jpg'
        };
      });
      
      this.services.set(services);
      this.isLoading.set(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load services';
      this.error.set(errorMessage);
      this.isLoading.set(false);
      console.error('Error initializing services:', err);
    }
  }

  async navigateToServices(): Promise<void> {
    try {
      const success = await this.router.navigate(['/servicos']);
      
      if (success) {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
        
        this.announceNavigation('Navegando para página de serviços');
      }
    } catch (error) {
      console.error('Navigation error:', error);
      this.error.set('Erro ao navegar. Por favor, tente novamente.');
    }
  }

  trackByServiceId(index: number, service: ServiceCard): string {
    return service.id;
  }

  private announceNavigation(message: string): void {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 1000);
  }

  onCardKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.navigateToServices();
    }
  }

  onCardClick(event: MouseEvent): void {
    event.preventDefault();
    this.navigateToServices();
  }
}