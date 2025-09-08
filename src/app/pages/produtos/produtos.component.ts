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
      imgSrc: '/assets/fotos/webp/cantoneiras-produto.webp',
      description: ''  
    },
    {
      key: 'vigas',
      label: 'Vigas',
      csvFilePath: '/assets/csv/vigas.csv',
      imgSrc: '/assets/fotos/webp/vigas-produto.webp',
      description: ''
    },
    {
      key: 'trefilados',
      label: 'Trefilados',
      csvFilePath: '/assets/csv/trefilados.csv',
      imgSrc: '/assets/fotos/webp/trefilados-produto.webp',
      description: ''
    },
    {
      key: 'chapas',
      label: 'Chapas',
      csvFilePath: '/assets/csv/chapas.csv',
      imgSrc: '/assets/fotos/webp/chapas-produto.webp',
      description: ''
    },
    {
      key: 'tubos industriais',
      label: 'Tubos Industriais',
      csvFilePath: '/assets/csv/tubosindustriais.csv',
      imgSrc: '/assets/fotos/webp/tubos-produto.webp',
      description: ''
    },
    {
      key: 'tubos schedule',
      label: 'Tubos Schedule',
      csvFilePath: '/assets/csv/tubosschedule.csv',
      imgSrc: '/assets/fotos/webp/tubos-produto.webp',
      description: ''
    },
    {
      key: 'Tubos DIN',
      label: 'Tubos DIN',
      csvFilePath: '/assets/csv/tubosdin.csv',
      imgSrc: '/assets/fotos/webp/tubos-produto.webp',
      description: ''
    },
    {
      key: 'ferros_fundidos',
      label: 'Ferros Fundidos',
      csvFilePath: '/assets/csv/ferrosfundidos.csv',
      imgSrc: '',
      description: ''
    },
    {
      key: 'buchas',
      label: 'Buchas',
      csvFilePath: '/assets/csv/buchas.csv',
      imgSrc: '',
      description: 'As medidas internas e externas podem variar em alguns milímetros, confira a disponibilidade do material com os nossos vendedores!'
    },
    {
      key: 'cromo_niquel',
      label: 'Cromo Níquel',
      csvFilePath: '/assets/csv/cromoniquel.csv',
      imgSrc: '',
      description: ''
    },
    {
      key: 'ferros_mecanicos',
      label: 'Ferros Mecânicos',
      csvFilePath: '/assets/csv/ferrosmecanicos.csv',
      imgSrc: '',
      description: ''
    },
    {
      key: 'ferros_chatos',
      label: 'Ferros Chatos',
      csvFilePath: '/assets/csv/barra_chata.csv',
      imgSrc: '/assets/fotos/webp/chatos-produtos.webp',
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
