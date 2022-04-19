import { app } from './config/app';

app.listen(process.env.NODE_PORT || 3333, () =>
  console.log(
    `Server running at http://localhost:${process.env.NODE_PORT || 3333}`,
  ),
);
