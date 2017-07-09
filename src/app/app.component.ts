import { Component } from '@angular/core';
import { Waypoint } from './waypoints/waypoint';
import { Tour } from './tours/tour';

import { TourService } from './tours/tour.service';
import { WaypointService } from './waypoints/waypoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TourService, WaypointService]
})
export class AppComponent {
  title: string = 'Tour App';
  lat:number = 44.182876;
  lng:number = -101.667521;
  waypoints:Waypoint[];
  tours: Tour[];
  selectedTour:Tour;

  constructor(private tourService: TourService, private waypointService: WaypointService) { }

  getWaypoints(): void {
    this.waypointService.getWaypoints().then(waypoints => this.waypoints = waypoints);
  }

  getWTours(): void {
    this.tourService.getTours().then(tours => this.tours = tours);
  }
   
  ngOnInit(): void {
    this.getWaypoints();
    this.getWTours();
  }

  onSelect(tour: Tour): void {
    this.selectedTour = tour;
  }

  mapClicked($event: any) {
    let i = this.waypoints.length;
    this.waypoints.push({
      id: 1,
      name: "New waypoint "+(i+1),
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: '',
      draggable: true
    });
  }

  clickedMarker(name: string) {
    console.log(`clicked the marker: ${name}`)
   }

   deleteWaypoint(index:number){
     this.waypoints.splice(index, 1);
   }

   addWaypoint(w:Waypoint){
     this.selectedTour.waypoints.push(w);
   }

   addTour(){
    this.tours.push({
      id: (this.tours[(this.tours.length-1)].id+1),
      name: "New Tour "+(this.tours.length+1),
      waypoints: []
    });
   }
}
