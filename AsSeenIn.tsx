```tsx
export default function AsSeenIn() {
  const logos = ['/logos/vogue.svg', '/logos/elle.svg', '/logos/harpers.svg'];
  return (
    <section className="as-seen-in">
      <p>As Seen In</p>
      <div className="logo-strip">
        {logos.map((src, i) => <img key={i} src={src} alt="media logo" />)}
      </div>
    </section>
  );
}
```
