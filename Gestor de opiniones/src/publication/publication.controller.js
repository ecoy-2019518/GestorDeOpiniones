'use strict'

import Publication from './publication.model.js'
import User from '../user/user.model.js'
import Category from '../category/category.model.js'
import { checkUpdate } from '../utils/validator.js'

export const add = async (req, res) => {
    try {
        let data = req.body
        let user = await User.findOne({ _id: data.user })
        if (!user) return res.status(404).send({ message: 'User not found' })
        let category = await Category.findOne({ _id: data.category })
        if (!category) return res.status(404).send({ message: 'Category not found' })
        let publication = new Publication(data)
        await publication.save()
        return res.send({ message: 'The publication was added successfully' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error when adding publication', err: err })
    }
}

export const deleteP = async (req, res) => {
    try {
        let { id } = req.params;
        let uid = req.user._id

        let publication = await Publication.findOne({ _id: id, user: uid });
        if (!publication)
            return res.status(404).send({ message: 'The publication is not found or is not yours' });

        let deletePublication = await Publication.findOneAndDelete({ _id: id, user: uid });
        if (!deletePublication)
            return res.status(500).send({ message: 'Error deleting publication' });

        return res.send({ message: 'Publication deleted successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error deleting publication', err: err });
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let uid = req.user._id

        let updated = checkUpdate(data, id)
        let publication = await Publication.findOne({ _id: id, user: uid });
        if (!publication) return res.status(404).send({ message: 'The publication is not found or is not yours' });
        if (!updated) return res.status(400).send({ message: 'Have submitted some data that cannot be updated or missing data' })
        let updatePublication = await Publication.findOneAndUpdate(
        {_id: id},
        data,
        {new: true}
        )
        if (!updatePublication) return res.status(401).send({ message: 'Publication not found and not updated' })
        return res.send({ message: 'Publication updated successfully ', updatePublication })

    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating Publication', err: err })
    }
}