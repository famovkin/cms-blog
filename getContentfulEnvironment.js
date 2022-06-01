const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-jA1egSMYv0pkP_MS4NX6TdFTrZPbwmRV_Y3YlVvGWac',
  })

  return contentfulClient
    .getSpace('x6qlslf70m1n')
    .then(space => space.getEnvironment('master'))
}