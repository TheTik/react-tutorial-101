// [Step 1] import useMemo
import React, { useState, memo, useMemo } from 'react'

// const fibonacci = (n) => {     
//     return n <= 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
// }

// const fibonacci = (num) => {
//     if (num <= 1) return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }

const fibonacci = (num) => {    
    var a = 1, b = 0, temp;  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }  

    for (let i = 0; i < 1000; i++) console.log("Fibonacci Calculator.");

    console.log("Result : ", b)
    return b;
  }

const UseMemoDemo = () => {
    const [count1, setCount1] = useState(35);
    const [count2, setCount2] = useState(0);

    // [Step 1]
    //const fibo = fibonacci(count1);

    // [Step 2]
    // useMemo : Cache a component rendered.
    // useMemo ใช้สำหรับคำนวณค่าที่จะเก็บไว้ในตัวแปร และจะคำนวณค่าใหม่เมื่อค่าที่ใช้ในการคำนวณมีการเปลี่ยนแปลง
    const fibo = useMemo(() => {
        return fibonacci(count1);
    },[count1]);

    return (
        <div>
            <h1>Count1 : {count1}</h1>
            <h1>Fibonacci : {fibo}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Add count 1</button>
            <hr /><Child /><hr />
            <h1>Count2 : {count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}>Add count 2</button>
        </div>
    )
}

const Child = memo(() => {
    for (let i = 0; i < 1000; i++) console.log("Child rendered...");
    return (<div>Child rendered...</div>)
});

export default UseMemoDemo