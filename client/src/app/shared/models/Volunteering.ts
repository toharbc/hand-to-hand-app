import { Time } from "@angular/common";

export class Volunteering {
    id: number;
    typeOfVolunteering_ForUsersId: number;
    requesterId: number;
    status: number;
    rating: number;
    comment: string;
    CommentDate: Date;
    days: string;
    startHour: string;
    endHour: string;
    startDate: Date;
    endDate: Date;
    constructor(id: number = 0, 
        typeOfVolunteering_ForUsersId: number = 0, 
        requesterId: number = 0, 
        status: number = 0, 
        rating: number = 0, 
        comment: string = '', 
        CommentDate: Date = new Date, 
        days: string = '', 
        startHour: string = '', 
        endHour: string = '', 
        startDate: Date = new Date(), 
        endDate: Date = new Date()) {
            this.id = id;
            this.typeOfVolunteering_ForUsersId = typeOfVolunteering_ForUsersId;
            this.requesterId = requesterId;
            this.status = status;
            this.rating = rating;
            this.comment = comment;
            this.CommentDate = CommentDate;
            this.days = days;
            this.startHour = startHour;
            this.endHour = endHour;
            this.startDate = startDate;
            this.endDate = endDate;
        }
}