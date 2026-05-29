import userModel from "../models/userModel.js";

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.body.userId);
    // === Check Admin ===
    if (user?.role !== "admin") {
      return req.status(401).send({
        success: false,
        message: "Auth Failed!",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Auth Failed",
      error,
    });
  }
};

export default adminMiddleware;
