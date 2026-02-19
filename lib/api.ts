const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/api/products`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}