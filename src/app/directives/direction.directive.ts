import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;

@Directive({
  selector: 'agm-directions'
})
export class DirectionDirective {
  @Input() waypoints;
  waypts:any = [];
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnInit(){
    this.gmapsApi.getNativeMap().then(map => {
      for(var i=1; i<(this.waypoints.length-1); i++){
        this.waypts.push({
          location: new google.maps.LatLng(this.waypoints[i].lat,this.waypoints[i].lng),
          stopover: true
         });
      }

      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true});
      directionsDisplay.setMap(map);
      directionsService.route({
              origin: {lat: this.waypoints[0].lat, lng: this.waypoints[0].lng},
              destination: {lat: this.waypoints[(this.waypoints.length-1)].lat, lng: this.waypoints[(this.waypoints.length-1)].lng},
              waypoints: this.waypts,
              optimizeWaypoints: true,
              travelMode: 'DRIVING'
            }, function(response, status) {
                if (status === 'OK') {
                  directionsDisplay.setDirections(response);
                } else {
                  window.alert('Directions request failed due to ' + status);
                }
      });

    });
  }
}