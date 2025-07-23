import { Injectable } from '@angular/core';

export interface VideoConfig {
  webm?: string;
  mp4: string;
  poster?: string;
}

export interface ServiceVideo {
  id: string;
  title: string;
  description: string;
  videos: VideoConfig;
  poster?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  
  private readonly basePath = '/assets/videos/';
  private readonly baseImagePath = '/assets/fotos/';

  // Configuration for all videos
  private videoConfigs: Record<string, VideoConfig> = {
    'corte-laser': {
      webm: `https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/corte-laser.webm?alt=media&token=a7fc23f4-4892-4692-ba0a-caf96f4c8841`,
      mp4: ``,
      poster: `${this.baseImagePath}laser.jpg`
    },
    'dobra': {
      webm: `https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/dobra.webm?alt=media&token=ed45a1c5-ab3a-414f-b5cf-02f614e0bee9`,
      mp4: ``,
      poster: `${this.baseImagePath}dobra.jpg`
    },
    'serra': {
			webm: `https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/serra.webm?alt=media&token=fa602c43-1378-44e5-9d7d-815cf066b082`,
      mp4: ``,
      poster: `${this.baseImagePath}serra.jpg`
    }
  };

  getVideoConfig(videoId: string): VideoConfig | null {
    return this.videoConfigs[videoId] || null;
  }

  getAllVideoConfigs(): Record<string, VideoConfig> {
    return this.videoConfigs;
  }

  // Check if video format is supported
  isVideoFormatSupported(format: 'webm' | 'mp4'): boolean {
    const video = document.createElement('video');
    const mimeTypes = {
      webm: 'video/webm; codecs="vp9"',
      mp4: 'video/mp4; codecs="avc1.42E01E"'
    };
    
    return video.canPlayType(mimeTypes[format]) === 'probably' || 
           video.canPlayType(mimeTypes[format]) === 'maybe';
  }

  // Get the best video format for the current browser
  getBestVideoFormat(config: VideoConfig): string {
    if (config.webm && this.isVideoFormatSupported('webm')) {
      return config.webm;
    }
    return config.mp4;
  }

  // Preload video
  preloadVideo(videoSrc: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadeddata = () => resolve();
      video.onerror = () => reject(new Error(`Failed to preload video: ${videoSrc}`));
      video.src = videoSrc;
    });
  }
}
