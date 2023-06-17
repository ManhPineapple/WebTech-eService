import db from "../models";

const userController = {
  async userInfo(req, res) {
    const user = req.user;
    try {
      const user = db.User.findOne({
        where: {ID_User: user}
      });

      return res.status(200).json({
          status: "ok",
          user
      });
    } catch (error) {
      return res.status(500).json({status:true});
    }
  }
}

export default userController;