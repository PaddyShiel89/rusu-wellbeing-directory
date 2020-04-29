// Compare the order value of items extracted with graphql
export const compareOrder = (a, b) => {
  const itemA = a.order
  const itemB = b.order

  let comparison = 0
  if (itemA > itemB) {
    comparison = 1
  } else if (itemA < itemB) {
    comparison = -1
  }
  return comparison
}
