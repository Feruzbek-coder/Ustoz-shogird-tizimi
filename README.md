# Ustoz-shogird Tizimi — Static site

Bu repo statik sayt bo'lib, Railway orqali Nixpacks builder yordamida deploy qilish uchun tayyorlangan.

Tez start (GitHub → Railway):

1. Lokal commit va push (oddiy Git):

```bash
git init
git add .
git commit -m "Initial commit: static site + Railway config"
git branch -M main
git remote add origin git@github.com:USERNAME/REPO.git
git push -u origin main
```

Yoki GitHub CLI bilan yangi repo yaratish va push:

```bash
gh repo create USERNAME/REPO --public --source=. --remote=origin --push
```

2. Railway-ga ulashish:

- Railway dashboard orqali yangi Project yaratish.
- "Deploy from GitHub" ni tanlang va GitHub repo ga ruxsat bering.
- Branch (masalan `main`) ni tanlang — Railway `railway.json`, `Procfile` va `nixpacks.toml`ni aniqlaydi.

3. Eslatma:

- `nixpacks.toml` ichidagi `start` komanda `python -m http.server $PORT` qilib sozlangan — Railway tomonidan berilgan `PORT` muhit o'zgaruvchisiga mos keladi.
- Agar GitHub Actions yoki boshqa CI ishlatmoqchi bo'lsangiz, qo'shimcha konfiguratsiyalar kerak bo'lishi mumkin.

Yordam kerak bo'lsa, men GitHub-ga push qilishni yoki Railway integratsiyasini sozlashni bosqichma-bosqich yuritaman.
