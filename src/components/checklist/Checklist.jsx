import { Component } from "react";
import { connect } from "react-redux";
import styles from "./Checklist.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import * as actions from "../../store/action";
import Form from "../form/Form";
import CheckItem from "../checkItem/CheckItem";

class Checklist extends Component {
  componentDidMount() {
    this.props.getCheckItems(this.props.id);
  }

  handleDelete = () => {
    this.props.deleteChecklist(this.props.id);
  };

  handleCreateCheckItem = (name) => {
    this.props.createCheckItem(name, this.props.id);
  };

  render() {
    const idCard = this.props.idCard;
    return (
      <fieldset className={styles.Checklist}>
        <legend>{this.props.name}</legend>
        <div className={styles.Header}>
          <div className={styles.Progress}>
            <div></div>
          </div>
          <DeleteIcon
            className={styles.DeleteIcon}
            onClick={this.handleDelete}
          />
        </div>
        {this.props.checkItems[this.props.id] &&
          this.props.checkItems[this.props.id].map((item) => (
            <CheckItem {...item} idCard={idCard} key={item.id} />
          ))}
        <Form name="CheckItem" submit={this.handleCreateCheckItem} />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.checkItemsReducer.isLoading,
    error: state.checkItemsReducer.error,
    checkItems: state.checkItemsReducer.checkItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCheckItems: (id) => dispatch(actions.getCheckItems(id)),
    createCheckItem: (name, id) => dispatch(actions.createCheckItem(name, id)),
    deleteChecklist: (id) => dispatch(actions.deleteChecklist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checklist);
