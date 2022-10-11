import { Component } from "react";
import styles from "./Form.module.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    if (this.state.showForm) {
      return (
        <div className={styles.FormContainer}>
          <form
            className={styles.Form}
            onSubmit={(e) => {
              e.preventDefault();
              if (!this.state.value) return;
              this.props.submit(this.state.value);
              this.setState({ value: "" });
            }}
          >
            <input
              type="text"
              value={this.state.value}
              placeholder="Enter List Title"
              onChange={this.handleChange}
            />
            <div className={styles.ButtonContainer}>
              <button>Add {this.props.name}</button>
              <CloseIcon
                onClick={this.toggleForm}
                style={{ cursor: "pointer" }}
              />
            </div>
          </form>
        </div>
      );
    }
    return (
      <div className={styles.FormContainer}>
        <div className={styles.AddForm} onClick={this.toggleForm}>
          <AddIcon />
          <p>Add another {this.props.name}</p>
        </div>
      </div>
    );
  }
}
