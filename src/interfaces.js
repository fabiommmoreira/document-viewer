import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

const IThumbnail = {
  url: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

const IFile = {
  url: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  scale: PropTypes.number,
  thumbnails: PropTypes.arrayOf(PropTypes.shape(IThumbnail)),
};

const IArtboard = {
  name: PropTypes.string,
  isArtboard: PropTypes.boolean,
  files: PropTypes.arrayOf(PropTypes.shape(IFile)),
};

const IDocument = {
  history: ReactRouterPropTypes.history,
  location: ReactRouterPropTypes.location,
  match: ReactRouterPropTypes.match.isRequired,
  route: ReactRouterPropTypes.route,
};

const IArtboardPage = {
  data: PropTypes.shape(IArtboard),
  handleClose: PropTypes.func,
  handlePrevious: PropTypes.func,
  handleNext: PropTypes.func,
  index: PropTypes.number,
  total: PropTypes.number,
};

const ITopBar = {
  children: PropTypes.node,
};

const IPageWrapper = {
  children: PropTypes.node,
};

const ITile = {
  caption: PropTypes.string,
  thumbnail: PropTypes.shape(IThumbnail),
  onClick: PropTypes.func,
};

const ITiles = {
  entries: PropTypes.arrayOf(PropTypes.shape(ITile)),
  openEntry: PropTypes.func,
};

const ICaption = {
  text: PropTypes.string,
};

const IButton = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

const INavigation = {
  current: PropTypes.number,
  total: PropTypes.number,
  handlePrevious: PropTypes.func,
  handleNext: PropTypes.func,
};

const IResponsiveImg = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  contentWidth: PropTypes.number,
  contentHeight: PropTypes.number,
  contentOffset: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  alt: PropTypes.string,
};

export {
  IDocument,
  IArtboardPage,
  IArtboard,
  ITopBar,
  IPageWrapper,
  ITile,
  ITiles,
  ICaption,
  IThumbnail,
  IButton,
  INavigation,
  IResponsiveImg,
};
