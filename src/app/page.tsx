import BooksList from "@/components/BooksList";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Lista de Libros
          </h1>
       
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <BooksList />
        </div>
      </div>
    </main>
  );
}
