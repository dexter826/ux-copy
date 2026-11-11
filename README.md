# ux-copy

![Agent Skill](https://img.shields.io/badge/Agent_Skill-SKILL.md-blue)
![Bilingual](https://img.shields.io/badge/Languages-VI%20%7C%20EN-green)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

`ux-copy` là Agent Skill phục vụ viết mới, rà soát và tái cấu trúc nội dung giao diện (UX writing và microcopy) bằng tiếng Việt và tiếng Anh trên văn bản thuần, Markdown, JSON i18n và mã nguồn UI (JSX/TSX/HTML).

## Tính năng chính

- Viết mới bộ microcopy từ đầu theo 4 ngữ cảnh giọng điệu (Success, Error, Warning, Informative) và các mẫu thành phần UI (CTA, thông báo lỗi, trạng thái trống, hộp thoại xác nhận, biểu mẫu, tooltip, tiến trình, onboarding).
- Rà soát và sửa chuỗi giao diện có sẵn trên bảng copy, tệp JSON i18n và component JSX/TSX/HTML theo thứ tự ưu tiên từ an toàn mã nguồn đến typography.
- Tách riêng quy chuẩn ngữ pháp và định dạng từng ngôn ngữ: Sentence Case, dấu ngoặc kép cong, dấu ba chấm đơn, loại bỏ câu bị động và định dạng ngày/số cho tiếng Việt; câu chủ động, dạng rút gọn tự nhiên và định dạng số chuẩn cho tiếng Anh.
- Bảo toàn cấu trúc key i18n, cú pháp biến động (`{var}`, `{{var}}`, `%s`, ICU, thẻ rich-text) và dấu nháy cú pháp của mã nguồn khi chỉnh sửa trực tiếp.
- Cung cấp bộ tiêu chí và mẫu đầu vào kiểm thử trong `evals/` để đánh giá lại chất lượng skill sau khi cập nhật.

## Cài đặt

> Lưu ý: Repository hiện ở chế độ private; cần đăng nhập Git/GitHub CLI hoặc dùng SSH khi clone, hoặc tải trực tiếp tệp `ux-copy.skill` từ trang Releases.

### Cài qua CLI `skills`

```bash
npx skills add dexter826/ux-copy
```

### Cài thủ công bằng Git

Sao chép repository vào thư mục skills của agent (global cho mọi dự án hoặc local theo dự án):

```bash
# Global cross-agent (~/.agents/skills)
git clone https://github.com/dexter826/ux-copy.git ~/.agents/skills/ux-copy

# Global Antigravity (~/.gemini/config/skills)
git clone https://github.com/dexter826/ux-copy.git ~/.gemini/config/skills/ux-copy

# Project-local (trong thư mục gốc dự án của bạn)
git clone https://github.com/dexter826/ux-copy.git .agents/skills/ux-copy
```

## Cách sử dụng

Skill tự kích hoạt khi bạn yêu cầu viết, dịch, kiểm tra hoặc sửa chữ giao diện, nút bấm, thông báo lỗi, trạng thái trống, hộp thoại xác nhận, biểu mẫu, tooltip hoặc tệp i18n. Bạn cũng có thể gọi trực tiếp `/ux-copy` kèm ngữ cảnh hoặc tệp mục tiêu.

### Hai chế độ làm việc

| Chế độ | Đầu vào thường gặp | Đầu ra |
| :--- | :--- | :--- |
| **Viết mới (Draft)** | Mô tả màn hình, luồng thao tác, loại thông báo | Bộ microcopy nhóm theo thành phần kèm biến động `{...}` |
| **Rà soát & Sửa (Audit)** | Văn bản, Markdown, JSON i18n, tệp JSX/TSX/HTML | Bảng đối chiếu Trước/Sau hoặc tệp đã sửa giữ nguyên cú pháp |

### Ví dụ prompt

```text
Viết microcopy song ngữ VI/EN cho hộp thoại xác nhận xóa dự án và trạng thái lỗi mất kết nối.
```

```text
Kiểm tra và sửa lỗi UX copy trong src/locales/vi.json, giữ nguyên toàn bộ key và biến {{...}}.
```

### Cấu trúc repository

```text
ux-copy/
|-- SKILL.md                         # Hướng dẫn điều phối chính và quy trình 2 chế độ
|-- README.md                        # Tài liệu giới thiệu và hướng dẫn cài đặt
|-- CHANGELOG.md                     # Nhật ký thay đổi theo chuẩn Keep a Changelog
|-- LICENSE                          # Giấy phép MIT
|-- .gitignore                       # Loại trừ workspace tạm, gói .skill và file OS/IDE
|-- .gitattributes                   # Chuẩn hóa ký tự xuống dòng LF
|-- references/
|   |-- component-patterns.md        # Chi tiết 8+ mẫu thành phần UI và bảng Do's & Don'ts
|   `-- locale-and-code-rules.md     # Quy chuẩn tiếng Việt, tiếng Anh và an toàn mã nguồn/i18n
`-- evals/
    |-- evals.json                   # Kịch bản kiểm thử và tiêu chí đánh giá (assertions)
    `-- files/                       # Tệp mẫu đầu vào (vi.json, WorkspaceDangerModal.tsx)
```

## Đóng góp

Mọi đóng góp cho quy chuẩn nội dung, bộ ví dụ song ngữ hoặc kịch bản kiểm thử trong `evals/` đều được hoan nghênh qua Pull Request. Sau khi chỉnh sửa `SKILL.md`, kiểm tra lại frontmatter bằng `quick_validate.py` từ `skill-creator`.

## Giấy phép

Phân phối theo giấy phép [MIT](./LICENSE).
