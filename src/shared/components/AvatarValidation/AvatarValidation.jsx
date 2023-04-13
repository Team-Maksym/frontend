export const AvatarValidation = (originalLink) => {
  if (originalLink) {
    if (originalLink.includes('drive.google.com')) {
      const pos1 = originalLink.indexOf('d/') + 2;
      const pos2 = originalLink.indexOf('/view');
      return `https://drive.google.com/uc?export=view&id=${originalLink.slice(pos1, pos2)}`;
    } else {
      return originalLink;
    }
  }
};
