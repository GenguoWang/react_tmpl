import React from 'react'
import Card from './card'
import css from './column.css'

class Column extends React.PureComponent {
  constructor(props) {
    super(props)
    this.addCard = this.addCard.bind(this)
  }
  addCard() {
    const t = window.prompt()
    this.props.addCard(t)
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const {title, titleColor, cards, moveLeft, moveRight} = this.props
    return <div className={css.column}>
      <div style={{backgroundColor:titleColor}}>{title}</div>
      <div>
        {cards.map((card,i)=>(
          <Card key={i} card={card} moveLeft={()=>moveLeft(i)} moveRight={()=>moveRight(i)}/>
        ))}
      </div>
      <div>
        <button onClick={this.addCard}>Add a card</button>
      </div>
    </div>
  }
}

export default Column