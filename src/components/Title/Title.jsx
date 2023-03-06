const Title = (props) => {
    return (
        <>
            <h2 className="text-5xl md:text-6xl font-extrabold parisienne text-gold">{props.children}</h2>
        </>
    )
}

export default Title;