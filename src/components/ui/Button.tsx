```tsx
import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return <button className="btn">{children}</button>;
}
```
