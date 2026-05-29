import userModel from "../models/userModel.js";

// === Get donor list ===
const getDonorListController = async (req, res) => {
  try {
    const donorData = await userModel
      .find({
        role: "donor",
      })
      .sort({
        createdAt: -1,
      });
    return res.status(200).send({
      success: true,
      totalCount: donorData.length,
      message: "Donor list fetched successfully!",
      donorData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Donor List API!",
      error,
    });
  }
};

// === Get hospital list ===
const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({
        role: "hospital",
      })
      .sort({
        createdAt: -1,
      });
    return res.status(200).send({
      success: true,
      totalCount: hospitalData.length,
      message: "Hospital list fetched successfully!",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Hospital List API!",
      error,
    });
  }
};

// === Get organisation list ===
const getOrganisationListController = async (req, res) => {
  try {
    const organisationData = await userModel
      .find({
        role: "organisation",
      })
      .sort({
        createdAt: -1,
      });
    return res.status(200).send({
      success: true,
      totalCount: organisationData.length,
      message: "Organisation list fetched successfully!",
      organisationData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Organisation List API!",
      error,
    });
  }
};

// ===================================================================================================
// === Delete record ===
const deleteController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id)
    return res.status(200).send({
        success: true,
        message: "Record deleted successfully!"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting record!",
      error,
    });
  }
};

export {
  getDonorListController,
  getHospitalListController,
  getOrganisationListController,
  deleteController,
};
