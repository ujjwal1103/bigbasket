import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const Protected = (props) => {
    const {Component} = props
    const navigate = useNavigate()

    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(!login){
            navigate('/login')
        }
    })
  return (
    <div>
      <Component/>
    </div>
  )
}

export default Protected