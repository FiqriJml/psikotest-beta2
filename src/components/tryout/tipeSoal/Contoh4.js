import React from 'react'

export default function Contoh4({contohSoal, noSoal}) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const listItems = numbers.map((number) =>
        <span key={number}>&nbsp;&nbsp; {number} &nbsp;&nbsp;</span>
    );
    return(
        <div className="soal-box">
            <div className="soal">
                <span>0{noSoal}.</span>
                <span>{contohSoal.soal}</span>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>0{noSoal}.&nbsp;&nbsp;{listItems}</span>
        </div>
    )
}