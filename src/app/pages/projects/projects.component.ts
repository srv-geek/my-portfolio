import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  selectedFilter: string = 'all';

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  showProject(type: string): boolean {
    return this.selectedFilter === 'all' || this.selectedFilter === type;
  }

}
