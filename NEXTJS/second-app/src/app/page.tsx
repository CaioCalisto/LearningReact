import { Typography } from "./styled-components/typography/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Typography type='TITLE' size='XL' weight='REGULAR' color="red">HOME PAGE!</Typography>
    </main>
  );
}
