import bcrypt from "bcrypt";


(async () => {
  const password = 'password123';
  const hash = await bcrypt.hash(password, 10);
  console.log('Hash:', hash);
})();
