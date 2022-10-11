import { Component } from "react";
import styles from "./List.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import Form from "../form/Form";
import * as actions from "../../store/action";
import Card from "../card/Card";

class List extends Component {
  componentDidMount() {
    this.props.getCards(this.props.id);
  }

  submitHandler = () => {};

  render() {
    console.log(
      this.props.cards.hasOwnProperty(this.props.id) &&
        this.props.cards[this.props.id]
    );
    return (
      <div className={styles.List}>
        <div className={styles.ListHeader}>
          <h2>{this.props.name}</h2>
          <DeleteIcon
            onClick={() => {
              this.props.deleteList(this.props.id);
            }}
            className={styles.DeleteIcon}
          />
        </div>
        {/* {this.props.cards[this.props.id].map((card, i) => (
          <Card key={i} {...card} handleCardDelete={this.deleteCardHandler} />
        ))} */}
        <Form name="Card" submit={this.submitHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.cardsReducer.isLoading,
    error: state.cardsReducer.error,
    cards: state.cardsReducer.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: (id) => dispatch(actions.getCards(id)),
    createCard: (name, id) => dispatch(actions.createCard(name, id)),
    deleteCard: (id) => dispatch(actions.deleteCard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
