// src/components/BooksList.tsx
"use client";

import { useEffect, useState } from "react";
import { Book } from "@/types/book";
import { getBooks } from "@/lib/api";

const MAX_BOOKS = 10;

export default function BooksList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      setError(null);

      const response = await getBooks(1);

      if (!response.ok) {
        setError(response.message || "Error desconocido al cargar los libros");
        setLoading(false);
        return;
      }

      const validBooks = response.data?.slice(0, MAX_BOOKS) || [];
      setBooks(validBooks);
      setLoading(false);
    }

    loadBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <p className="text-gray-600 animate-pulse">Cargando libros...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <p className="text-red-800 font-semibold">Error al cargar los libros</p>
        <p className="text-red-700 text-sm mt-1">{error}</p>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <p className="text-yellow-800">No se encontraron libros</p>
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {books.map((book) => (
        <li
          key={book.id}
          className="border border-gray-200 rounded-md p-4 hover:shadow-md transition-shadow"
        >
          <h3 className="font-bold text-lg text-gray-900">{book.title}</h3>

          <p className="text-gray-700 mt-2">
            <span className="font-bold">Autor: </span>
            {book.authors?.[0]?.name || "Desconocido"}
          </p>
        </li>
      ))}
    </ul>
  );
}
