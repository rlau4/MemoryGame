import React, {Component} from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import Card from "./components/Card";
import cards from "./cards.json";

class App extends Component {

    state = {
        cards,
        score: 0,
        highscore: 0
    };

    endGame = () => {
        if (this.state.score > this.state.highscore) {
            this.setState({ highscore: this.state.score });
        }
        this.state.cards.forEach(card => {
            card.count = 0;
        });
        alert(`Game Over :( \nscore: ${this.state.score}`);
        this.setState({ score: 0 });
        return true;
    }

    clickCount = id => {
        this.state.cards.find((selected, i) => {
            if (selected.id === id) {
                if (cards[i].count === 0) {
                    cards[i].count = cards[i].count + 1;
                    this.setState({ score: this.state.score + 1 });
                    this.state.cards.sort(() => Math.random() - 1)
                    return true;
                }
            } else {
                this.endGame();
            }
        })
    };

    render() {
        return (
            <Wrapper>
                <Header score={this.state.score} highscore={this.state.highscore}>Memeory Game</Header>
                {this.state.cards.map(card => (
                    <Card
                        clickCount={this.clickCount}
                        id={card.id}
                        key={card.id}
                        imgage={cards.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;