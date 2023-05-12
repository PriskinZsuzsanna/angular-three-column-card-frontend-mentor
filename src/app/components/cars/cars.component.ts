import { Component } from '@angular/core';
import {Car} from '../../Car'
import {CARS} from '../../mock-data'


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  cars: Car [] = CARS
}
