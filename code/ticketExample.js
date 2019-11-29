const Ticket = props => {
  let { user, groupsWithConnections, ticket, groups } = props

  let {
    id,
    name,
    location,
    note,
    status,
    type,
    time,
    owner,
    editConnection
  } = ticket

  //hooks
  let [modalsOpened, setModalsOpened] = useState({ location: false, decline: false })
  let [description, setDescription] = useState('')
  let [locationTree, setLocationTree] = useState([])
  let [alert, setAlert] = useState({ text: '', type: '' })
  let [cardType, setCardType] = useState({
    title: '',
    cardStatus: { text: '', type: '' },
    buttons: []
  })

  useEffect(() => {
    switch (type) {
      //assign ticket style
    }
  }, [ticket, groupsWithConnections])

  useEffect(() => {
    if (!groups.length && modalsOpened.location) props.initGroups()
  }, [modalsOpened])

  //other functions and handlers

  return (
    <div className='w-full lg:max-w-sm rounded overflow-hidden shadow-lg bg-white m-4'>
      //JSX structure
    </div>
  )
}
