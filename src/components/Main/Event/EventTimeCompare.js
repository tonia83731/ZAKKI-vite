export const compareDatesNewToOld = (objA, objB) => {
  const dateA = new Date(objA.date);
  const dateB = new Date(objB.date);
  return dateB - dateA;
}

export const compareDatesOldToNew = (objA, objB) => {
  const dateA = new Date(objA.date);
  const dateB = new Date(objB.date);
  return dateA - dateB;
}