export class TypeOfVolunteering_ForUsers {
    id: number;
    userId: number;
    typeOfVolunteeringId: number;
    days: string;
    startHour: any;
    endHour: any;
    constructor(id: number = 0, userId: number = 0, typeOfVolunteeringId: number = 0, days: string = '', hours: string = '',
    startHour: any = null, 
    endHour: any = null) {
        this.id = id;
        this.userId = userId;
        this.typeOfVolunteeringId = typeOfVolunteeringId;
        this.days = days;
        this.startHour = startHour;
        this.endHour = endHour;
    }
}