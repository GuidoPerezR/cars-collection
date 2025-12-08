export const formatDate = (dateString) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  // parseInt(day) elimina el 0 inicial si existe (ej: 07 -> 7)
  return `${parseInt(day)} de ${months[parseInt(month) - 1]}, ${year}`;
};
