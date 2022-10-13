import { Component } from "react";
import { connect } from "react-redux";
import styles from "./CheckItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import * as actions from "../../store/action";

class CheckItem extends Component {
  handleChange = () => {
    const { id, idCard, idChecklist, state } = this.props;
    this.props.updateCheckItem(id, idCard, idChecklist, state);
  };

  handleDelete = () => {
    const { id, idChecklist } = this.props;
    this.props.deleteCheckItem(id, idChecklist);
  };

  render() {
    const isCompleted = this.props.state === "complete";
    const completeStyle = isCompleted ? styles.Completed : "";
    return (
      <div className={styles.CheckItem}>
        <div className={styles.Item}>
          <input
            type="checkbox"
            name={this.props.name}
            className={styles.Input}
            defaultChecked={isCompleted && "checked"}
            onChange={this.handleChange}
          />
          <label className={completeStyle} htmlFor={this.props.name}>
            {this.props.name}
          </label>
        </div>
        <DeleteIcon onClick={this.handleDelete} className={styles.Delete} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCheckItem: (id, idCard, idChecklist, value) =>
      dispatch(actions.updateCheckItem(id, idCard, idChecklist, value)),
    deleteCheckItem: (id, idChecklist) =>
      dispatch(actions.deleteCheckItem(id, idChecklist)),
  };
}

export default connect(() => {
  return {};
}, mapDispatchToProps)(CheckItem);
