import "./mainContent.sass"

import img from "./7wonder.png"

const MainContent = ({title}) => {
    return (
        <main class="main">
        <div class="container">
            <div class="main__title">{title}</div>
            <div class="main__blocks">
                <View title={title} />
            </div>
        </div>
    </main>
    )
}

const View = ({title}) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
        {
            arr.map(elem => {
                return (
                    <div class="main__block">
                        <div class="main__block_img">
                            <img src={img} alt="wonder img"></img>
                        </div>
                        <div class="main__wrapper">
                            <div>
                                <div class="main__block_title">7 WONDERS</div>
                                <div class="main__block_price">489 kr</div>
                            </div>
                            <div>
                                <div class="main__block_btn">recension</div>
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