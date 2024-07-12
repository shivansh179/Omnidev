import { Rajdhani } from 'next/font/google';

const font = Rajdhani({
  subsets: ['latin'],
  weight: '300',
});

function MyComponent() {
  return (
    <div className={font.className}>
      Your text here
    </div>
  );
}

export default MyComponent;
