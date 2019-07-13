import { User } from './User';
import { Project } from './Project';

export interface Feedback {
    id: number;
    role: string;
    comment: string;
    project: Project;
    author: User;
    user: User;
    rating: number;
    timestamp: Date;
}
