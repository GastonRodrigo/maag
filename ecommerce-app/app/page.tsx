import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { seedSanityData } from "@/lib/seed"
import { product } from "@/sanity/schemas/product-schema"

interface Props {}

export default async function Page() {
  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == 'product'] {
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      'slug': slug.current
    }`
    )
    console.log(products)
  return (
    <div>
      <div className="px-4 pt-20 text-center">
      <h1 className="text-4xl font-extrabold tracking-normal" style={{ textAlign: 'center' }}>
  <img src="https://i.postimg.cc/xdcSXszh/MAAGLOGO-removebg-preview.png" alt="Logo" style={{ display: 'inline-block', margin: '0 auto' }}/>
</h1>

        <p className="mx-auto mt-4 max-w-3xl text-base"></p>
        {/* {siteConfig.description} */}
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} Productos
            </h1>
            {/* Product Sort */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Productos
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="hidden lg:block">{/* Product filters */}</div>
              {/* Product grid */}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
