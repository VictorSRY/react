import React from 'react'
import Pirson from './Pirson/Pirson'

const pirsons = (props) => props.pirson.map(
    (pirson, index) => {
        console.log(pirson, index)
        return (<Pirson name={pirson.name} age={pirson.age} call={() => props.deletEle(index)} key={index} />)
    }
)

export default pirsons