"use server"
import { revalidatePath } from "next/cache"
import prisma from "../../prisma"
export async function createBook(formData: FormData){
     const book = await prisma.book.create({
    data: {
      title: formData.get("title") as string ,
      author:formData.get("author") as string ,
      isbn:formData.get("isbn") as string ,
      category: formData.get("category") as string,
      publishedYear: parseInt(formData.get("publishedYear") as string) ,
      totalCopies: parseInt(formData.get("totalCopies") as string)  ,
      availableCopies: parseInt(formData.get("availableCopies") as string) 
    }
     })
     revalidatePath("/dashboard/librarian/books")
}
export async function deleteBook(id: string){
    await prisma.book.delete({where:{id}})
    revalidatePath("/dashboard/librarian/books")
}