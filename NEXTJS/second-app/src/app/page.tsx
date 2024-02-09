import { Typography } from "./styled-components/typography/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Typography type='TITLE' size='XL' weight='REGULAR' color="red">Hello world!</Typography>
       <Typography type='TITLE' size='XL' weight='MEDIUM'>Hello world!</Typography>
       <Typography type='TITLE' size='XL' weight='SEMIBOLD'>Hello world!</Typography>
       <Typography type='TITLE' size='XL' weight='BOLD'>Hello world!</Typography>
       <br />
       <Typography type='TITLE' size='L' weight='REGULAR'>Hello world!</Typography>
       <Typography type='TITLE' size='L' weight='MEDIUM'>Hello world!</Typography>
       <Typography type='TITLE' size='L' weight='SEMIBOLD'>Hello world!</Typography>
       <Typography type='TITLE' size='L' weight='BOLD'>Hello world!</Typography>
       <br />
       <Typography type='TITLE' size='M' weight='REGULAR'>Hello world!</Typography>
       <Typography type='TITLE' size='M' weight='MEDIUM'>Hello world!</Typography>
       <Typography type='TITLE' size='M' weight='SEMIBOLD'>Hello world!</Typography>
       <Typography type='TITLE' size='M' weight='BOLD'>Hello world!</Typography>
       <br />
       <Typography type='TITLE' size='S' weight='REGULAR'>Hello world!</Typography>
       <Typography type='TITLE' size='S' weight='MEDIUM'>Hello world!</Typography>
       <Typography type='TITLE' size='S' weight='SEMIBOLD'>Hello world!</Typography>
       <Typography type='TITLE' size='S' weight='BOLD'>Hello world!</Typography>
       <br />
       <Typography type='TITLE' size='XS' weight='REGULAR'>Hello world!</Typography>
       <Typography type='TITLE' size='XS' weight='MEDIUM'>Hello world!</Typography>
       <Typography type='TITLE' size='XS' weight='SEMIBOLD'>Hello world!</Typography>
       <Typography type='TITLE' size='XS' weight='BOLD'>Hello world!</Typography>
    </main>
  );
}
