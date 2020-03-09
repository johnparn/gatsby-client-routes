import React from "react"
import { Link } from "gatsby-plugin-intl"

const ProfileLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/profile/start">To profile/start</Link>
      </li>
      <li>
        <Link to="/profile/test1">To profile/test1</Link>
      </li>
      <li>
        <Link to="/profile/test2">To profile/test2</Link>
      </li>
    </ul>
  )
}

export default ProfileLinks
