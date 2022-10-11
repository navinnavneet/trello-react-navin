import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Lists.module.css";
import * as actions from "../../store/action";
import Form from "../form/Form";
import List from "../list/List";

class Lists extends Component {
  componentDidMount() {
    this.props.getLists(this.props.match.params.boardId);
  }

  handleSubmit = (name) => {
    this.props.createList(name, this.props.match.params.boardId);
  };

  deleteListHandler = (id) => {
    this.props.deleteList(id);
  };

  render() {
    return (
      <div className={styles.Lists}>
        {this.props.lists.map((list) => {
          return (
            <List key={list.id} {...list} deleteList={this.deleteListHandler} />
          );
        })}
        <Form name="List" submit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.listsReducer.isLoading,
    error: state.listsReducer.error,
    lists: state.listsReducer.lists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLists: (id) => dispatch(actions.getLists(id)),
    createList: (name, id) => dispatch(actions.createList(name, id)),
    deleteList: (id) => dispatch(actions.deleteList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
