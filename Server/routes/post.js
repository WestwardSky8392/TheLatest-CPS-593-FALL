const express = require('express')
const posts = require("../models/upload")
const router = express.Router()

router
    .get('/', async (req, res) => {
        try {
        const post = await posts.getPost()
        res.send(post); 
        } catch (err) {
        res.status(500).send({ message: err.message })
        }
    })

    .post('/post', async (req, res) => {
        try {
        const { user_id, content } = req.body; 

        const post = await upload.uploadpost(user_id, content, post_id)
        res.status(201).send(post); 
        } catch (err) {
        res.status(500).send({ message: err.message })
        }
    })


    .delete('/:post', async (req, res) => {
        try {
        const { post_id } = req.params; 
        const Delete = await upload.deleteUpload(post_id);

        if (Delete) {
            res.send({ success: true, message: 'Post deleted' })
        } else {
            res.status(404).send({ success: false, message: 'Post  wasnot found' })
        }
        } catch (err) {
        res.status(500).send({ message: err.message })
        }
    })
    
    .put('/:post', async (req, res) => {
        try {
            const { post_id } = req.params;
            const update = req.body;
    
            if (!update || Object.keys(update).length === 0) {
                return res.status(400).send({ message: 'No updates provided' })
            }
    
            const works = await uploadModel.updateUpload(post_id, update);
    
            if (works) {
                res.status(200).send({ message: 'Upload updated successfully' })
            } else {
                res.status(404).send({ message: 'Upload not found' })
            }
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    })

module.exports = router