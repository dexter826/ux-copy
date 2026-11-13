# Nhật ký thay đổi (Changelog)

Tất cả thay đổi đáng chú ý của dự án được ghi lại trong tệp này.

Định dạng tuân theo [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) và quy ước phiên bản [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Thêm mới

- Bộ manifest phân phối dạng plugin (`plugin.json`, `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `.agents/plugins/marketplace.json`, `.antigravity-plugin/plugin.json`) cho phép cài trực tiếp repository như một plugin trên Claude Code, Codex và Antigravity, kèm section cài đặt mới trong `README.md`.

## [1.1.0] - 2026-11-11

### Thêm mới

- Bổ sung quy trình **Copy Cleanup có kiểm soát** (*Subtract Before Rewriting*) trong [SKILL.md](./skills/ux-copy/SKILL.md), [component-patterns.md](./skills/ux-copy/references/component-patterns.md) và [locale-and-code-rules.md](./skills/ux-copy/references/locale-and-code-rules.md): đánh dấu `[Xóa bỏ]` / `[Remove]` với chuỗi lặp thừa, cho phép gỡ thuộc tính text thừa an toàn và tách danh sách đề xuất cho key i18n hoặc khối JSX phức tạp.
- Bổ sung quy chuẩn **Accessibility Microcopy** (`aria-label` cho icon button, `alt` cho ảnh nội dung/trang trí, nhãn liên kết tự mang nghĩa) trong [component-patterns.md](./skills/ux-copy/references/component-patterns.md).
- Bổ sung quy tắc **Cấm ghép chuỗi động trong code** (`"..." + count + "..."`) vào [locale-and-code-rules.md](./skills/ux-copy/references/locale-and-code-rules.md) và hướng dẫn kiểm soát **giới hạn độ dài / text expansion Việt–Anh** cho nút/tab hẹp vào [component-patterns.md](./skills/ux-copy/references/component-patterns.md).
- Thêm kịch bản kiểm thử số 3 (`eval id: 3`) cùng tệp mẫu [BillingSettingsCard.tsx](./evals/files/BillingSettingsCard.tsx) trong [evals/evals.json](./evals/evals.json).

### Thay đổi

- Nâng `metadata.version` của skill lên `1.1.0` và cập nhật danh sách tự kiểm tra đầu ra trong [SKILL.md](./skills/ux-copy/SKILL.md).
- Cập nhật danh sách tính năng và sơ đồ tệp trong [README.md](./README.md).

## [1.0.0] - 2026-11-11

### Thêm mới

- Tạo skill `ux-copy` ([SKILL.md](./skills/ux-copy/SKILL.md)) hỗ trợ 2 chế độ **Viết mới (Draft)** và **Rà soát & Sửa (Audit/Refactor)** cho nội dung giao diện song ngữ Việt – Anh.
- Tách tài liệu tham chiếu [component-patterns.md](./skills/ux-copy/references/component-patterns.md) (8+ mẫu thành phần UI, Do's & Don'ts) và [locale-and-code-rules.md](./skills/ux-copy/references/locale-and-code-rules.md) (quy chuẩn ngữ pháp/typography riêng cho `vi` và `en`, an toàn cú pháp JSX/TSX/JSON i18n).
- Bổ sung bộ kiểm thử trong [evals/evals.json](./evals/evals.json) cùng dữ liệu mẫu (`vi.json`, `WorkspaceDangerModal.tsx`).
- Hoàn thiện tài liệu và cấu hình repository: [README.md](./README.md), [LICENSE](./LICENSE) (MIT), `.gitignore` và `.gitattributes`.
- Đóng gói và phát hành bản `v1.0.0` kèm gói `ux-copy.skill`.

[1.0.0]: https://github.com/dexter826/ux-copy/releases/tag/v1.0.0
