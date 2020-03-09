/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const nodePath = require("path")
const getFilename = filepath =>
  filepath.substring(
    filepath.substring(0, filepath.length - 1).lastIndexOf("/") + 1,
    filepath.length - 1
  )

exports.onCreatePage = ({ page, actions }) => {
  const { path, matchPath, context } = page
  const { createPage, deletePage } = actions

  // **** Client only (run-time) routes ****

  const isPlainRoute = /^\/profile\//.test(path)
  const isLocaleRoute = /^\/[a-z]{2,3}\/profile\//.test(path) // /sv/profile/, /ar/profile/ ...

  if (isPlainRoute || isLocaleRoute) {
    const currentFilename = getFilename(path)
    const component = nodePath.resolve(
      `./src/client-pages/profile/${currentFilename}.js`
    )

    const { intl } = context
    deletePage(page)
    createPage({
      ...page,
      component,
      matchPath: `${path}`,
      context: {
        ...context,
        intl: {
          ...intl,
          // redirect: isLocaleRoute,
          routed: isLocaleRoute,
        },
      },
    })
  }
}
