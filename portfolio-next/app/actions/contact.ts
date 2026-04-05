// Minimal stub to fix Netlify build. Replace with real logic if needed.

export const initialContactState = {
  ok: false,
  fieldErrors: {},
};

export async function submitContactAction(prevState, formData) {
  // No-op: always return initial state
  return initialContactState;
}
