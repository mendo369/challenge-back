function CustomResponse(data, success, message) {
  return {
    data: data,
    success: success,
    message: message,
  };
}

module.exports = CustomResponse;
