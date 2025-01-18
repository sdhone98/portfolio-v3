import {Button} from "flowbite-react";
import {FaSun} from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import {useState} from "react";



const Header = () => {
    const [IsDarkModeOn, setIsDarkModeOn] = useState(true)
    const toggleMode = () => {
        setIsDarkModeOn(!IsDarkModeOn);
    }
    return (
        <div className="w-full h-16 flex flex-col items-center justify-center p-2 bg-white rounded-b-2xl sticky top-0">
            <span className="w-full flex justify-between items-center px-4">


                <div className="flex justify-between items-center gap-1">

                <BsPersonFill/><h3 className="text-xl font-bold">Sagar Dhone</h3>
            </div>
            <div>

                <Button onClick={toggleMode}>
                {IsDarkModeOn ? <FaSun/> : <BsMoonStarsFill/>}
                </Button>
            </div>
            </span>
        </div>

    )
}

export default Header