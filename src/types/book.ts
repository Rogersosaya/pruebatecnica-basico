import { Author } from "./author";

// Modelo principal usado por el listado
export interface Book {
  id: number;
  title: string;
  authors: Author[]; // Gutendex puede traer varios autores por libro
}

