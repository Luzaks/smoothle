import React from "react";

class PanelAdd extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            image: '',
            rating: 1
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onadd({title: title,  image: image,  rating: rating});
        this.props.onCancel();
    };
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    };
    onChangeImage = (e) => {
        this.setState({image: e.target.value});
    };
    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({rating: rating});
    };

    render() {
        return(
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit} >
                        <p>
                            <label> Book's Title </label><br />
                            <input onChange={this.onChangeTitle} type="text" name="title" className="input" />
                        </p>

                        <p>
                            <label> Image's Title </label><br />
                            <input onChange={this.onChangeImage} type="text" name="image" className="input" />
                        </p>

                        <p>
                            <label>Ranking</label><br />
                            <select onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue" value="Register Book" />
                        <button onClick={this.props.onCancel} className="button btn-normal">Cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PanelAdd;