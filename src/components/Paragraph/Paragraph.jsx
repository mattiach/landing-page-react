const Paragraph = (props) => {
    return (
        <>
            <p className="mb-3 font-light text-md">
                {props.children}
            </p>
        </>
    )
}

export default Paragraph;