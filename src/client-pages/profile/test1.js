import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProfileLinks from "../../components/profile-links"

const ProfileTest2 = props => {
  return (
    <Layout>
      <SEO title="Profile Test1" />
      <h1>
        Test1 - <FormattedMessage id="translation" />
      </h1>
      <ProfileLinks />
      <p>{JSON.stringify(props)}</p>
    </Layout>
  )
}

export default ProfileTest2
