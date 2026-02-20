
```javascript
export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyle = {
    display: 'inline-block',
    padding: '0.75rem 2rem',
    borderRadius: 'var(--border-radius-btn)',
    border: 'var(--border-thin)',
    background: 'transparent',
    color: 'var(--charcoal)',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'var(--transition-default)',
    textTransform: 'uppercase',
    borderColor: 'var(--soft-grey)',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--black)',
      color: 'var(--soft-white)',
      borderColor: 'var(--black)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--charcoal)',
      borderColor: 'var(--charcoal)',
    },
    gold: {
      backgroundColor: 'var(--champagne-gold)',
      color: 'var(--black)',
      borderColor: 'var(--champagne-gold)',
    },
  };

  const style = { ...baseStyle, ...variants[variant] };

  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
}
```
