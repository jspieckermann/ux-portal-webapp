import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Project } from '../model/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectAdministrationService {

  constructor(private http: HttpService) { }

  updateProject(projectAsJson: string): Observable<Project> {
    return this.http.doPut<Project>(HttpService.URL_PROJECTS, projectAsJson);
  }

  createProject(projectAsJson: string): Observable<Project> {
    return this.http.doPost<Project>(HttpService.URL_PROJECTS, projectAsJson);
  }

  getProject(id: number): Observable<Project> {
    return this.http.doGet<Project>(HttpService.URL_PROJECTS + '/' + id);
  }

  getProjects(): Observable<Project[]> {
    return this.http.doGet<Project[]>(HttpService.URL_PROJECTS);
  }

  addCandidate(id: number, userAsJson: string): Observable<Project> {
    const url = HttpService.URL_PROJECTS + '/' + id + HttpService.URL_EXTENSION_CANDIDATES;
    console.log('Add candidate called: ' + url);
    return this.http.doPost<Project>(url, userAsJson);
  }

  removeCandidate(pid: number, uid: number): Observable<Project> {
    const url = HttpService.URL_PROJECTS + '/' + pid + HttpService.URL_EXTENSION_CANDIDATES + '/' + uid;
    console.log('Remove candidate called: ' + url);
    return this.http.doDelete<Project>(url);
  }

  setContractor(id: number, userAsJson: string): Observable<Project> {
    const url = HttpService.URL_PROJECTS + '/' + id + HttpService.URL_EXTENSION_CONTRACTORS;
    return this.http.doPost<Project>(url, userAsJson);
  }

}
