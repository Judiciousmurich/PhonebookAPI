import { getContacts, getContact, createContact, updateContact, deleteContact} from "../Controller/phoneController.js"

const phoneRoutes = (app) => {

    // Routes
    app.route('/contacts')
        .get(getContacts)
        .post(createContact)

    app.route('/contacts/:id')
        .get(getContact)
        .put(updateContact)
        .delete(deleteContact)
}

export default phoneRoutes;