const rowDefault = 'bg-primary text-white text-center font-bold'

export default () => {
    const listItems = [4, 5, 6].map((item, index) => (
        <div className={`${rowDefault} col-span-2`} key={index}>
            {item}
        </div>
    ))
    return (
        <div className="main">
            <div className="navbar">
                <div className={`${rowDefault} col-span-3`}>1</div>
                <div className={`${rowDefault} col-span-3`}>2</div>
            </div>
            <div className="search col-span-2">
                <div className={`${rowDefault} col-span-2`}>3</div>
            </div>
            <div className="listview col-span-2">{listItems}</div>
        </div>
    )
}
