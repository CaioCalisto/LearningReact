import { useQuery } from "react-query"
import axios from "axios"

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueries = ({ email }) => {
  
  const {data: user} = useQuery(['user', email], () => fetchUserByEmail(email))
  
  const channelId = user?.data.channelId

  const {data: channel} = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId),{
    enabled: !!channelId
  })

  if (channel != null){
    return (
      <>
        <h1>{channel?.data.id}</h1>
        <h1>Coourses</h1>
        {channel?.data.courses.map((course) => (
          <h3>{course}</h3>
        ))}
      </>
    )
  }

  return (
    <>
      <h1>Loading...</h1>
    </>
  )
}