export const notFoundMiddleware = (req, res) => {
  res.status(404).send('Rout was not found.');
};
