import React, {Component} from 'react';

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    }

    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}
