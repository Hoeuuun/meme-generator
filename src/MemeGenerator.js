import React, {Component} from 'react';

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "https:\/\/i.imgflip.com\/8p0a.jpg",
            allMemeImgs:[]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    // lifecycle method getting data that compoent should have at the beginning
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    // Updates the corresponding state on each change of the input box
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value})
    }

    /**
    * Creats a method that, when the "Gen" button is clicked, chooses one of the
    * memes from our `allMemeImgs` array at random and makes it so that is the
    * meme image that shows up in the bottom portion of our meme generator site (`.url`)
    */
    handleSubmit(event) {
        event.preventDefault() // prevents default into refreshing page
        // get random int
        const randomNum = Math.floor(Math.random() * 100)
        // window.alert(randomNum)
        // get meme from that random index
        const randomMemeImg = this.state.allMemeImgs[randomNum].url // url property
        // set 'randomImage' to the '.url' of the random meme item
        this.setState({ randomImage: randomMemeImg})

    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type = "text"
                        name = "topText"
                        placeholder = "Top Text"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "text"
                        name = "bottomText"
                        placeholder = "Bottom Text"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>

        )
    }
}
