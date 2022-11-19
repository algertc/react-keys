export default function Header() {
    return (
        <header className="py-5">
            <div className="container">
                <div className="flex justify-center items-center gap-x-5 md:gap-x-10">
                    <img src="avatar.png" alt="Charlie" className="w-20 md:w-24" />
                    <h1 className="text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-m2-200 to-indigo-500 font-extrabold">
                        Charlie's Public Keys
                    </h1>
                </div>
            </div>
        </header>
    )
}
