import { PrismaClient } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"
import "dotenv/config"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({ adapter })

async function main() {
  const hashedPassword = await bcrypt.hash("password123", 10)
  
  // Create librarian
  const librarian = await prisma.user.create({
    data: {
      name: "Fatima Zahra",
      email: "librarian@ump.ac.ma",
      password: hashedPassword,
      role: "LIBRARIAN",
      phone: "+212612345678"
    }
  })
  
  // Create student
  const student = await prisma.user.create({
    data: {
      name: "Ahmed Benali",
      email: "student@ump.ac.ma",
      password: hashedPassword,
      role: "STUDENT"
    }
  })
    // Create PROFESSOR
  const professor = await prisma.user.create({
    data: {
      name: "Zakaria Ghoumidate",
      email: "professor@ump.ac.ma",
      password: hashedPassword,
      role: "PROFESSOR"
    }
  })
  
  // Create books
  const book = await prisma.book.create({
    data: {
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "978-0132350884",
      category: "Technology",
      publishedYear: 2008,
      totalCopies: 3,
      availableCopies: 3
    }
  })
  
  // Create pending loan request
  await prisma.loan.create({
    data: {
      bookId: book.id,
      userId: student.id,
      status: "PENDING"
    }
  })
  
  console.log("✅ Seed complete!")
  console.log("Password: password123")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())