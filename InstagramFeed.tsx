```tsx
export default function InstagramFeed() {
  return (
    <section className="instagram-feed">
      <h2>@beautifybymansi</h2>
      <div className="grid grid-cols-3 gap-2">
        {/* Fetch and map actual Instagram posts */}
        <img src="/insta1.jpg" alt="instagram" />
        <img src="/insta2.jpg" alt="instagram" />
        <img src="/insta3.jpg" alt="instagram" />
      </div>
    </section>
  );
}
```

---
