export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum natus quidem corrupti eveniet ipsam suscipit maxime fuga esse expedita fugit. A dolor at accusantium neque fuga iste earum delectus repellat.</h1>
      <body>{children}</body>
    </html>
  );
}
