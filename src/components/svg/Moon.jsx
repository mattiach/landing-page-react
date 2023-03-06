import { MdDarkMode } from "react-icons/md";

const Moon = () => {
    const darkModeName = "Dark Mode Button";

    return (
        <>
            <span className="flex">
                <MdDarkMode
                    size={35}
                    fill={"#8f773f"}
                    name={darkModeName}
                    aria-label={darkModeName}
                    title={darkModeName} />
            </span>
        </>
    )
}

export default Moon;