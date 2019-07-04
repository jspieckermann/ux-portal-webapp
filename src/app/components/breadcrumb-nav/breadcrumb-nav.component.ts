import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/model/Breadcrumb';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumb-nav',
  templateUrl: './breadcrumb-nav.component.html',
  styleUrls: ['./breadcrumb-nav.component.css']
})
export class BreadcrumbNavComponent implements OnInit {

  breadcrumbs: Breadcrumb[] = [];
  private readonly KEY_LABEL = 'breadcrumb';
  private readonly KEY_SHOW_PARAMETER = 'breadcrumbShowParameter';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {route = route.firstChild; }
        return route;
      }))
      .subscribe(route => {
        const crumb: Breadcrumb = {
          url: this.router.routerState.snapshot.url,
          label: route.snapshot.data[this.KEY_LABEL],
          showParamter: route.snapshot.data[this.KEY_SHOW_PARAMETER]
        };
        this.logCrumbs();
        this.logCrumb('New Crumb: ', crumb);
        this.add(crumb);
      });
  }

  private add(crumb: Breadcrumb) {
    const index = this.breadcrumbs.map(c => c.url).indexOf(crumb.url);
    if (index >= 0) {
      console.log('Cutted!');
      this.breadcrumbs.splice(index + 1, this.breadcrumbs.length - index);
    } else {
      crumb.label = crumb.showParamter ? this.getModifiedLabel(crumb) : crumb.label;
      this.breadcrumbs.push(crumb);
    }
  }

  private getModifiedLabel(crumb: Breadcrumb): string {
    const substrings = crumb.url.split('/');
    if (substrings.length > 2) {
      return substrings[2];
    }
    return crumb.label;
  }

  private logCrumbs() {
    this.breadcrumbs.forEach(crumb => {
      this.logCrumb('Existing crumbs: ', crumb);
    });
  }

  private logCrumb(label: string, crumb: Breadcrumb) {
    console.log(label + 'URL: ' + crumb.url + ' Label: ' + crumb.label + ' Show Parameter: ' + crumb.showParamter);
  }

}
