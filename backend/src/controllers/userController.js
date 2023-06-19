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
  }
}

export default userController;