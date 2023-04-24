import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatingService {

  constructor() { }

  toRangeOfHours(list: string[], difference: number) {
    let nums = list.map((hour: string) => this.toNumber(hour, difference));
    let result = [];
    console.log(nums);
    for (let i = 0; i < nums.length - 1;) {
      let j = i;
      for (; j < nums.length - 1 && nums[j + 1] - nums[j] == (difference / 60); j++);
      if (nums[j] - nums[j - 1] == (difference / 60)) {
        result.push(list[i] + '-' + list[j]);
        i = j + 1;
      }
      else {
        result.push(list[i++].toString());
      }
    }
    if (nums[nums.length - 1] - nums[nums.length - 2] != difference / 60) {
      result.push(list[nums.length - 1].toString());
    }
    console.log(result);
    return result;
  }
  
  toNumber(hour: string, difference: number) {
    let number = Number(hour.slice(0, hour.indexOf(':')));
    let part = Number(hour.slice(hour.indexOf(':') + 1, hour.length - 1)) == 0 ? 0 : (difference / 60);
    return number + part;
  }
}
