import { BsSearch } from "react-icons/bs"

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="mx-20 hidden lg:block">
        <div className="flex justify-between items-center p-8">
            <h1 className="text-4xl font-medium">Logo</h1>
            <div className="relative w-full max-w-[500px]">
              <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[32px] w-full" type="text" placeholder="Search product .." />
              <BsSearch size={20} className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
