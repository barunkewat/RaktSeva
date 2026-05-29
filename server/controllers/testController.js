export const testController = (req, res) => {
    res.status(200).send({
      message: "Welcome test route",
      success: true,
    });
  };