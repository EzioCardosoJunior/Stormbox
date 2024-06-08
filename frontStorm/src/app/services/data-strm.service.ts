import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSTRMService {

  private storageKey = 'formData';

  constructor() { }

  saveData(data: any): void {
    alert(1)
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getData(): any {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }

  clearData(): void {
    localStorage.removeItem(this.storageKey);
  }
}