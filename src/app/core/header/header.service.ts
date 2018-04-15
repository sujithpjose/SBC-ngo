import { Injectable } from '@angular/core';

const features = [
  {
    label: 'HOME',
    isActive: true
  },
  {
    label: 'ABOUT US',
    isActive: false
  },
  {
    label: 'SERVICES',
    isActive: false
  },
  {
    label: 'CAUSES',
    isActive: false
  },
  {
    label: 'EVENTS',
    isActive: false
  },
  {
    label: 'PAGES',
    isActive: false
  },
  {
    label: 'BLOG',
    isActive: false
  },
  {
    label: 'CONTACT US',
    isActive: false
  }
];
@Injectable()
export class HeaderService {

  constructor() { }

  public getNavItems(): any[] {
    return features;
  }

}
