const Responses = require("./model");
const { getPaginatedRecords } = require("../../helpers/paginate");

exports.getResponses = async (data) => {
  try {
    const responses = await getPaginatedRecords(Responses, {
      limit: data.limit,
      page: data.page,
      data: {},
      sortFilter : {createdAt: -1},
    });
    return {
      error: false,
      data: responses,
    };
  } catch (err) {
    console.log(err?.response?.data || err);
    return {
      error: true,
      message: "Error getting responses",
      data: err?.response?.data || err,
    };
  }
};
