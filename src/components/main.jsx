import React from "react"

export default function Main() {
    const [count ,setCount] = React.useState(1);
    const [content,setContent] = React.useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })
    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => console.log(data))
    },[])
    function handleClick(event) {
        const {name, value} = event.target;
        console.log(value)
        setContent((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    function newMeme() {
        setCount((prev)=> (prev+1));
        console.log(count);
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder={content.topText}
                        name="topText"
                        onChange={handleClick}
                        value={content.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder={content.bottomText}
                        name="bottomText"
                        onChange={handleClick}
                        value={content.bottomText}
                    />
                </label>
                <button onClick={newMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={content.imageUrl} />
                <span className="top">{content.topText}</span>
                <span className="bottom">{content.bottomText}</span>
            </div>
        </main>
    )
}