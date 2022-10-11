import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Boards.module.css";
import * as actions from "../../store/action";
import Form from "../form/Form";

class Boards extends Component {
  componentDidMount() {
    this.props.getBoards();
  }

  handleSubmit = (value) => {
    console.log(value);
    this.props.createBoard(value);
  };

  render() {
    return (
      <div className={styles.Boards}>
        {this.props.boards.map((board) => {
          return (
            <Link key={board.id} to={`board/${board.id}`}>
              <div className={styles.Board}>
                <h2>{board.name}</h2>
              </div>
            </Link>
          );
        })}
        <Form name="Board" submit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.boardsReducer.isLoading,
    error: state.boardsReducer.error,
    boards: state.boardsReducer.boards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards: () => dispatch(actions.getBoards()),
    createBoard: (name) => dispatch(actions.createBoard(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
