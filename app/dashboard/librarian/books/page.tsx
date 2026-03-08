// app/dashboard/librarian/books/page.tsx
import { createBook, deleteBook } from "@/app/lib/actions/books/actions"
import prisma from "@/app/lib/prisma"


export default async function BooksPage() {
  const books = await prisma.book.findMany()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book Management</h1>
      
      {/* Book Creation Form */}
      <form action={createBook} className="mb-12 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Add New Book</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Title - Required field, main identifier of the book */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Clean Code"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Author - Required field, who wrote the book */}
          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-2">
              Author *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Robert C. Martin"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* ISBN - Optional but recommended, unique identifier for the book */}
          <div>
            <label htmlFor="isbn" className="block text-sm font-medium mb-2">
              ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              placeholder="978-0132350884"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              International Standard Book Number (optional)
            </p>
          </div>

          {/* Publisher - Optional, the company that published the book */}
          <div>
            <label htmlFor="publisher" className="block text-sm font-medium mb-2">
              Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              placeholder="Prentice Hall"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Published Year - Optional, when the book was published */}
          <div>
            <label htmlFor="publishedYear" className="block text-sm font-medium mb-2">
              Published Year
            </label>
            <input
              type="number"
              id="publishedYear"
              name="publishedYear"
              placeholder="2008"
              min="1900"
              max={new Date().getFullYear()}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Category - Optional, helps organize and filter books */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Technology"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              e.g., Fiction, Technology, Science, History
            </p>
          </div>

          {/* Total Copies - Required, how many physical copies the library owns */}

         <div>
            <label htmlFor="totalCopies" className="block text-sm font-medium mb-2">
              Total Copies *
            </label>
            <input
              type="number"
              id="totalCopies"
              name="totalCopies"
              placeholder="3"
              min="1"
              defaultValue="1"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              How many copies does the library own?
            </p>
          </div>
          <div>
            <label htmlFor="availableCopies" className="block text-sm font-medium mb-2">
              Total Copies *
            </label>
            <input
              type="number"
              id="availableCopies"
              name="availableCopies"
              placeholder="3"
              min="1"
              defaultValue="1"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              How many copies does the library own?
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Add Book
        </button>
      </form>

      {/* Books List */}
      <div>
        <h2 className="text-2xl font-bold mb-6">All Books ({books.length})</h2>
        
        {books.length === 0 ? (
          <p className="text-gray-500">No books in the library yet. Add your first book above!</p>
        ) : (
          <div className="grid gap-4">
            {books.map(book => (
              <div key={book.id} className="p-4 bg-white rounded-lg shadow flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p className="text-gray-600">by {book.author}</p>
                  
                  <div className="mt-2 text-sm text-gray-500">
                    {book.isbn && <p>ISBN: {book.isbn}</p>}
                    {book.publisher && <p>Publisher: {book.publisher}</p>}
                    {book.publishedYear && <p>Year: {book.publishedYear}</p>}
                    {book.category && (
                      <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {book.category}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-3">
                    <span className={`text-sm font-medium ${
                      book.availableCopies > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {book.availableCopies} of {book.totalCopies} available
                    </span>
                  </div>
                </div>

                <form action={deleteBook.bind(null, book.id)}>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                   
                  >
                    Delete
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}