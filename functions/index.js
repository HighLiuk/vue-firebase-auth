const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp()

const { getUserByEmail, setCustomUserClaims } = admin.auth()

async function addAdminRole({ email }) {
  // get user and add custom claim (admin)
  const { uid } = await getUserByEmail(email)
  await setCustomUserClaims(uid, { admin: true })

  return {
    message: `Success! ${email} has been made an admin`,
  }
}

module.exports = {
  addAdminRole: functions.https.onCall(addAdminRole),
}
