const Clock = props => {
  //hook
  const [date, setDate] = useState(new Date())
  
  //useEffect hook
  useEffect(() => {
    timerID = setInterval( 
      () => tick(),
      1000
    )
    
    return () => {
      clearInterval(timerID)
    }
  }, [])

  function tick() {
    setDate(new Date())
  }
 
  return (
    <div>
      <h1>Orologio</h1>
      <h2>sono le {date.toLocaleTimeString()}.</h2>
    </div>
  )
}