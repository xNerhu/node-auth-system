export const centerImage = (width: string, height: string) => `
    background-size: ${width} ${height};
    background-position: center;
    background-repeat: no-repeat;
  `;

export const customImage = (
  width: string,
  height: string,
  left: string,
  top: string,
) => `
    background-size: ${width} ${height};
    background-position: ${left} ${top};
    background-repeat: no-repeat;
  `;

export const coverImage = () => `
    background-size: cover;
    background-repeat: no-repeat;
  `;

export const backImage = (url: string, position = 'center') => `
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-position: ${position};
  background-attachment: fixed;
  background-image: url(${url});

  ${coverImage()};
  `;
