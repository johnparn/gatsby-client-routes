import React from "react"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProfileLinks from "../../components/profile-links"
import ChangeLocale from "../../components/change-locale"

const ProfileStart = props => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title="Profile Start" />
      <h1>
        Start - <FormattedMessage id="translation" />
      </h1>
      <ProfileLinks />
      <p>{JSON.stringify(props)}</p>
    </Layout>
  )
}

export default ProfileStart
