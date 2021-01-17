import cx from "classnames";
import { Component } from "react";

export default class LikeDislike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 100,
      dislikes: 25,
      updated: false,
      updatedDislikes: false,
    };
    this.updateLikes = this.updateLikes.bind(this);
    this.disLikeshandler = this.disLikeshandler.bind(this);
  }

  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
          dislikes: this.state.updatedDislikes
            ? prevState.dislikes - 1
            : prevState.dislikes,
          updatedDislikes: false,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
        };
      });
    }
  }

  disLikeshandler() {
    if (!this.state.updatedDislikes) {
      this.setState((prevState, props) => {
        return {
          likes: this.state.updated ? prevState.likes - 1 : prevState.likes,
          updated: false,
          dislikes: prevState.dislikes + 1,
          updatedDislikes: true,
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          dislikes: prevState.dislikes - 1,
          updatedDislikes: false,
        };
      });
    }
  }

  render() {
    return (
      <>
        <div>
          <h2>Like/Dislike</h2>
        </div>

        <button
          onClick={this.updateLikes}
          className={`like-button ${this.state.updated ? "liked" : ""}`}
        >
          <span>Like | </span>
          <span className="likes-counter">{this.state.likes}</span>
        </button>

        <button
          onClick={this.disLikeshandler}
          className={`dislike-button ${
            this.state.updatedDislikes ? "disliked" : ""
          }`}
        >
          <span>Dislike | </span>
          <span className="dislikes-counter">{this.state.dislikes}</span>
        </button>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
      </>
    );
  }
}
