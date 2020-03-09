import React, { useState } from "react"
import { useIntl, changeLocale } from "gatsby-plugin-intl"

const ChangeLocale = props => {
  const intl = useIntl()
  const [currentLocale, setCurrentLocale] = useState(intl.locale)

  const handleChange = e => {
    console.log(`Change locale to ${e.target.value}`)
    setCurrentLocale(e.target.value)
    changeLocale(e.target.value)
  }

  return (
    <form>
      <select id="lang" onChange={handleChange} defaultValue={currentLocale}>
        <option value="ar">عربى</option>
        <option value="en">English</option>
        <option value="sv">Svenska</option>
      </select>
    </form>
  )
}

export default ChangeLocale
