const createError = require("../../helpers/createError");
const { createResponse } = require("../../helpers/createResponse");
const { RESPONSE } = require("../../constants/response");
const { HTTP } = require("../../constants/http");
const service = require("./services");
const app = require("../../server")
const { listenForEvents } = require("./events/message.listener")

exports.botController = async (req, res, next) => {
  try {
    const { error, message, data } = await service.startBot(
      req.body
    );
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
    return res.json(data);
  } catch (err) {
    console.error(err);

    return next(createError.InternalServerError(err));
  }
};

exports.messageController = async (req, res, next) => {
  try {
    const { error, message, data } = await listenForEvents(
      app
    );
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
    return res.json(data);
  } catch (err) {
    console.error(err);

    return next(createError.InternalServerError(err));
  }
};
