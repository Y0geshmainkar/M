import React from 'react'
import './sidebarOption.css'



export default function SidebarOption({Icon, title, imageUrl}) {
  return (
    <div className='sidebar-option-contenier'>

      {/* {Icon && <Icon className="sidebarOption-icon"></Icon>} */}

      {Icon ? ( <Icon className="sidebarOption-icon"/>) : ( imageUrl && <img src={imageUrl} alt='' className='sidebarOption-icon-img'/> )}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}
