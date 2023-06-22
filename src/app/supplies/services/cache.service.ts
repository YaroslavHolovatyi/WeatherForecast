import { EventEmitter, Injectable } from '@angular/core';
import { CityCard } from '../interfaces/city-info.interface';



@Injectable({
    providedIn: 'root'
  })
  export class CacheService{

    cityAddedEvent = new EventEmitter<boolean>();

    constructor(){}

    saveToCache(city: any){
        if(this.checkIfCached(city)){
            return
        }else{
            const cachedCitiesString = localStorage.getItem('cachedCities');
            const cachedCitiesArray = cachedCitiesString ? JSON.parse(cachedCitiesString) : [];
            cachedCitiesArray.includes(city) ? localStorage.setItem('cachedCities', JSON.stringify(cachedCitiesArray)) : cachedCitiesArray.unshift(city) ;
            if(cachedCitiesArray.length > 4){
                cachedCitiesArray.pop()
            }
            localStorage.setItem('cachedCities', JSON.stringify(cachedCitiesArray));
            console.log(localStorage.getItem('cachedCities'));
        }
    }


    getFromCash(city:any): CityCard | null {        
        if(this.checkIfCached(city)){
            const cachedCitiesString = localStorage.getItem('cachedCities');
            let cachedCitiesArray: CityCard[] = [];
            if (cachedCitiesString !== null) {
              cachedCitiesArray = JSON.parse(cachedCitiesString);
            }
            const matchingCityCard = cachedCitiesArray.find(card => card.name === city);
            return matchingCityCard || null;
        }
        return null
    }

    checkIfCached(city: any){    
        const cachedCitiesString = localStorage.getItem('cachedCities');        
        const cachedCitiesArray = cachedCitiesString ? JSON.parse(cachedCitiesString) : [];   
        let cities = [];
        for(let item of cachedCitiesArray){
            cities . push(item.name)
        }     
       return cities.includes(city.name);
    }
  }