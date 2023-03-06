import '../../styles/App.css';

const Jumbotron = ({ imageUrl, children }) => {
    return (
        <div className="w-full h-96 bg-top lg:bg-center bg-cover object-center sfondo-lg rounded-sm golden-box" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="container mx-auto py-20">
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;