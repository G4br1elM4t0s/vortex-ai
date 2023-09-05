import Categories from "@/components/Categories";
import SearchInput from "@/components/Search-Input";
import prismadb from "@/lib/prismadb";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const categories = await prismadb.category.findMany();
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
    </div>
  )
}