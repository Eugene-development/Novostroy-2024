import { Button } from '@headlessui/react'

export default ({value}) => {
  return (
    <Button className="md:hidden flex justify-center w-full items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white  shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
      {value}
    </Button>
  )
}
