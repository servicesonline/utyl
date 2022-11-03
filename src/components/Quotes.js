// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Quotes = () => {
    const quotable = {"content" : "Loading quote ...", "author" : ""};
    const [quote, setQuote] = useState(quotable);
    const [image, setImage] = useState("");
    const [availableQuote, setAvailableQuote] = useState([]);

    const getQuote = () => {
        fetch('https://api.quotable.io/random')
            .then((res) => res.json())
            .then((data) => {
                setQuote({
                    'content' : data.content,
                    'author' : data.author
                })
            }
        )
        // https://dog.ceo/api/breeds/image/random
        fetch('https://picsum.photos/v2/list')
            .then((res) => res.json())
            .then((data) => {
                setImage(data[Math.floor(Math.random() * 30)].download_url)
                document.querySelector('.carousel-inner').style.background = `url(${image})`

                // let elt = availableQuote;
                // elt.push({
                //     'content' : quote.content,
                //     'author' : quote.author,
                //     'image' : image
                // });

                // if(elt[0].author == ""){ elt.splice(0, 2) }

                // const e = setAvailableQuote(elt)

                // (document.querySelector(".carousel-indicators #data-slide-to-2").className == "active")
            }
        )
            
        // console.log(availableQuote)

    }
    useEffect(() => {
        getQuote()

        let elt = availableQuote;
        elt.push({
            'content' : quote.content,
            'author' : quote.author,
            'image' : image
        });

        if(elt[0].author == ""){ elt.splice(0, 2) }

        setAvailableQuote(elt)
        // alert(elt[0].author)

    }, []);

    return (
        // <div className='quotes' onClick={(e) => {getQuote()}}>
        //     <div id="quote1">
        //     <div class="corner "id="left_top"></div>
        //     <div class="corner" id="left_bottom"></div>
        //     <div class="corner" id="right_top"></div>
        //     <div class="corner" id="right_bottom"></div>
        //     <span>{quote.author}</span>
        //     <blockquote>
        //         <p><i>&ldquo; {quote.content} &rdquo; </i></p>
        //     </blockquote>
        //     </div>
        // </div>
        <div id="myCarousel" className="carousel slide quotes" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" id="data-slide-to-0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1" id="data-slide-to-1"></li>
                <li data-target="#myCarousel" data-slide-to="2" id="data-slide-to-2"></li>
            </ol>
                {/* (availableQuote < 10) ? setTimeout(getQuote, 10) : "" */}
            {
                console.log(availableQuote)
            }
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <div className="container">
                        <div className="carousel-caption relative">
                            <div className="bg_white">
                                <h1>Welcome To <span className="yello">UTIL</span></h1>
                                <blockquote>
                                    <p><i>&ldquo; {(availableQuote.length == 0) ? quote.content : availableQuote[0].content} &rdquo; </i></p>
                                </blockquote>
                                <span className="yello author">~{(availableQuote.length == 0) ? quote.author : availableQuote[0].author}~</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption relative">
                            <div className="bg_white">
                                <h1>Welcome To <span className="yello">UTIL</span></h1>
                                <blockquote>
                                    <p><i>&ldquo; {(availableQuote.length == 0) ? quote.content : availableQuote[1].content} &rdquo; </i></p>
                                </blockquote>
                                <span className="yello author">_{(availableQuote.length == 0) ? quote.author : availableQuote[1].author}_</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="container">
                        <div className="carousel-caption relative">
                            <div className="bg_white">
                                <h1>Welcome To <span className="yello">UTYL</span></h1>
                                <blockquote>
                                    <p><i>&ldquo; {(availableQuote.length == 0) ? quote.content : availableQuote[2].content} &rdquo; </i></p>
                                </blockquote>
                                <span className="yello author">_{(availableQuote.length == 0) ? quote.author : availableQuote[2].author}_</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next" onClick={(e) => {getQuote()}}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Quotes;