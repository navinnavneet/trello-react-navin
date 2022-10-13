import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./CardDetails.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Form from "../form/Form";
import * as actions from "../../store/action";
import Checklist from "../checklist/Checklist";

class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.refCheckList = React.createRef();
  }
  componentDidMount() {
    this.props.getChecklists(this.props.id);
  }

  addCheckListHandler = (name) => {
    this.props.createChecklist(this.props.id, name);
  };

  render() {
    return (
      <div
        ref={this.refCheckList}
        onClick={(e) => {
          e.stopPropagation();
          if (e.target.isEqualNode(this.refCheckList.current)) {
            this.props.hideCheckList();
          }
        }}
        className={styles.Modal}
      >
        <div className={styles.CheckList}>
          <div className={styles.Header}>
            <h2>{this.props.name}</h2>
            <button onClick={this.props.hideCheckList}>
              <CloseIcon />
            </button>
          </div>

          <Form name="Checklist" submit={this.addCheckListHandler} />

          {this.props.checklists.map((checklist) => (
            <Checklist key={checklist.id} {...checklist} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.checklistsReducer.isLoading,
    error: state.checklistsReducer.error,
    checklists: state.checklistsReducer.checklists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChecklists: (id) => dispatch(actions.getChecklists(id)),
    createChecklist: (id, name) => dispatch(actions.createChecklist(id, name)),
    deleteChecklist: (id) => dispatch(actions.deleteChecklist(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
