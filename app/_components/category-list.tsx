import { db } from '../_lib/prisma'
import CategoryItem from './category-item'

async function CategoryList() {
  const category = await db.category.findMany({})

  return (
    <div className="grid grid-cols-2 gap-3">
      {category.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default CategoryList
