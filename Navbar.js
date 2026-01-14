import { DiVim } from "react-icons/di";

function Navbar(){
return(
    <div className="bg-white sticky z-10 flex items-center justify-between max-auto p-6">
<div className="text-2xl font-bold text-black">LOGO</div>

<ul className="flex items-center justify-between space-x-3">
    <li className="text-xl font-md hover:text-blue-500 text-black">Home</li>
    <li className="text-xl font-md hover:text-blue-500 text-black">Services</li>
    <li className="text-xl font-md hover:text-blue-500 text-black">Menu</li>
    <li className="text-xl font-md hover:text-blue-500 text-black">Details</li>
</ul>
</div>
)

}
export default Navbar;