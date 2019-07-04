import { User } from './User';

export interface Project {
    id: number;
    category: string;
    headline: string;
    description: string;
    budget: number;
    deadline: string;
    client: User;
    contractor: User;
    candidates: User[];
    deliverables: string;
    timestamp: Date;
}
