import Nav from "./Nav";

export default function Header() {
    return (
        <header className="w-full flex h-35 py-3 pl-3 bg-black" >
            <div className="flex w-full flex-row md:w-8/12 lg:w-9/12 2xl:w-10/12">
                <img src="#" alt="logo" className="w-full md:w-48" />
            </div>
            <ul className="md:w-4/12 lg:w-3/12 2xl:w-2/12 flex flex-row items-center justify-between">
                <Nav />
            </ul>
        </header>
    );
}