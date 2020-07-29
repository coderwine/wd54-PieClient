import React, {useState, useEffect} from 'react';
import './Pies.css';

import Pie from './Pie/Pie';

const Pies = (props) => {

    const [pies, setPies] = useState([])

    // const pumpkinPie = 
    // {
    //     nameOfPie: 'Pumpkin',
    //     baseOfPie: 'Pumpkin Puree',
    //     crust: 'Pastry',
    //     timeToBake: 50,
    //     servings: 8,
    //     rating: 4
    // }

    // const testPies =[
    //     {
    //         nameOfPie: 'Pumpkin',
    //         baseOfPie: 'Pumpkin Puree',
    //         crust: 'Pastry',
    //         timeToBake: 50,
    //         servings: 8,
    //         rating: 4,
    //         id: 1
    //     },
    //     {
    //         nameOfPie: 'Apple',
    //         baseOfPie: 'Jam',
    //         crust: 'Graham Cracker',
    //         timeToBake: 30,
    //         servings: 6,
    //         rating: 4,
    //         id: 2
    //     },
    //     {
    //         nameOfPie: 'Chocolate',
    //         baseOfPie: 'Pudding',
    //         crust: 'Pastry',
    //         timeToBake: 20,
    //         servings: 8,
    //         rating: 5,
    //         id: 3
    //     },
    // ]

    useEffect(() => {
        fetch('http://localhost:3001/pies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setPies(json))
        .catch(err => console.log(err))
    }, []);

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>

            <tbody>
                {/* Pie Data will go */}
                <Pie pie={pies}/>
            </tbody>
        </table>
    )

}

export default Pies;