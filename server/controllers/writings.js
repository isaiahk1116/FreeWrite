import Writing from '../models/writing.js';
import mongoose from 'mongoose';

export const getWritings = async (req, res) => {
    try {
        const writings = await Writing.find();
        
        res.status(200).json(writings);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createWriting = async (req, res) => {
    const writing = req.body;

    const newWriting = new Writing(writing);

    try {
        await newWriting.save();
        res.status(201).json(newWriting);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateWriting = async (req, res) => {
    const { id: _id } = req.params;

    const writing = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedWriting = await Writing(_id, { ...writing, _id }, { new: true });

    res.json(updatedWriting);
}

export const deleteWriting = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'No writing with that id'});

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Writing deleted successfully' });
}