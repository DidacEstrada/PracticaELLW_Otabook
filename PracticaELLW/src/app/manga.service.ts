import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private apiUrl = 'http://localhost:3000/mangues';

  constructor() { }

  async getMangaDataByTitol(mangaTitol: string): Promise<any> {
    try{
        const response = await fetch(`${this.apiUrl}/titol/${mangaTitol}`);
        const mangaData = await response.json();
        return mangaData;
    }catch(error){
      console.log(error);
    }
  }
}
