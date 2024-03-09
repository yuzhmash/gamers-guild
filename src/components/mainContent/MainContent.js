import "./mainContent.sass"

const MainContent = ({mainTitle, img, price, title}) => {
    return (
        <main className="main">
            <div className="container">
                <h2 className="main__title">{mainTitle}</h2>
                <div className="main__blocks">
                    <View img={img} price={price} title={title} />
                </div>
            </div>
        </main>
    )
}

const View = ({img, price, title}) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
        {
            arr.map((elem, i) => {
                return (
                    <div key={i} className="main__block">
                        <div className="main__block_img">
                            <img src={img} alt="wonder img"></img>
                        </div>
                        <div className="main__wrapper">
                            <div>
                                <div className="main__block_title">{title}</div>
                                <div className="main__block_price">{price}</div>
                            </div>
                            <div>
                                <div className="main__block_btn">recension</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default MainContent;