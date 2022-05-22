import app from './app';

app.listen(process.env.API_PORT, () => {
  process.stdout.write('\x1Bc');
  console.log(`🚀 API is running at port ${process.env.API_PORT}`);
});
