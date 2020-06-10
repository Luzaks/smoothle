import React from "react";
import './Item.css'

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stars: []
        };
    }
    componentDidMount() {
        this.setState({
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    render() {
        return(
            <div className="item">
                <div className="image">
                    <img src={'img/' + this.props.image} width='100%' alt="book-cover"/>
                </div>
                <div className="title">{this.props.title}</div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(elem =>
                                <img src="img/star.png" width='32' alt="start" />
                            )
                        }
                    </p>
                    Rating:
                    <select value={this.props.rating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button>Erase</button>
                </div>
            </div>
        );
    }
}

export default Item;