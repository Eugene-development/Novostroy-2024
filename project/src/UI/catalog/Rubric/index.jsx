import { ChevronRightIcon } from "@heroicons/react/20/solid";
import FlipWordsDemo from "./FlipWordsDemo";

export default ({ dataCatalog }) => {
  return (
    <>
    <div className="bg-white pb-2 sm:pb-8">
      <div className=" max-w-7xl ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="mt-3 sm:mt-3 lg:mt-3">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-gray-500/10 px-4 py-1 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-500/10">
                Категория
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />  
              <span>{dataCatalog?.value}</span>
                
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
    
    <div className="relative isolate overflow-hidden ">
    {/* <div className="mt-3 sm:mt-3 lg:mt-3">
      <div className="inline-flex space-x-6">
        <span className="rounded-full bg-gray-500/10 px-4 py-1 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-inset ring-sky-500/10">
          Рубрика
        </span>
        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
          <span>{dataCatalog?.value}</span>
          <ChevronRightIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </span>
      </div>
    </div> */}

      {/* <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg> */}
      <div className="mx-auto max-w-full px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-14 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {dataCatalog?.value}
            {/* <FlipWordsDemo/> */}
          </h1>
          <div
            className="mt-6 text-lg leading-8 text-gray-600 space-y-4"
            dangerouslySetInnerHTML={{
              __html: dataCatalog?.text?.value || "",
            }}
          ></div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src="https://www.nobilia.de/fileadmin/assets/produkte/_kuechen/_stages/494_senso.jpg"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
};
