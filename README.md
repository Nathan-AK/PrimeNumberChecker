# Prime Number Checker
# Description
--> Untuk mengecek prime number.

# Design
--> Aku buat design dengan colour pallete dari CoLearn
--> Primary blue color (#2563EB)

# Algo Explanation
```typescript
export function isPrime(n: number): boolean {
  // Step 1: Check kalo number <= 2
  if (!Number.isInteger(n) || n < 2) return false;
  
  // Step 2: Check kalo number adalah 2
  if (n === 2) return true;
  
  // Step 3: Eliminasi semua angka even
  if (n % 2 === 0) return false;
  
  // Step 4: Check odd divisors √n
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}
```

# How to run.
1. npm install
2. npm run dev
3. buka host -> http://localhost:5173/

# 👨‍💻 Author
Nathaniel Abed Kianto

# For questions or feedback:
- Email: nathaniel.kianto@binus.ac.id / bboynathanil@gmail.com
- GitHub: [@Nathan-AK](https://github.com/Nathan-AK)
- LinkedIn: [Nathaniel Abed Kianto](www.linkedin.com/in/nathaniel-abed-kianto-54711734b)