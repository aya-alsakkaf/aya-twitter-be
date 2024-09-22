const notFoundHandler = (request, response, next) => {
  try {
    return response.status(404).json({ error: "Path not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = notFoundHandler;
