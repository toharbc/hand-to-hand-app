export class GetCommentToVolunteer {
    RequesterName: string;
    Comment: string;
    CommentDate: Date;
    constructor(RequesterName: string = '', 
    Comment: string = '', 
    CommentDate = new Date()) {
        this.RequesterName = RequesterName;
        this.Comment = Comment;
        this.CommentDate = CommentDate;
    }
}