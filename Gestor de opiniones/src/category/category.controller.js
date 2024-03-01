import { checkUpdate } from '../utils/validator.js';
import Category from './category.model.js'

export const add = async (req, res) => {
    try {
        let data = req.body
        let categoryExist = await Category.findOne({ name: data.name });
        if (categoryExist) return res.status(400).send({ message: 'Category with this name already exists' });
        
        if (!data.name || !data.description) return res.status(400).send({ message: 'You must send all the parameters' })

        let category = new Category(data)
        await category.save()
        return res.send({ message: 'A new category was created' })
    } catch (error) {
        console.error(error)
        return res.status(500).send({ message: 'Error saving category', err: err})
    }
}