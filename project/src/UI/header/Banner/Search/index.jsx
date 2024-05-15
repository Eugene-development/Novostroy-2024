"use client";
import SearchModal from './SearchModal';
import { getAllProducts } from '@/app/server'

import { useStoreSearch } from '@/store/search'
const { visibleSearch, products } = useStoreSearch

export default () => {
  const { openVisibleSearch } = visibleSearch()
  const { setAllProducts, allProducts } = products()

  const handleSearch = async () => {
    if (allProducts.length < 1) setAllProducts(await getAllProducts())
    openVisibleSearch()
  }

  return (
    <>
      <SearchModal />
      <button
        onClick={handleSearch}
        type="button"
        className="relative isolate px-3 focus-visible:outline-offset-[-4px] z-20"
      >
        <span className="sr-only">Поиск</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search size-6 text-gray-50" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>

      </button>
    </>

  );
}
