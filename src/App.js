import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {Footer} from './components/footer/footer.component';
import {GoToTop} from './components/go-to-top/go-to-top.component';
// import {Card} from './components/card/card.component';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters : [

            ],
            searchField : '',
            
        }
    }
    
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('https://programming-quotes-api.herokuapp.com/quotes')
        .then(response => response.json())
        .then(quotes=> this.setState({monsters: quotes}))
    }
  
    render() {
        // Destruct
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster => 
            monster.author.toLowerCase().includes(searchField.toLowerCase()) ||
            monster.en.toLowerCase().includes(searchField.toLowerCase())
        )
        if (this.state.monsters.length > 0) {
            return (
                <div className="App">
                    <header className="App-header">
                        <div><div className="logo">Robo <span>QUOTES</span></div>
                            <input 
                                type="search"
                                placeholder="Search For Quote"  
                                onChange={e => 
                                    // Coments lesson 22
                                    this.setState({ searchField: e.target.value })
                                }
                            />
                        </div>
                    </header>
                    <CardList monsters={filteredMonsters} total={filteredMonsters.length} search={searchField}/>
                    <GoToTop />

                    <Footer/>
                </div>
            )
        }
        return (
            <div className="loader">
                <img src="https://samherbert.net/svg-loaders/svg-loaders/audio.svg" alt="" />
            </div>
        )
    }
}

export default App;
