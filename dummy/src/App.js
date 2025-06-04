import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [text,setText] = useState('');


  // variation one -> for every rendering
  // useEffect(() => { 
  //   console.log("UI RENDERING DONE....");
  //  });


  //variation 2 -> Only for first rendering
  // useEffect(() => { 
  //   console.log("UI RENDERING DONE...");
  //  },[]);

  //variation 3 -> On first rendering + whenever dependecncy changes
  // useEffect(() => { 
  //   console.log("Change Observed");
  //  },[text]);

  // variation 4 -> to handle unmounting of the component

  useEffect(() => { 
    console.log("Event listner added");

    return () => { 
      console.log("Event listner removed");
     }
   },[text]);

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }
  return (
    <div className='App'>
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
