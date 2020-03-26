const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')  // unica informacao que vou retornar pro meu front-end
            .first(); // retorna apenas uma unica ONG, assim ele não me retorna um array, só um resultado.

        if(!ong) {
            return response.status(400).json({ error: 'No ONG found with this ID!' });
        }

        return response.json(ong);

    }
}