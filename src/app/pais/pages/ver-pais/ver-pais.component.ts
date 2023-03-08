import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from "rxjs/operators";
import { Country, Name } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  pais!:any;

  constructor(private activateRoute: ActivatedRoute,
              private paisService:PaisService
              ){}

  ngOnInit():void{
    this.activateRoute.params
    .pipe(
      switchMap(({countryPais})=>this.paisService.getPaisPorAlpha(countryPais)),
      tap(console.log)
    )
    .subscribe((res)=>{
      this.pais=res;
    });
    // this.activateRoute.params
    // .subscribe(({countryPais})=>{
    //   this.paisService.getPaisPorAlpha(countryPais)
    //   .subscribe(res=>{
    //     console.log(res);
    //       this.pais=res;
    //   });
    // });
  }

}
