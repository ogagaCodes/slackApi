const createError = require("../../helpers/createError");
const { createResponse } = require("../../helpers/createResponse");
const { RESPONSE } = require("../../constants/response");
const { HTTP } = require("../../constants/http");
const service = require("./services");

exports.getUserResponseController = async (req, res, next) => {
  try {
    const { error, message, data : responses } = await service.getResponses(
      req.query
    );
    // build pagination
    const Data = {
      pagination: responses.pagination,
      data: responses.data,
    };
    if (error) {
      return next(
        createError(HTTP.BAD_REQUEST, [
          {
            status: RESPONSE.ERROR,
            message,
            statusCode: 400,
            data: data,
            code: HTTP.BAD_REQUEST,
          },
        ])
      );
    }
    return createResponse(message, Data)(res, 200);
  } catch (err) {
    console.error(err);

    return next(createError.InternalServerError(err));
  }
};
