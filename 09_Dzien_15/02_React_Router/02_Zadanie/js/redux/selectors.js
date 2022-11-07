export const selectProducts = (state, limit) => {
  if (limit === undefined || limit ==='all') {
    return state;
  }

  return state
      .filter(product => Number(product.price) <= Number(limit))
}

export const sum = (state, limit) => {
  if (limit === undefined || limit === 'all') {
    return state
        .reduce((prev, next) => prev + Number(next.price), 0)
  }

  return state
      .filter(product => Number(product.price) <= Number(limit))
      .reduce((prev, next) => prev + Number(next.price), 0);
}
