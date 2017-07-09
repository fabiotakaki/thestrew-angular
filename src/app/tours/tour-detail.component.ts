import { Component, Input } from '@angular/core';
import { Tour } from './tour';
@Component({
  selector: 'tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent {
  @Input() tour:Tour;

  deleteWaypoint(index:number){
    this.tour.waypoints.splice(index, 1);
  }
}
