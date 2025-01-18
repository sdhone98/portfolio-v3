import Header from "./Header.jsx";
import BottomTab from "./BottomTab.jsx";

const Hero = () => {
    return (
        <div className='w-full h-4/5 bg-gray-700 flex flex-col items-center top-0 '>
            <Header/>
            <span className="w-1/2 h-full flex flex-col items-center justify-center m-60">
                <h1 className='text-6xl font-bold'>
                    What’s New in Chrome
                    What’s New in Chrome
                    What’s New in Chrome
                    What’s New in Chrome
                </h1>
            </span>

            <p className='text-2xl'>
                October is Cybersecurity Awareness Month. Check out just some of the ways Chrome keeps you safe
            </p>
            <BottomTab/>
        </div>
    )
}

export default Hero