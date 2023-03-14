import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ECarsData } from 'src/app/interfaces/ecars-data';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-rank-of-cars',
  templateUrl: './rank-of-cars.component.html',
  styleUrls: ['./rank-of-cars.component.css']
})
export class RankOfCarsComponent {

  cars$: Observable<ECarsData[]> | undefined;

  _carService = new CarServiceService();

  constructor(private carService: CarServiceService) {
      this._carService = carService;
  }

  onClick(){
    this.cars$ = this._carService.emitCars();
  }

}
