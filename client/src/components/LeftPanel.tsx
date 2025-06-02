const LeftPanel = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-around gap-6 h-full border-2 border-white">
            {/* Avatar or Logo */}
            <div className="text-center">
                <img
                    src="/Voldu.jpg"
                    alt="Avatar"
                    className="mx-auto w-80 rounded-full mt-10 border-2 border-white"
                />
                <h2 className="mt-2 text-4xl font-bold">Voldemort⋅17</h2>
            </div>

            {/* Intro or About Section */}
            <div className="overflow-hidden text-lg leading-relaxed text-justify mx-8 font-bold">
                <p>
                    There is no bug or feature, only power... and those too weak to compile it. I code not for creation, but for dominion.
                </p>
            </div>

            {/* Footer or Link */}
            <div className="text-center text-sm opacity-70">
                <p>Built with Dark Powers of me,<br className="" /> <b className="text-lg font-bold text-white">The Lord Voldemort. </b></p>
            </div>
        </div>
    );
};

export default LeftPanel;
