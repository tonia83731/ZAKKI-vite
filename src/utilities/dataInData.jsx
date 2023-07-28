

export const getDataInObject = (data, data2) => {
  const result = {};

  data.forEach((item) => {
    if (item.event) {
      item.event.forEach((eventId) => {
        const matchedObject = data2.find((obj) => obj.id === eventId);
        if (matchedObject) {
          result[eventId] = matchedObject;
        }
      });
    }
  });

  return result;
}