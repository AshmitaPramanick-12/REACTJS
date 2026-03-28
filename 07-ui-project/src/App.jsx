
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },

    {
      img:'https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'UnderServed'
    },

    {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'orange',
      tag:'UnderBanked'

    },
    {
      img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'purple',
      tag:'BossInCompany'

    }
  ]
  return (
    // <div className='bg-red-600'>
      <div>
      {/* App */}

      <Section1 user={users}/>
      <Section2/>
    </div>
  )
}

export default App
