import Nav from "./Nav";

export default function Header() {
    return (
        <header className="w-full flex h-auto py-3 px-3 bg-black md:h-10" >
            <div className="flex w-full flex-row md:w-8/12 lg:w-9/12 2xl:w-10/12">
                <img src="#" alt="logo" className="w-full md:w-48" />
            </div>
            <ul className="md:w-4/12 lg:w-4/12 2xl:w-2/12 flex flex-row items-center justify-between">
                <Nav />
            </ul>
        </header>
    );
}