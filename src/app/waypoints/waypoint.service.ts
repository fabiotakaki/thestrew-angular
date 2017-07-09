import { Injectable } from '@angular/core';

import { Waypoint } from './waypoint';
import { WAYPOINTS } from './mock-waypoints';

@Injectable()
export class WaypointService {
  getWaypoints(): Promise<Waypoint[]> {
    return Promise.resolve(WAYPOINTS);
  }
}