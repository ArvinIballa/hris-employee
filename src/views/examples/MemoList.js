import React, { memo, useState } from 'react'

import Memo from './Memo';
import Memoform from './Memoform';


function MemoList() {
    const [memos, setMemos] = useState([]);


    const addMemo = memo => {
        if (![memo.text,memo.text2,memo.text3] || /^\s*$/.test([memo.text,memo.text2,memo.text3])) {
            return;
          }

          const newMemos = [memo, ...memos];

          setMemos(newMemos);
          console.log(memo,...memos);

    };


    const removeMemo = id =>{
        const removeArr = [...memos].filter(memo => memo.id !== id);

        setMemos(removeArr);
    }


    const completeMemo = id => {
        let updatedMemos = memos.map(memo => {
            if (memo.id === id) {
                memo.isComplete = !memo.isComplete
            }
            return memo;
        });
        setMemos(updatedMemos);
    };


    return (
        <div>
            <Memoform onSubmit={addMemo}/>
            <Memo memos={memos} completeMemo={completeMemo} removeMemo={removeMemo}/>
        </div>
    )
}

export default MemoList;
