import { Typography } from "@/app/designs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Typography style={"title"} size={"xl"} weight={"bold"}>
        Title XL Bold
      </Typography>
      <Typography style={"title"} size={"l"} weight={"bold"}>
        Title L Bold
      </Typography>
      <Typography style={"title"} size={"m"} weight={"bold"}>
        Title M Bold
      </Typography>
      <Typography style={"title"} size={"s"} weight={"bold"}>
        Title S Bold
      </Typography>
      <Typography style={"title"} size={"xs"} weight={"bold"}>
        Title XS Bold
      </Typography>

      <Typography style={"title"} size={"xl"} weight={"regular"}>
        Title XL Regular
      </Typography>
      <Typography style={"title"} size={"l"} weight={"regular"}>
        Title L Regular
      </Typography>
      <Typography style={"title"} size={"m"} weight={"regular"}>
        Title M Regular
      </Typography>
      <Typography style={"title"} size={"s"} weight={"regular"}>
        Title S Regular
      </Typography>
      <Typography style={"title"} size={"xs"} weight={"regular"}>
        Title XS Regular
      </Typography>

      <Typography style={"body"} size={"xl"} weight={"bold"}>
        Body XL Bold
      </Typography>
      <Typography style={"body"} size={"l"} weight={"bold"}>
        Body L Bold
      </Typography>
      <Typography style={"body"} size={"m"} weight={"bold"}>
        Body M Bold
      </Typography>
      <Typography style={"body"} size={"s"} weight={"bold"}>
        Body S Bold
      </Typography>
      <Typography style={"body"} size={"xs"} weight={"bold"}>
        Body XS Bold
      </Typography>

      <Typography style={"body"} size={"xl"} weight={"regular"}>
        Body XL Regular
      </Typography>
      <Typography style={"body"} size={"l"} weight={"regular"}>
        Body L Regular
      </Typography>
      <Typography style={"body"} size={"m"} weight={"regular"}>
        Body M Regular
      </Typography>
      <Typography style={"body"} size={"s"} weight={"regular"}>
        Body S Regular
      </Typography>
      <Typography style={"body"} size={"xs"} weight={"regular"}>
        Body XS Regular
      </Typography>
    </main>
  );
}
