export const getDistance = (coor1, coor2) => {
  if (!coor1 || !coor2) return;
  return Math.sqrt((coor1[0] - coor2[0]) * (coor1[0] - coor2[0])
    + (coor1[1] - coor2[1]) * (coor1[1] - coor2[1]));
};

export const getFeatureByUid = (source, id) => {
  if (!source || !id) return;
  return source.getFeatures().find(feature => feature.ol_uid === id);
};