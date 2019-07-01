import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  
  articulos: any[] = [];

  constructor( private articulosService: ArticulosService) {
    
   }

  ngOnInit() {
    this.articulos = this.articulosService.getArticulos();
    console.log(this.articulos);
    
  }

}
