import { Author } from "./author";

export interface Book {
  id: number;
  title: string;
  authors: Author[];
}

