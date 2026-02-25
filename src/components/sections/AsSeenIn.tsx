```tsx
import Container from '../ui/Container';

const logos = [
  { src: '/images/logos/vogue.svg', alt: 'Vogue' },
  { src: '/images/logos/elle.svg', alt: 'Elle' },
  { src: '/images/logos/harpers-bazaar.svg', alt: 'Harper\'s Bazaar' },
  { src: '/images/logos/glamour.svg', alt: 'Glamour' },
];

export default function AsSeenIn() {
  return (
    <section className="as-seen-in">
      <Container>
        <p className="label">As Seen In</p>
        <div className="logo-strip">
          {logos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </Container>
    </section>
  );
}
```
