## next.js routing

- routes are done by creating new paths in the '/pages' directory.

- `mkdir /pages/posts && touch /pages/posts/first-post.tsx`

- navigating to `localhost:3000/posts/first-post` will pull up the component in `/pages/posts`

- to make routing more streamlined we can `import Link from 'next/link';`
  and use links as such: `<Link href="/posts/first-post">first post</Link>`

## assets, metadata, and css

### head/metadata

- `import Head from 'next/head';`

```jsx
<Head>
  <title>My Title</title>
  <link rel='icon' href='/favicon.ico' />
</Head>
```

### css modules

- `touch components/layout.module.css`

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

- `import styles from './layout.module.css';`
- `<div className={styles.container}>{children}</div>`
- import `styles` from `module`
- styles becomes an object
- to access that object:
- `className={styles.container}`
