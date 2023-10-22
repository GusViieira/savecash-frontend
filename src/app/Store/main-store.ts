import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainStore {
 routeName: Subject<string> = new Subject();

 constructor(){}

 getRouteName(){
  return this.routeName.asObservable();
 }

 setRouteName(value: string){
  this.routeName.next(value)
 }

}