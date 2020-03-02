import { gql } from 'apollo-boost';

const GET_DOCUMENT = (id) => gql`
{
  share(shortId: "${id}") {
    shortId
    version {
      document {
        name
        artboards {
          entries {
            name
            isArtboard
            files {
              url
              height
              width
              scale
              thumbnails {
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
`;

export default GET_DOCUMENT;
