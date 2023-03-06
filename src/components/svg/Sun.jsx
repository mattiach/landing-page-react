import { MdWbSunny } from "react-icons/md";

const Sun = () => {
    const darkModeName = "Dark Mode Button";

    return (
        <>
            <span className="flex">
                <MdWbSunny
                    size={35}
                    fill={"white"}
                    name={darkModeName}
                    aria-label={darkModeName}
                    title={darkModeName} />
            </span>
        </>
    )
}

export default Sun;