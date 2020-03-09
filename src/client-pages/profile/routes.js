import React from "react"
import { Router } from "@reach/router"

import ProfileStart from "./start"
import ProfileTest1 from "./test1"
import ProfileTest2 from "./test2"

const ProfileRoutes = props => {
  return (
    <Router>
      <ProfileTest1 path="test1" />
      <ProfileTest2 path="test2" />
      <ProfileStart path="start" default />
    </Router>
  )
}

export default ProfileRoutes
