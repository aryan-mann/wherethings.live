exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/thing",
    toPath: "/",
    isPermanent: true,
    force: true,
  });
};
