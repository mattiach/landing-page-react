const Container = (props) => {
    return (
        <>
            <div
                className={`container mx-auto md:px-0 text-justify ${props.margine ? '' : 'px-4'} `}>
                {props.children}
            </div>
        </>
    )
}

export default Container;