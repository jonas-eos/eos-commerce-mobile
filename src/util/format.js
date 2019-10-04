/** Format currency to standard us type, using USD as currency. */
export const { format: formatUsd } = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

/** Format currency to standard us type, using BRL as currency. */
export const { format: formatBrl } = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
});
