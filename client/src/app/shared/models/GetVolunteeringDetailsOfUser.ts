import { Time } from "@angular/common";

export class GetVolunteeringDetailsOfUser {
    id: number;
    typeOfVolunteeringName: string;
    days: string;
    startHour: any;
    endHour: any;
    constructor(
        id: number = -1,
        typeOfVolunteeringName: string = '',
        days: string = '',
        startHour: any = null, 
        endHour: any = null) {
            this.id = id;
            this.typeOfVolunteeringName = typeOfVolunteeringName;
            this.days = days;
            this.startHour = startHour;
            this.endHour = endHour;
         }

}