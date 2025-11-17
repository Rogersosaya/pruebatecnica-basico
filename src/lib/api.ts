import { Book } from "@/types/book";

export async function getBooks(page: number = 1){
  try {
    const res = await fetch(`https://gutendex.com/books/?page=${page}`);
    const data = await res.json();
    return {
      ok: true,
      data: data.results as Book[],
    };

  } catch (error: any) {
    return {
      ok: false,
      message: error?.message || "Error desconocido",
    };
  }
}
