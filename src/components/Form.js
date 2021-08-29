function Form({f,l,x,y}) {
  
  return (
    <form >
      <input type="text" value={f} onChange={x}/>
      <input type="text" value={f} onChange={y}/>
      <button type="submit">Submit</button>
    </form>);}

export default Form;
