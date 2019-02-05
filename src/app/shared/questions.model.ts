import { Owner } from "./owner.model";

export class Questions {
  constructor(
    public answer_count: number,
    public creation_date: number,
    public is_answered: boolean,
    public last_activity_date: number,
    public last_edit_date: number,
    public link: string,
    public owner: Owner,
    public question_id: number,
    public score: number,
    public tags: any[],
    public title: string,
    public view_count: number
  ) {}
}
