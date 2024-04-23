import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private inputDataSubject = new BehaviorSubject<string>('');
  public inputData$ = this.inputDataSubject.asObservable();

  constructor() {}

  setInputData(data: string) {
    this.inputDataSubject.next(data);
  }
}
