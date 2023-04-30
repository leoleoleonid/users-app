import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-users-map',
  templateUrl: './users-map.component.html',
  styleUrls: ['./users-map.component.css']
})
export class UsersMapComponent implements AfterViewInit {

  map: any;
  private markers: L.Marker[] = [];

  constructor(private userService: UserService) {
  }

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private loadMap(): void {
    this.map = L.map('map').setView([0, 0], 1);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.homeLocation.lat && user.homeLocation.lng) {
          const marker = L.marker([user.homeLocation.lat, user.homeLocation.lng])
            .addTo(this.map)
            .bindPopup(user.name);
          this.markers.push(marker);
        }
      });
    });
  }

}

