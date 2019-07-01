import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private articulos: any[] = [
    { nombre: 'Outfit verano',
    descripcion: 'Jeans casuales para un estilo de verano',
    img: 'assets/img/clothes01.jpg',
    precio: '$44.50',
    marca: 'Calvin Klein'
    },
    {
    nombre: 'Outfit verano 2',
    descripcion: 'Jeans casuales para un estilo de verano',
    img: 'assets/img/clothes02.jpg',
    precio: '$44.50',
    marca: 'Calvin Klein'
    },
    
    {
    nombre: 'Outfit verano 3',
    descripcion: 'Jeans casuales para un estilo de verano',
    img: 'assets/img/clothes03.jpg',
    precio: '$44.50',
    marca: 'Calvin Klein'
    },
    {
    nombre: 'Outfit verano 4',
    descripcion: 'Jeans casuales para un estilo de verano',
    img: 'assets/img/clothes04.jpg',
    precio: '$44.50',
    marca: 'Calvin Klein'
    }
    ];
    
  
    getArticulos() {
    return this.articulos;
  
  }
}
