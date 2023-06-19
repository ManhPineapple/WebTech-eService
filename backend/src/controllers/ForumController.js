import db from '../models/index.js';

const forumController = {
    async getAllPost (req, res) {
        try {
            let listOfPost = await db.Post.findAll({
                limit: 10,
                order: [['createdAt', 'DESC']],
                include: [
                    {
                        model: db.User,
                    },
                    {
                        model: db.Comment,
                        include: [
                            {model: db.User,}
                        ]
                    }
                ]
            });
            return res.status(200).json({
                status: "ok",
                listOfPost
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({status:true});
        }
    },

    async getMyPost (req, res) {
        try {
            let listOfPost = await db.Post.findAll({
                where: {ID_User: req.query.id},
                limit: 10,
                order: [['createdAt', 'DESC']],
            });

            return res.status(200).json({
                status: "ok",
                listOfPost
            });
        } catch (error) {
            return res.status(500).json({status:true});
        }
    },

    async createPost(req, res) {
        try {
            if (!req.body.caption) {
                return res.status(500).json({
                    status: false,
                    message: 'Missing required field'
                })
            } else {
                let post = await db.Post.create({
                    ID_User: req.user.id,
                    content: req.body.caption,
                    postImage: req.file.path,
                    likes: 0,
                })

                return res.status(200).json({
                    status: "ok",
                    post,
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({status:true});
        }
    },

    async createComment(req, res) {
        try {
            if (!req.body.content || !req.body.ID_Post) {
                return res.status(500).json({
                    status: false,
                    message: 'Invalid Input'
                })
            } else {
                let comment = await db.Comment.create({
                    ID_User: req.user.id,
                    content: req.body.content,
                    ID_Post: req.body.ID_Post,
                    likes: 0,
                })
                return res.status(200).json({
                    status: "ok",
                    comment,
                    message: "Success"
                })
            }
        } catch (error) {
            return res.status(500).json({status:true});
        }
    },

    async updatePost(req, res) {
        try {
            if (!req.body.ID_Post) {
                return res.status(500).json({
                    message: 'Missing required field'
                })
            } else {
                await db.Post.update(
                {
                    ID_User: req.user.id,
                    content: req.body.caption,
                    postImage: req.file.path,
                    likes: 0,
                },
                {
                    where: {ID_Post: req.body.ID_Post},
                })

                return res.status(200).json({
                    status: "ok",
                    message: "Post is waiting for check again!"
                })
            }
        } catch (error) {
            return res.status(500).json({status:true});
        }
    },

    async updateComment(req, res) {
        try {
            if (!req.body.ID_Comment || !req.body.content) {
                return res.status(500).json({
                    status: false,
                    message: 'Missing required field'
                })
            } else {
                let comment = await db.Comment.findOne({
                    where: {ID_Comment: req.body.ID_Comment}
                })
                comment = await db.Comment.update(
                {
                    content: req.body.content,
                },
                {
                    where: {ID_Comment: req.body.ID_Comment},
                })

                return res.status(200).json({
                    status: "ok",
                    message: "Success"
                })
            }
        } catch (error) {
            return res.status(500).json({status:true});
        }
    },

    async deletePost (req, res) {
        console.log(req.body.id);
        try {
            if (!req.body.id) {
                return res.status(500).json({
                    status: false,
                    message: 'Missing required field'
                })
            } else {
                console.log('delete');
                await db.Post.update(
                {
                    status: 'deleted'
                },
                {
                    where: {ID_Post: req.body.id}
                })

                return res.status(200).json({
                    status: "ok",
                    message: 'Delete Post successfully'
                })
            }
        } catch (error) {
            return res.status(500).json({status:true});
        }
    },

    async deleteComment (req, res) {
        try {
            if (!req.query.id) {
                return res.status(500).json({
                    status: false,
                    message: 'Missing required field'
                })
            } else {
                await db.Comment.destroy({
                    where: {
                        ID_Comment: req.query.id,
                    }
                })

                return res.status(200).json({
                    status: "ok",
                    message: 'Delete Comment successfully'
                })
            }
        } catch (error) {
            return res.status(500).json({status:true});
        }
    },
}

export default forumController