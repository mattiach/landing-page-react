const Subtitle = (props) => {

    return (
        <>
            <h3 className={`text-xl md:text-2xl font-bold text-gold`}>{props.children}</h3>
        </>
    )
}

export default Subtitle;