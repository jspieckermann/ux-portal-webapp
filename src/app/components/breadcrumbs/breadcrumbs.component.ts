import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/model/Breadcrumb';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

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
        this.add(crumb);
      });
  }

  private add(crumb: Breadcrumb) {
    const index = this.breadcrumbs.map(c => c.url).indexOf(crumb.url);
    if (index >= 0) {
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

}
