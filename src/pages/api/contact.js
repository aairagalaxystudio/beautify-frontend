```javascript
// This file is for Next.js API routes (handled on Vercel, not needed in separate backend)
// But we already have a separate backend, so we could either use this or point to the Render backend.
// To keep things simple, we'll use this as a proxy to the Render backend.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Forward to backend on Render
    const response = await fetch(process.env.BACKEND_URL + '/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(500).json({ message: 'Error' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error' });
  }
}
```
