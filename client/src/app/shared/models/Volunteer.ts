export class Volunteer {
    UserId: number;
    UserFirstName: string;
    UserLastName: string;
    UserAdress: string;
    startHour: any;
    endHour: any;
    days: string;
    TypeOfVolunteeringsCount: number;
    favorited: boolean;
    constructor(UserId = -1,
        UserFirstName = '',
        UserLastName = '',
        UserAdress = '', 
        startHour = null,
        endHour = null,
        days = '',
        TypeOfVolunteeringsCount = 0, 
        favorited = false) {
        this.UserId = UserId;
        this.UserFirstName = UserFirstName;
        this.UserLastName = UserLastName;
        this.UserAdress = UserAdress;
        this.startHour = startHour;
        this.endHour = endHour;
        this.days = days;
        this.TypeOfVolunteeringsCount = TypeOfVolunteeringsCount;
        this.favorited = favorited;
    }
}