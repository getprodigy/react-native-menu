const PropTypes = require('proptypes');

module.exports = (React) => {
  const { shape, func } = PropTypes;

  const IMenuController = shape({
    open: func.isRequired,
    close: func.isRequired,
    toggle: func.isRequired,
    registerOptionsElement: func.isRequired
  });

  return { IMenuController };
};

