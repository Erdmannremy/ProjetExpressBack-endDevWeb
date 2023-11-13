
const otherController = {

    getContactPage : (req, res) => {

        res.render("server.js", { page : "pages/contact/contact.ejs"})

    },

    postContactPage : (req, res) => {
        console.log(req.body)
        res.json("ok")
    }

}


module.exports = otherController