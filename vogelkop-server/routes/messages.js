const express = require("express")
const router = express.Router({mergeParams:true}) // merge params allows access to id of this router
const {createMessage,getMessage,deleteMessage}=require("../handlers/messages")





//prefix /api/users/:id/messages
router.route("/").post(createMessage)
router
    .route("/:message_id")
    .get(getMessage)
    .delete(deleteMessage)

module.exports = router