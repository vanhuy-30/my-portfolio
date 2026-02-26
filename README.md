# Mobile Developer Portfolio

Portfolio cá nhân được xây dựng bằng Next.js + Tailwind CSS, tập trung cho mobile developer để trình bày:

- Kinh nghiệm làm việc theo timeline
- Dự án nổi bật và impact
- Bộ kỹ năng chuyên môn mobile
- Quy trình làm việc
- Thông tin liên hệ rõ ràng để nhận job/freelance

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Tùy chỉnh nhanh nội dung portfolio

Chỉnh file `src/app/page.js`:

- `metrics`: số năm kinh nghiệm, số app, lượt tải, rating
- `skillAreas`: nhóm năng lực chính
- `experiences`: timeline công việc và thành tựu
- `projects`: dự án nổi bật + tech stack + impact
- `contacts`: email, LinkedIn, GitHub, lịch hẹn

> Lưu ý: Các link/contact hiện là placeholder, cần thay bằng dữ liệu thật trước khi public.

## Scripts

- `npm run dev`: chạy môi trường phát triển
- `npm run lint`: kiểm tra lint
- `npm run build`: build production
- `npm run start`: chạy bản build

## Tech stack

- Next.js (App Router)
- React
- Tailwind CSS
