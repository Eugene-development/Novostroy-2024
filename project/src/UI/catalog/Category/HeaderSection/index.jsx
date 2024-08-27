import { ChevronRightIcon } from "@heroicons/react/20/solid";

export default ({ data }) => {
  return (
    <div className="bg-white pb-2 sm:pb-7">
      <div className=" max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          
          
          <div className="mt-3 sm:mt-3 lg:mt-3">
            <div className="inline-flex space-x-6 whitespace-pre">
              <span className="rounded-full bg-gray-500/10 px-4 py-1 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-500/10">
                Категория каталога
              </span>
              
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />  
              <span>{data.parentable.value}</span>
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />  
              <span>{data.value}</span>
                
              </span>
            </div>
          </div>
            
            
            
          {/* <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {data}
          </h2> */}
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p> */}
        </div>
      </div>
    </div>
  );
};
