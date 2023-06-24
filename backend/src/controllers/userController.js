import db from "../models";

const userController = {
  async userInfo(req, res) {
    const user = req.user.id;
    try {
      const dbUser = await db.User.findOne({
        where: {ID_User: user},
        include: [
          {
            model: db.Post,
          },
        ]
      });
      return res.status(200).json({
          status: "ok",
          dbUser
      });
    } catch (error) {
      return res.status(500).json({status:true});
    }
  },

  async updateInfo(req, res) {
    const { fullname, bio, username} = req.body;
    const avatar = req.file;
    try {
      if (!username) {
          return res.status(500).json({
            message: 'Missing required field'
          })
      } else {
          let updateData = {};
          if (avatar.originalname != 'hello.txt') {
            updateData.avatar = avatar.path;
          }
          if (fullname != '') {
            updateData.fullname = fullname;
          }
          if (bio != '') {
            updateData.bio = bio;
          }
          await db.User.update(updateData, { where: { username: username } });

          return res.status(200).json({
              message: "Update info successful!"
          })
      }
    } catch (error) {
        return res.status(500).json({message: 'Some error'});
    }
  }
}

export default userController;