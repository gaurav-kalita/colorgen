import React, {useState} from 'react';

import Svg from './component/svg'
import {randomNumbers, decToHex} from './utils';

const App = () => {
    const [number, setNumber] = useState('');
    const [hexArr, setHexArr] = useState([]);
    const [ranN, setRanN] = useState([])
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        let ranNum = randomNumbers(number);
        setRanN(ranNum);
        let hex = decToHex(ranN);
        setHexArr(hex);
    }
    

    const getHexCodes = (e) =>{
        setNumber(e.target.value)
    }

    const squares = hexArr.map((item) =>{
        let sq = []
        sq.push(<Svg  item={item}/>)
        return sq
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={number} required onChange={getHexCodes}/>
                <input type="submit" value="load"/>
            </form>
            {squares}
        </div>
    );
}

export default App;