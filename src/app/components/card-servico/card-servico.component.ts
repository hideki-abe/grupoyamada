import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { VideoService, ServiceVideo } from '../../services/video.service';

@Component({
  selector: 'app-card-servico',
  standalone: true,
  imports: [],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent implements OnInit {
  
  services: ServiceVideo[] = [];

  constructor(
    private router: Router,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.initializeServices();
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

  // Handle video loading errors
  onVideoError(event: any, service: ServiceVideo) {
    console.warn(`Video failed to load for ${service.title}:`, event);
    // You could implement fallback logic here
    const videoElement = event.target as HTMLVideoElement;
    videoElement.style.display = 'none';
    
    // Show poster image instead
    if (service.poster) {
      const posterImg = videoElement.parentElement?.querySelector('img');
      if (posterImg) {
        posterImg.style.display = 'block';
      }
    }
  }

  // Handle video loaded successfully
  onVideoLoaded(event: any, service: ServiceVideo) {
    console.log(`Video loaded successfully for ${service.title}`);
    const videoElement = event.target as HTMLVideoElement;
    videoElement.setAttribute('data-loaded', 'true');
  }

  // Get the best video source for current browser
  getBestVideoSource(service: ServiceVideo): string {
    return this.videoService.getBestVideoFormat(service.videos);
  }
}
