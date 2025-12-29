import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Papa } from "ngx-papaparse";
import { Router } from "@angular/router";

interface ProductType {
  key: string;
  label: string;
  csvFilePath: string;
  imgSrc: string;
  description: string;
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  csvData = signal<any[]>([]);
  headerRow = signal<string[]>([]);
  searchTerm = signal<string>('');
  isLoading = signal<boolean>(false);

  readonly productTypes: ReadonlyArray<ProductType> = [
    {
      key: 'ferros_chatos',
      label: 'Ferros Chatos',
      csvFilePath: '/assets/csv/barra_chata.csv',
      imgSrc: '/assets/fotos/webp/chatos-produtos.webp',
      description: ''
    },
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
      key: 'tubos_industriais',
      label: 'Tubos Industriais',
      csvFilePath: '/assets/csv/tubosindustriais.csv',
      imgSrc: '/assets/fotos/webp/tubos-produto.webp',
      description: ''
    },
    {
      key: 'tubos_schedule',
      label: 'Tubos Schedule',
      csvFilePath: '/assets/csv/tubosschedule.csv',
      imgSrc: '/assets/fotos/webp/tubos-produto.webp',
      description: ''
    },
    {
      key: 'tubos_din',
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
    }
  ];

  selectedProductType = signal<ProductType>(this.productTypes[0]);

  filteredData = computed(() => {
    const data = this.csvData();
    const term = this.searchTerm().toLowerCase().trim();
    
    if (!term) return data;
    
    return data.filter(row => {
      return Object.values(row).some(value => 
        String(value).toLowerCase().includes(term)
      );
    });
  });

  constructor(
    private readonly papa: Papa,
    private readonly router: Router
  ) {
    this.parseCsv(this.selectedProductType().csvFilePath);
  }

  selectProductType(item: ProductType): void {
    if (item.key === this.selectedProductType().key) return;
    
    this.isLoading.set(true);
    this.searchTerm.set('');
    
    setTimeout(() => {
      this.selectedProductType.set(item);
      this.parseCsv(item.csvFilePath);
    }, 300);
  }

  parseCsv(path: string): void {
    this.csvData.set([]);
    this.headerRow.set([]);
    
    const options = {
      delimiter: ',',
      header: true,
      skipEmptyLines: true,
      download: true,
      encoding: 'utf-8',
      transformHeader: (header: string) => {
        return header.replace(/^\uFEFF/, '').replace(/^"|"$/g, '').trim();
      },
      complete: (results: any) => {
        this.headerRow.set(results.meta.fields);
        this.csvData.set(results.data);
        this.isLoading.set(false);
      },
      error: (error: any) => {
        console.error('Error parsing CSV:', error);
        this.isLoading.set(false);
      }
    };
    
    this.papa.parse(path, options);
  }

  getShapeSymbol(formato: string): string {
    if (!formato) return '';
    const formatoLower = formato.toLowerCase();
    
    if (formatoLower.includes('redondo')) return '●';
    if (formatoLower.includes('quadrado')) return '■';
    if (formatoLower.includes('sextavado')) return '⬢';
    
    return formato;
  }

  getShapeClass(formato: string): string {
    if (!formato) return '';
    const formatoLower = formato.toLowerCase();
    
    if (formatoLower.includes('redondo')) return 'shape-circle';
    if (formatoLower.includes('quadrado')) return 'shape-square';
    if (formatoLower.includes('sextavado')) return 'shape-hexagon';
    
    return '';
  }

  onSearchChange(value: string): void {
    this.searchTerm.set(value);
  }

  clearSearch(): void {
    this.searchTerm.set('');
  }

  scrollToContact(): void {
    this.router.navigate(['/sobre']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}