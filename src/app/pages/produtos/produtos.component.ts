import { Component } from '@angular/core';
import {ProdutoComponent} from "../../components/produto/produto.component";
import {Produto} from "../../interfaces/produto";
import {NgForOf, NgIf, NgClass} from "@angular/common";
import {Papa} from "ngx-papaparse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ProdutoComponent,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  csvData: any[] = [];
  headerRow: any[] = [];

  productTypes = [
    {
      key: 'cantoneiras',
      label: 'Cantoneiras',
      csvFilePath: '/assets/csv/cantoneiras.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/cantoneiras.webp?alt=media&token=86eaa450-ec4c-453a-a5d6-38fbc1c551be',
      description: ''  
    },
    {
      key: 'vigas',
      label: 'Vigas',
      csvFilePath: '/assets/csv/vigas.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigas.webp?alt=media&token=bb03c63a-ad18-4b03-8561-3b58d72c3e06',
      description: ''
    },
    {
      key: 'trefilados',
      label: 'Trefilados',
      csvFilePath: '/assets/csv/trefilados.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/trefilados.webp?alt=media&token=d6626f09-0cef-4077-a919-51128e997829',
      description: ''
    },
    {
      key: 'chapas',
      label: 'Chapas',
      csvFilePath: '/assets/csv/chapas.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/chapas.webp?alt=media&token=4ce04a2f-b410-42d7-b848-7686bee5e46d',
      description: ''
    },
    {
      key: 'tubos',
      label: 'Tubos',
      csvFilePath: '/assets/csv/tubos.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/tubos.webp?alt=media&token=4342563a-1d52-4d78-a3c0-ba42b25d305a',
      description: ''
    },
    {
      key: 'ferros_fundidos',
      label: 'Ferros Fundidos',
      csvFilePath: '/assets/csv/ferros_fundidos.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/fundidos.webp?alt=media&token=5eb82ae2-39f8-410a-b5d0-b920066fa20f',
      description: ''
    },
    {
      key: 'ferros_chatos',
      label: 'Ferros Chatos',
      csvFilePath: '/assets/csv/barra_chata.csv',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/fc.webp?alt=media&token=c9a34085-667d-4259-9d88-d85ff0d12b7f',
      description: ''
    }
  ];

  selectedProductType = this.productTypes[this.productTypes.length - 1]; // Default: Ferros Chatos

  onInit() {
    console.log("Initializing component: ", this.csvData.at(0));
  }

  constructor(private papa: Papa, private router: Router) {
    this.parseCsv(this.selectedProductType.csvFilePath);
  }

  selectProductType(item: any) {
    if (item.key === this.selectedProductType.key) {
      // Already selected, do nothing
      return;
    }
    // Fade out current content
    this.fadeOutTableAndImage(() => {
      this.selectedProductType = item;
      this.parseCsv(item.csvFilePath);
      setTimeout(() => {
        this.fadeInTableAndImage();
      }, 350); // 350ms delay for transition
    });
  }

  fadeOutTableAndImage(callback: () => void) {
    const tableRow = document.querySelector('.table-row');
    if (tableRow) {
      (tableRow as HTMLElement).style.opacity = '0';
      setTimeout(callback, 350);
    } else {
      callback();
    }
  }

  fadeInTableAndImage() {
    const tableRow = document.querySelector('.table-row');
    if (tableRow) {
      (tableRow as HTMLElement).style.opacity = '1';
    }
  }

  parseCsv(path: string) {
    this.csvData = [];
    this.headerRow = [];
    let options = {
      delimiter: ',',
      header: true,
      skipEmptyLines: true,
      download: true,
      encoding: 'utf-8',
      transformHeader: (header: string) => {
        return header.replace(/^\uFEFF/, '').replace(/^"|"$/g, '').trim();
      },
      complete: (results: any, file: any) => {
        this.headerRow = results.meta.fields;
        this.csvData = results.data;
      }
    };
    this.papa.parse(path, options);
  }

  getFormattedDescription() {
    if (!this.selectedProductType.description) {
      return [];
    }
    
    // Split by periods or common patterns like "AR350:", "MR250:", etc.
    const parts = this.selectedProductType.description.split(/(?=[A-Z]{2,}\d+:)/);
    
    return parts
      .filter(part => part.trim().length > 0)
      .map(part => {
        const colonIndex = part.indexOf(':');
        if (colonIndex > 0) {
          return {
            type: part.substring(0, colonIndex).trim(),
            text: part.substring(colonIndex + 1).trim().replace(/\.$/, '')
          };
        }
        return {
          type: '',
          text: part.trim().replace(/\.$/, '')
        };
      });
  }

  getShapeSymbol(formato: string): string {
    if (!formato) return '';
    
    const formatoLower = formato.toLowerCase();
    
    if (formatoLower.includes('redondo')) {
      return '●';
    } else if (formatoLower.includes('quadrado')) {
      return '■';
    } else if (formatoLower.includes('sextavado')) {
      return '⬢';
    }
    
    return formato; // Return original text if no match
  }

  getShapeClass(formato: string): string {
    if (!formato) return '';
    
    const formatoLower = formato.toLowerCase();
    
    if (formatoLower.includes('redondo')) {
      return 'shape-circle';
    } else if (formatoLower.includes('quadrado')) {
      return 'shape-square';
    } else if (formatoLower.includes('sextavado')) {
      return 'shape-hexagon';
    }
    
    return '';
  }

  scrollToContact() {
    this.router.navigate(['/sobre']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  }
}
