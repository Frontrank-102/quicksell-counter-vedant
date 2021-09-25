import React from "react"
import CounterValueComponent from "./CounterValueComponent";
function CounterComponent(
) {
  const [counter,setCounter]= React.useState(1)
  const [isLoading,setIsLoading]= React.useState(false)
  const setData = async (value) => {
    setIsLoading(true)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "counter1": value
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", requestOptions)
  .then(response => { 
    setIsLoading(false)
    response.text()
  } )
  .then(result => {
    setIsLoading(false)
  })
  .catch(error => {
    setIsLoading(false)
    console.log('error', error)
  });

  }
  React.useEffect(() => {
    setData()
  }, [])
  const decrement = async () => {
    if (counter===1)
    return

    await setData(counter - 1)
    setCounter(counter - 1)
    
  }
  const increment = async () => {
    if (counter===1000)
    return

    await setData(counter +1)
    setCounter(counter + 1)
   
  }


  return (
    <div className="App">
      
      { 
        isLoading &&
        
<div>
<div className="loader" >
        </div>
<h2 style={{fontFamily:'sans-serif', border:1,fontWeight: 'normal',fontSize: 12 }}>Saving counter value</h2>
</div>
      }
       <div className="button__wrapper">
        <button style={{height:50, width:50, borderWidth:0.5
        , fontSize: 16, borderTopLeftRadius:10, borderBottomLeftRadius:10,
        backgroundColor:'white',fontFamily:'sans-serif',
        borderColor:'#AB4E52', color: '#AB4E52',fontWeight: 'bold'
      }} onClick={decrement}>-</button>
        <input style={{height:46,width:50, fontSize:16, textAlign:'center', 
        backgroundColor:'	#FFE4E1',borderColor:'#AB4E52', color: '#AB4E52',borderWidth:0.5,
        fontWeight: 'bold',fontFamily:'sans-serif'
      }} 
        type='text' value={counter} onChange={async(val)=> {
             console.log(val.target.value, 'hi')
             const inputValue= val.target.value
             if(inputValue<1 || inputValue>1000)
             return

             await setData(inputValue)
             setCounter(inputValue)
             
        }}/>
        <button style={{height:50, width:50,borderColor:'#AB4E52', borderWidth:1
        , fontSize: 16, borderTopRightRadius:10, borderBottomRightRadius:10,
        backgroundColor: '#AB4E52', color: 'white', fontWeight: 'bold',fontFamily:'sans-serif'
      }}
        onClick={increment}>+</button>
      </div> 
      <CounterValueComponent countValue={counter}/>
    </div>
  );
}

export default CounterComponent;
