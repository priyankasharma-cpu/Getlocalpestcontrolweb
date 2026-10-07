export async function submitLead(values) {
  const endpoint = import.meta.env.VITE_LEAD_API_URL;
  if (!endpoint) return { demo: true };
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  if (!response.ok)
    throw new Error("Your request could not be sent. Please try again.");
  return { demo: false };
}
