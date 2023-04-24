export class GetSuitableVolunteers {
    id: number;
    UserId: number;
    typeOfVolunteeringId: number;
    days: string;
    startHour: any;
    endHour: any;
    UserFirstName: string;
    UserLastName: string;
    UserAdress: string;
    constructor(id: number = 0,
        userId: number = 0,
        typeOfVolunteeringId: number = 0,
        days: string = '',
        startHour: any = null,
        endHour: any = null,
        userFirstName: string = '',
        userLastName: string = '',
        userAddress: string = '') {
        this.id = id;
        this.UserId = userId
        this.typeOfVolunteeringId = typeOfVolunteeringId
        this.days = days
        this.startHour = startHour
        this.endHour = endHour
        this.UserFirstName = userFirstName
        this.UserLastName = userLastName
        this.UserAdress = userAddress
    }
}