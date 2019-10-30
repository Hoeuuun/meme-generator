import React, {Component} from 'react';

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }

        this.handleChange = this.handleChange.bind(this)
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
        
    }

    render() {
        return (
            <div>
                <form className="meme-form">
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
            </div>

        )
    }
}
