

const routes = (app) => {
    //create route for words
    app.route('/words')
    .get((req, res) => 
    res.send('GET request successful!'))

    .post((req, res) => 
    res.set('POST request successful!'));

    //create new route to get words by ID
    app.route('/words/:wordID')
    .put((req, res) =>
    res.send('PUT request successful!'))

    .delete((req, res) =>
    res.sent('DELETE request successful!'))
}

export default routes;