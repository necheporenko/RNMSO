export const getYouTubeVideoId = href => (
  href.substring(href.indexOf("/watch?v=") + 9)
);