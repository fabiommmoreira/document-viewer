import PropTypes from 'prop-types';

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
  thumbnails: PropTypes.arrayOf(IThumbnail),
};

const IArtboard = {
  name: PropTypes.string,
  isArtboard: PropTypes.boolean,
  files: PropTypes.arrayOf(IFile),
};

const IDocument = {
  name: PropTypes.string,
  artboards: PropTypes.arrayOf(IArtboard),

};

const ITopBar = {
  children: PropTypes.node,
};

const ITile = {
  caption: PropTypes.string,
  thumbnail: IThumbnail,
};

export {
  IDocument, IArtboard, ITopBar, ITile,
};
