import { Time } from "@angular/common";

export class GetVolunteeringsByRequester {
    VolunteeringId: number;
    VolunteerId: number;
    volunteerFirstName: string;
    VolunteerLastName: string;
    TypeOfVolunteeringName: string;
    RangeOfDate: string;
    days: string;
    startHour: Time;
    endHour: Time;
    startDate: Date;
    endDate: Date;
    Status: number;
    Rating: number;
    Comment: string;
    CommentDate: Date;
    constructor(
        VolunteeringId: number,
        VolunteerId: number,
        volunteerFirstName: string,
        VolunteerLastName: string,
        TypeOfVolunteeringName: string,
        RangeOfDate: string,
        days: string,
        startHour: Time,
        endHour: Time,
        startDate: Date,
        endDate: Date,
        Status: number,
        Rating: number,
        Comment: string,
        CommentDate: Date) {
        this.VolunteeringId = VolunteeringId;
        this.VolunteerId = VolunteerId;
        this.volunteerFirstName = volunteerFirstName;
        this.VolunteerLastName = VolunteerLastName;
        this.TypeOfVolunteeringName = TypeOfVolunteeringName;
        this.RangeOfDate = RangeOfDate;
        this.days = days;
        this.startHour = startHour;
        this.endHour = endHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.Status = Status;
        this.Rating = Rating;
        this.Comment = Comment;
        this.CommentDate = CommentDate;
    }

}