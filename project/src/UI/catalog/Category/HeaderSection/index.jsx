export default ({data}) => {
  return (
    <div className="bg-white pb-2 sm:pb-8">
      <div className=" max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-gtay-600">Категория</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{data}</h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
        </div>
      </div>
    </div>
  )
}
