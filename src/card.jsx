import React from 'react'
import css from './card.css'

class Card extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    const {card,moveLeft,moveRight} = this.props
    return <div className={css.card}>
      <span onClick={moveLeft}> &lt; </span> {card.content} <span onClick={moveRight}> &gt; </span>
    </div>
  }
}

export default Card