import React from "react"
function CounterValueComponent(props) {
  
  const [countValue, setCountValue ] = React.useState(props.countValue || 1)
  const getData = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json", requestOptions)
      .then(response => response.text())
      .then(result =>{ 
        setCountValue(result || props.countValue)
        })
      .catch(error => console.log('error', error));
  }
  React.useEffect(() => {
    setCountValue(props.countValue)
    //  getData()
  }, [props.countValue])
  return (
    <div className="App">
       <h3 style={{fontFamily:'sans-serif', fontSize:15, }}>Counter value</h3>
       <h4 style={{fontFamily:'sans-serif', fontSize:15, fontWeight: 'normal', }}>{countValue}</h4>  
    </div>
  );
}

export default CounterValueComponent;
