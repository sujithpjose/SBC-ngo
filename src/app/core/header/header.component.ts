import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
  private navItems: any[] = [];
  constructor(_headerService: HeaderService) {
    this.navItems = _headerService.getNavItems();
  }

  ngOnInit() {
  }

  private toggleActive(currentItem): void {
    for (const item of this.navItems) {
      if (item === currentItem) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    }
  }

}
