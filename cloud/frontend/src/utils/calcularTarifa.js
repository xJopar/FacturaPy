export function calcularFactura(kwh) {
  if (kwh <= 50) return kwh * 311.55;
  if (kwh <= 150) return kwh * 349.89;
  if (kwh <= 300) return kwh * 365.45;
  if (kwh <= 500) return kwh * 403.82;
  if (kwh <= 1000) return kwh * 420.27;
  return kwh * 435.51;
}
