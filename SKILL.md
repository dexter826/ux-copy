---
name: ux-copy
description: >-
  Viết mới, rà soát và chuẩn hóa nội dung giao diện (UX writing và microcopy)
  cho cả tiếng Việt lẫn tiếng Anh trên văn bản thuần, Markdown, JSON i18n và
  mã nguồn UI (JSX/TSX/HTML). Hãy dùng skill này bất cứ khi nào người dùng
  soạn, dịch, kiểm tra hoặc sửa chữ trên giao diện — như nút bấm (CTA), thông
  báo lỗi, trạng thái trống (empty state), hộp thoại xác nhận/xóa, form
  validation, tooltip, loading/progress, onboarding, toast/banner hoặc chuỗi
  bản địa hóa — kể cả khi họ không nhắc trực tiếp tới "UX writing" hay "COPY.md".
  Use this skill whenever the user writes, translates, audits, or refactors UI
  microcopy, interface text, i18n JSON strings, or JSX/TSX/HTML copy in English
  or Vietnamese.
---

# ux-copy

Skill thiết kế, viết mới và rà soát nội dung giao diện (UX writing / microcopy) song ngữ Việt – Anh dựa trên bộ quy chuẩn trong [COPY.md](./COPY.md) và các thông lệ bản địa hóa giao diện hiện đại.

Mục tiêu của microcopy chuẩn không phải là viết văn cho hay, mà là giảm tải nhận thức để người dùng hiểu ngay hệ thống đang làm gì, điều gì vừa xảy ra và bước tiếp theo cần bấm gì — không bị chựng lại bởi câu chữ mơ hồ, máy móc hay dịch sát nghĩa từ tiếng Anh.

---

## Hai chế độ làm việc

Trước khi viết hoặc sửa, xác định rõ ngữ cảnh ngôn ngữ mục tiêu (`vi`, `en`, hoặc song ngữ `vi + en`) và chọn đúng chế độ dưới đây:

### 1. Chế độ viết mới (Draft Mode)

Áp dụng khi người dùng mô tả màn hình, tính năng, luồng lỗi hoặc yêu cầu sinh microcopy từ đầu.

1. **Xác định thông số đầu vào:** Ngôn ngữ đích (`vi` / `en`), thành phần UI (nút, lỗi, modal, form, empty state…), ngữ cảnh cảm xúc (Success / Error / Warning / Informative) và khả năng hoàn tác.
2. **Không tự bịa hành vi hệ thống:** Nếu thiếu nguyên nhân lỗi, phạm vi dữ liệu bị ảnh hưởng hay khả năng hoàn tác, giữ phần chưa xác định dưới dạng `{placeholder}` kèm ghi chú ngắn để đội ngũ sản phẩm chốt.
3. **Áp dụng đúng công thức thành phần & quy chuẩn ngôn ngữ:** Đối chiếu bảng bên dưới; đọc thêm [references/component-patterns.md](./references/component-patterns.md) khi cần mẫu chi tiết.
4. **Kiểm tra chéo song ngữ (nếu xuất cả `vi` và `en`):** Đảm bảo hai bản khớp cùng một thuật ngữ, cùng mức độ khẩn trương nhưng tự nhiên theo ngữ pháp bản địa — không dịch word-by-word.

### 2. Chế độ rà soát & sửa (Audit & Refactor Mode)

Áp dụng khi người dùng đưa bảng copy, file Markdown, JSON i18n hoặc mã nguồn UI (JSX/TSX/HTML).

1. **Đọc toàn bộ tệp trước khi sửa:** Nhận diện khung i18n (`{var}`, `{{var}}`, `%s`, ICU, `<Trans>`), quy ước dấu nháy của codebase và ngôn ngữ của từng chuỗi (`vi` hay `en`) để tránh áp nhầm chuẩn tiếng Việt lên chuỗi tiếng Anh và ngược lại.
2. **Rà soát theo 4 tầng ưu tiên:**
   - **Tầng 1 – An toàn mã nguồn & i18n:** Giữ nguyên tên key, props, cú pháp biểu thức, placeholder biến và mã lỗi nội bộ (nếu dùng cho log/hỗ trợ).
   - **Tầng 2 – Cấu trúc thành phần & hành động:** Khắc phục nút mơ hồ, lỗi cụt lủn thiếu hướng xử lý, modal xóa hỏi chung chung, empty state cụt đường.
   - **Tầng 3 – Ngữ pháp & giọng điệu:** Đưa về thể chủ động, khử danh hóa nặng nề, bỏ khung dẫn sáo rỗng, chỉnh đúng sắc thái theo ngữ cảnh.
   - **Tầng 4 – Typography & định dạng locale:** Chuẩn hóa Sentence Case, dấu ba chấm `…`, ngoặc kép, dấu gạch ngang, ngày/giờ và phân cách số đúng ngôn ngữ hiển thị.
3. **Đọc tài liệu chuyên sâu khi đụng code hoặc locale:** Đọc [references/locale-and-code-rules.md](./references/locale-and-code-rules.md) trước khi chỉnh sửa file JSX/TSX/JSON i18n hoặc kiểm tra typography.

---

## 5 nguyên tắc cốt lõi

Mọi văn bản hiển thị cho người dùng cuối cần đáp ứng đồng thời 5 tiêu chí:

1. **Rõ ràng (Clear):** Nói chính xác kết quả hoặc trạng thái; loại bỏ thuật ngữ kỹ thuật nội bộ, câu hiểu nước đôi và mã lỗi thô.
2. **Súc tích (Concise):** Dùng ít từ nhất mà vẫn trọn nghĩa; cắt hư từ, liên từ thừa và câu mào đầu rỗng.
3. **Nhất quán (Consistent):** Một khái niệm, đối tượng hoặc hành động chỉ dùng một thuật ngữ duy nhất toàn ứng dụng (ví dụ: đã chọn *Không gian làm việc* thì không chỗ khác lại gọi *Phòng làm việc*; đã chọn *Delete* thì không trộn *Remove* cho cùng một hành vi).
4. **Hướng hành động (Action-Oriented):** Giúp người dùng thấy rõ bước tiếp theo hoặc lối thoát khả thi ngay tại điểm họ đang đứng.
5. **Nhân văn & Đồng cảm (Human & Empathetic):** Viết như người hỗ trợ điềm tĩnh; không đổ lỗi, không phán xét và không dùng câu chữ máy móc.

---

## Giọng điệu theo ngữ cảnh (Voice & Tone)

Giữ giọng chung chuyên nghiệp, điềm đạm và đáng tin cậy; điều chỉnh sắc thái theo tình huống trải nghiệm:

| Ngữ cảnh | Sắc thái | Quy tắc viết | Ví dụ chuẩn (`vi` / `en`) |
| :--- | :--- | :--- | :--- |
| **Success** | Tích cực vừa phải | Xác nhận việc đã xong; tránh cảm thán quá đà (*“Tuyệt vời!”*, *“Awesome!”*) | `Đã lưu thay đổi` / `Changes saved` |
| **Error** | Điềm tĩnh, đồng cảm | Nêu hiện tượng khách quan + nguyên nhân ngắn + lối thoát; không đổ lỗi người dùng | `Không lưu được tệp do mất mạng. Kiểm tra kết nối rồi thử lại.` / `Couldn't save file because you're offline. Check your connection and try again.` |
| **Warning** | Rõ ràng, dứt khoát | Nêu thẳng hậu quả trước hành động khó hoặc không thể đảo ngược | `Xóa dự án sẽ xóa vĩnh viễn mọi nhiệm vụ bên trong.` / `Deleting this project permanently removes all its tasks.` |
| **Informative** | Trung tính, khách quan | Nêu thẳng thông tin cần biết để ra quyết định; không thêm thắt văn hoa | `Báo cáo cập nhật mỗi 15 phút.` / `Reports refresh every 15 minutes.` |

---

## Tra cứu nhanh mẫu thành phần UI

Chi tiết công thức, ngoại lệ và cặp đối chiếu Đúng/Sai cho cả hai ngôn ngữ xem tại [references/component-patterns.md](./references/component-patterns.md).

| Thành phần | Công thức cốt lõi | Quy tắc chốt nhanh |
| :--- | :--- | :--- |
| **Button & CTA** | `[Động từ hành động] + [Đối tượng]` / `[Verb] + [Object]` | Phản ánh đúng kết quả sau khi bấm (`Lưu thay đổi` / `Save changes`, tránh `OK`, `Gửi`, `Submit`). |
| **Error Message** | `[Chuyện gì xảy ra] + [Lý do ngắn] + [Cách xử lý]` | Không phơi mã lỗi nội bộ làm nội dung chính; luôn cho người dùng lối tiếp tục. |
| **Empty State** | `[Hiện trạng] + [Giá trị tính năng] + [CTA bắt đầu]` | Không để màn hình trống rơi vào ngõ cụt; giải thích ngắn lý do nên tạo mục đầu tiên. |
| **Destructive Dialog** | `Xóa {tên}?` / `Delete {name}?` + `[Hậu quả]` + `[An toàn] / [Phá hủy]` | Tránh *“Bạn có chắc không?”* / *“Are you sure?”*. Nút chính an toàn (`Giữ lại` / `Keep`), nút nguy hiểm ghi đích danh (`Xóa dự án` / `Delete project`). |
| **Form & Inline Error** | `Label` độc lập + `Placeholder` mẫu + `Lỗi` chỉ điều kiện thiếu | Không dùng placeholder thay label; báo lỗi ngay dưới trường và nêu rõ thiếu gì để hợp lệ. |
| **Tooltip** | `[Thông tin bổ sung giúp ra quyết định]` | Tuyệt đối không lặp lại nguyên văn nhãn nút hoặc tiêu đề đã hiện trên màn hình. |
| **Loading & Progress** | `[Động từ đang diễn ra]…` (`Đang tải dữ liệu…` / `Loading data…`) | Tác vụ lâu nên kèm ước lượng thời gian hoặc số bước (`Đang nhập 12/40 tệp…`). |
| **Onboarding** | `1 màn hình = 1 bước logic + 1 hành động chính` | Bộc lộ thông tin theo từng bước (progressive disclosure), không dồn nhiều khái niệm một lúc. |

---

## Tóm tắt quy chuẩn ngôn ngữ & An toàn mã nguồn

Chi tiết đầy đủ nằm ở [references/locale-and-code-rules.md](./references/locale-and-code-rules.md). Nắm 4 nguyên tắc ranh giới sau để không mắc lỗi chéo:

1. **Không trộn quy tắc Việt – Anh:**
   - Tiếng Việt ưu tiên câu chủ động, bỏ khung dẫn sáo rỗng, khử danh hóa rỗng (*thực hiện cấu hình* → *cấu hình*), Sentence Case (không Title Case kiểu Anh), ngoặc kép cong `“` `”`, ba chấm đơn `…`, en-dash `–`, **tránh em-dash `—`**, không dấu phẩy trước *và*, định dạng `DD/MM/YYYY`, `HH:mm`, `1.000.000`, `0,5`.
   - Tiếng Anh ưu tiên câu chủ động ngắn, Sentence case hiện đại, contraction tự nhiên (*Couldn't*, *You're*) khi giọng văn thân thiện, dấu câu và số/ngày theo chuẩn tiếng Anh (`1,000.00`, `0.5`, `MMM D, YYYY` hoặc `YYYY-MM-DD`). Không ép định dạng `0,5` hay `DD/MM/YYYY` lên UI tiếng Anh.
2. **Tuyệt đối không phá cú pháp code:** Không đổi dấu nháy của cú pháp JS/TS/JSON/HTML (`"`, `'`, `` ` ``) thành `“` `”`, và không đổi spread operator `...` trong code thành `…`. Chỉ chuẩn hóa typography bên trong phần chữ hiển thị cho người dùng (và tôn trọng escape JSON/ESLint của dự án).
3. **Bảo toàn biến & thẻ i18n sẵn có:** Nếu dự án đang dùng `{{count}}`, `{count, plural, ...}`, `%s` hoặc `<Link>...</Link>`, giữ nguyên định dạng biến đó. Chỉ dùng cú pháp `{tên_biến}` / `{variable}` khi viết mới chưa gắn framework cụ thể.
4. **Không đưa nội dung nội bộ ra giao diện:** Loại bỏ ghi chú dev, nhật ký thay đổi, lời bình hội thoại hay từ khóa kỹ thuật thô khỏi chuỗi UI.

---

## Định dạng đầu ra & Tự kiểm tra

### Định dạng đầu ra theo tình huống

- **Khi viết mới (Draft Mode):** Nhóm theo màn hình hoặc thành phần (`Tiêu đề`, `Mô tả`, `CTA chính`, `CTA phụ`, `Lỗi`), nêu rõ tên biến `{...}` và ghi chú nhanh giả định nếu có (ví dụ: giả sử hành động không thể hoàn tác).
- **Khi rà soát văn bản/bảng copy:** Xuất bảng đối chiếu 4 cột:
  `Vị trí | Bản gốc | Bản đề xuất | Lý do & quy tắc áp dụng`
- **Khi sửa trực tiếp file code / JSON i18n:** Chỉnh trực tiếp file đích, kiểm tra lại tính hợp lệ cú pháp (ví dụ parse JSON / kiểm tra thẻ JSX không bị vỡ), rồi tóm tắt các nhóm thay đổi kèm danh sách thuật ngữ cần team thống nhất (nếu phát hiện lệch thuật ngữ).

### Danh sách tự kiểm trước khi trả kết quả

- [ ] Ngôn ngữ (`vi` / `en`) có dùng đúng chuẩn ngữ pháp, typography và định dạng số/ngày của riêng ngôn ngữ đó không?
- [ ] Các nút bấm và hộp thoại xác nhận có nêu đích danh hành động thay vì chữ chung chung (`OK`, `Hủy`, `Bạn có chắc không?`) chưa?
- [ ] Thông báo lỗi có đủ hiện trạng + lý do ngắn (nếu biết) + hướng xử lý mà không đổ lỗi người dùng chưa?
- [ ] Toàn bộ thuật ngữ cho cùng một khái niệm đã thống nhất xuyên suốt các chuỗi chưa?
- [ ] Khi sửa file code hoặc i18n JSON, cấu trúc key, biến động (`{...}`, `{{...}}`) và cú pháp quote/JSX có còn nguyên vẹn hợp lệ không?
