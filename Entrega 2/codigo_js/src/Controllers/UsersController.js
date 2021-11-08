

exports.get = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};

exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! user_id: ${id}`);
};

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!' + JSON.stringify(req.body));
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};