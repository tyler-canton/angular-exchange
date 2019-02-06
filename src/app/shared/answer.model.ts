import { Owner } from './owner.model';

export class Answer {
  constructor(
    public answer_id: number,
    public body: string,
    public creation_date: number,
    public is_accepted: boolean,
    public last_activity_date: number,
    public last_edit_date: number,
    public owner: Owner,
    public question_id: number,
    public score: number
  ) {}
}
