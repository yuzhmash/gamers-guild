import "./aboutUs.sass"

const AboutUs = () => {
    return (
        <main>
            <div className="info">
                <div className="container">
                    <h1 className="info__title">
                        Välkommen till Gamers Guild!
                    </h1>
                    <div className="info__descr">
                        Vår webbplats är på gång, men lite att kolla på finns redan nu. <br></br><br></br>
                        Det blir lite nytt allt eftersom, så titta gärna in då och då. <br></br> <br></br>
                        Hos oss hittar du Warhammer, Pussel, Brädspel, Fidget Toys, Godis o dyl. Vill du dricka, <br></br> ta med en kaffe så är kaffemaskinen igång. <br></br><br></br>
                        Vi fyller på sortimentet allt eftersom, men skicka gärna en förfrågan <br></br> via Facebook/Messenger (Gamers Guild SE) om du vill vara säker på att det just du vill ha finns <br></br> tillgängligt.<br></br><br></br>
                        Är det något speciellt du söker, så skicka gärna ett PM eller kom in en sväng och kolla <br></br> läget så försöker vi beställa hem det.
                    </div>
                    <address className="info__address">
                        <div className="info__address__title">
                            Öppettider
                        </div>
                        <div className="info__address__wrapper">
                            <div className="info__address__week">
                                Måndag <br></br><br></br> Tisdag-Lördag <br></br><br></br> Söndag
                            </div>
                            <div className="info__address__time">
                                Stängt <br></br><br></br> 12.00 - 20.00 <br></br><br></br> 12.00 - 16.00
                            </div>
                        </div>
                    </address>
                </div>
            </div>
        </main>
    )
}


export default AboutUs;