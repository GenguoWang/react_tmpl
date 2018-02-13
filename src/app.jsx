import React from 'react'
import Column from './column'
import css from './app.css'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.addCard = this.addCard.bind(this)
    this.moveCard = this.moveCard.bind(this)
    const oldState = localStorage.getItem('state')
    if(oldState !== undefined && oldState !== null) {
      this.state = JSON.parse(oldState)
    } else {
      this.state = {
        columns : [
          {
            title: "Winnie",
            titleColor: "#8E6E95",
            cards: [
              {content: "content1"},
              {content: "content2"},
            ],
          },
          {
            title: "Bob",
            titleColor: "#39A59C",
            cards: [
              {content: "content1"},
              {content: "content2"},
            ],
          },
          {
            title: "Thomas",
            titleColor: "#344759",
            cards: [
              {content: "content1"},
              {content: "content2"},
            ],
          },
          {
            title: "George",
            titleColor: "#E8741E",
            cards: [
              {content: "content1"},
              {content: "content2"},
            ],
          },
        ]
      }
    }
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  addCard(i){
    return (content)=>{
      console.log(content)
      const columns = [...this.state.columns]
      columns[i].cards = columns[i].cards.concat([{content}])
      console.log(columns)
      localStorage.setItem("state", JSON.stringify({columns}))
      this.setState({columns})
    }
  }
  moveCard(fromColumn, fromCard, toColumn) {
    console.log(fromColumn, fromCard, toColumn)
    const columns = [...this.state.columns]
    const card = columns[fromColumn].cards.splice(fromCard,1)
    console.log(card)
    columns[toColumn].cards = [...columns[toColumn].cards, ...card]
    localStorage.setItem("state", {columns})
    localStorage.setItem("state", JSON.stringify({columns}))
    this.setState({columns})
  }
  render() {
    return <div className={css.app} ref="rootNode">
      {this.state.columns.map((column,i)=>(
        <Column
          addCard={this.addCard(i)}
          moveLeft={(cardIndex)=>this.moveCard(i,cardIndex,i-1)}
          moveRight={(cardIndex)=>this.moveCard(i,cardIndex,i+1)}
          title={column.title} titleColor={column.titleColor} cards={column.cards} key={i}/>
      ))}
    </div>
  }
}

export default App
