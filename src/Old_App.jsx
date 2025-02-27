import Contact from "./assets/Contact";
import Hello from "./assets/Hello";
import Counter from "./assets/Counter";

function Old_App(){
  const helloData = [
    {name : 'Anirach' , message : 'Hi there'},
    {name : 'Tom' , message : 'Hello'}
  ]

  return (
    <div className="App">
      <Counter/>
      {helloData.map((data,index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email = "WWW@gmail.com" phone="0123456789"/>
    </div>
  )
}
export default Old_App