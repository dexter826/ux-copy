# Nhật ký thay đổi (Changelog)

Tất cả thay đổi đáng chú ý của dự án được ghi lại trong tệp này.

Định dạng tuân theo [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) và quy ước phiên bản [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-11-11

### Thêm mới

- Tạo skill `ux-copy` ([SKILL.md](./SKILL.md)) hỗ trợ 2 chế độ **Viết mới (Draft)** và **Rà soát & Sửa (Audit/Refactor)** cho nội dung giao diện song ngữ Việt – Anh.
- Tách tài liệu tham chiếu [component-patterns.md](./references/component-patterns.md) (8+ mẫu thành phần UI, Do's & Don'ts) và [locale-and-code-rules.md](./references/locale-and-code-rules.md) (quy chuẩn ngữ pháp/typography riêng cho `vi` và `en`, an toàn cú pháp JSX/TSX/JSON i18n).
- Bổ sung bộ kiểm thử trong [evals/evals.json](./evals/evals.json) cùng dữ liệu mẫu (`vi.json`, `WorkspaceDangerModal.tsx`).
- Hoàn thiện tài liệu và cấu hình repository: [README.md](./README.md), [LICENSE](./LICENSE) (MIT), `.gitignore` và `.gitattributes`.
- Đóng gói và phát hành bản `v1.0.0` kèm gói `ux-copy.skill`.

[1.0.0]: https://github.com/dexter826/ux-copy/releases/tag/v1.0.0
