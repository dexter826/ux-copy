# Quy chuẩn ngôn ngữ, Typography & An toàn mã nguồn

Tài liệu quy định chi tiết cách xử lý ngữ pháp, dấu câu, định dạng locale riêng cho **tiếng Việt (`vi`)** và **tiếng Anh (`en`)**, cùng nguyên tắc an toàn khi chỉnh sửa trực tiếp trên mã nguồn UI và tệp i18n.

---

## 1. Hành văn & Cấu trúc ngữ pháp tiếng Việt (`vi`)

Mục tiêu là viết tiếng Việt tự nhiên, gãy gọn như người bản xứ thiết kế sản phẩm — tránh văn phong "tiếng Việt dịch máy từ tiếng Anh".

1. **Ưu tiên thể chủ động:** Đưa chủ thể thực hiện hành động lên trước.
   - Tránh: *Bản nháp được tự động lưu bởi hệ thống mỗi phút.*
   - Chuẩn: *Hệ thống tự động lưu bản nháp mỗi phút.* (hoặc gọn hơn: *Tự động lưu bản nháp mỗi phút.*)
2. **Khử danh hóa thừa và động từ phụ rỗng nghĩa:** Cắt các cụm *thực hiện việc…*, *tiến hành…*, *đưa ra…*.
   - Tránh: *Thực hiện cấu hình máy chủ*, *Tiến hành đồng bộ dữ liệu*, *Đưa ra lựa chọn*.
   - Chuẩn: *Cấu hình máy chủ*, *Đồng bộ dữ liệu*, *Chọn phương án*.
3. **Cắt bỏ chuỗi sở hữu *của* không cần thiết:** Lược từ *của* khi quan hệ thuộc tính đã rõ ràng.
   - Tránh: *Cấu hình của máy chủ của dự án*.
   - Chuẩn: *Cấu hình máy chủ dự án*.
4. **Tránh lạm dụng số nhiều hình thức:** Không thêm *các / những* một cách máy móc theo tiếng Anh (`the files`, `your projects`) khi ngữ cảnh tiếng Việt đã hiểu là số nhiều.
   - Tránh: *Vui lòng chọn các tệp bạn muốn tải lên*.
   - Chuẩn: *Chọn tệp muốn tải lên*.
5. **Xóa sạch khung dẫn sáo rỗng:** Bỏ hoàn toàn các cụm mở đầu thừa như *“Điều quan trọng cần lưu ý là…”*, *“Cần nhấn mạnh rằng…”*, *“Hệ thống xin thông báo rằng…”*. Đi thẳng vào thông tin chính.
6. **Xưng hô nhất quán:** Chọn một kiểu xưng hô phù hợp sắc thái sản phẩm (thường lược bỏ đại từ ngôi hai khi câu mệnh lệnh/gợi ý đã tự nhiên, hoặc dùng *bạn* nhất quán khi cần sự đồng cảm/hướng dẫn; tránh lẫn lộn lúc *bạn*, lúc *quý khách*, lúc *người dùng* trong cùng màn hình).

---

## 2. Chính tả, Typography & Định dạng tiếng Việt (`vi`)

1. **Viết hoa tiêu đề theo Sentence Case:** Chỉ viết hoa chữ cái đầu câu và danh từ riêng hợp thức. Không áp dụng Title Case kiểu tiếng Anh lên tiếng Việt.
   - Tránh: *Quản Lý Quyền Truy Cập Thành Viên*
   - Chuẩn: *Quản lý quyền truy cập thành viên*
2. **Dấu ngoặc kép:** Trong nội dung hiển thị cho người dùng, dùng đồng nhất ngoặc kép cong mở `“` (U+201C) và đóng `”` (U+201D) cho trích dẫn, tên đối tượng hoặc giá trị tham chiếu (ví dụ: `Xóa tệp “Báo cáo Q4”?`). Không trộn ngoặc thẳng `"` giữa câu tiếng Việt hiển thị. *(Xem Mục 5 để tránh đụng cú pháp code khi sửa JSON/JSX.)*
3. **Dấu ba chấm:** Dùng ký tự ba chấm đơn `…` (U+2026) cho trạng thái chờ và đoạn lược bớt (`Đang tải…`), không gõ ba dấu chấm rời `...`.
4. **Dấu gạch ngang:**
   - Dùng en-dash `–` (U+2013, có khoảng trắng hai bên: `10 – 20 mục`, `08:00 – 17:00`, hoặc viết liền trong không gian badge chật hẹp nhưng cần thống nhất một kiểu trong toàn sản phẩm).
   - **Không dùng em-dash `—` (U+2014)** để chêm chú thích giữa câu tiếng Việt; hãy tách câu, dùng dấu phẩy hoặc ngoặc đơn cho nhịp đọc tự nhiên.
5. **Dấu phẩy trước liên từ *và*:** Không đặt dấu phẩy trước từ *và* trong liệt kê đơn giản (`A, B và C`, không viết `A, B, và C`).
6. **Định dạng ngày, giờ, số (`vi`):**
   - Ngày tháng: `DD/MM/YYYY` (ví dụ `11/11/2026`) hoặc `D tháng M, YYYY` (`11 tháng 11, 2026`).
   - Giờ giấc 24 giờ: `HH:mm` (`14:30`).
   - Phân cách phần nghìn dùng dấu chấm (`1.000.000`), phần thập phân dùng dấu phẩy (`0,5`).

---

## 3. Quy chuẩn văn phong & Định dạng tiếng Anh (`en`)

Không áp ngược quy tắc ngữ pháp hay định dạng số/ngày tiếng Việt lên giao diện tiếng Anh. Khi viết hoặc rà soát UI tiếng Anh:

1. **Ngắn gọn, chủ động, dùng dạng viết tắt tự nhiên (contractions):** Các dạng như *You're*, *Couldn't*, *We've*, *Don't* giúp thông báo thân thiện và gần gũi hơn văn phong hành chính cứng nhắc (*Could not*, *You are*). Chỉ dùng dạng đầy đủ khi cần nhấn mạnh cảnh báo nghiêm trọng hoặc điều khoản pháp lý.
2. **Viết hoa tiêu đề:** Mặc định khuyến nghị **Sentence case** (*Save changes*, *Project settings*, *Invite team members*) vì hiện đại, dễ quét và đồng bộ với tiếng Việt; trừ khi codebase/design system của sản phẩm đang quy định Title Case cho một số thành phần (hãy tôn trọng chuẩn sẵn có của repo nếu có).
3. **Dấu câu tiếng Anh:**
   - Dấu ngoặc kép & ba chấm: Dùng ngoặc kép chuẩn hoặc cong nhất quán với codebase (ưu tiên `…` U+2026 cho loading text như `Loading…` nếu không vướng quy định code).
   - Em-dash (`—`) trong tiếng Anh *có thể* chấp nhận được nếu sản phẩm dùng sẵn (ví dụ trong toast Undo: `Archived — Undo`), nhưng trên UI copy chật hẹp vẫn nên ưu tiên câu tách ngắn gọn hoặc dấu hai chấm/phẩy.
   - Dấu phẩy Oxford (`A, B, and C`): Giữ nhất quán một quy tắc trên toàn sản phẩm tiếng Anh (thường dùng Oxford comma trong tài liệu sản phẩm Mỹ).
4. **Định dạng ngày, giờ, số (`en`):**
   - Phân cách phần nghìn dùng dấu phẩy (`1,000,000`), thập phân dùng dấu chấm (`0.5`).
   - Ngày tháng & giờ: Theo locale sản phẩm (`MMM D, YYYY` như `Nov 11, 2026`, hoặc `YYYY-MM-DD`, giờ `h:mm a` hoặc `HH:mm` nhất quán toàn app).

---

## 4. Nhất quán thuật ngữ song ngữ (Bilingual Glossary Discipline)

Khi làm việc trên cả bản `en` và `vi` (ví dụ `en.json` và `vi.json`), giữ ánh xạ thuật ngữ 1–1 xuyên suốt:

- Ví dụ lỗi hay gặp: Cùng từ `Workspace` nhưng màn hình A dịch *Không gian làm việc*, màn hình B dịch *Nhóm*, màn hình C để nguyên *Workspace*.
- **Cách xử lý khi audit:** Lập nhanh danh sách thuật ngữ cốt lõi của sản phẩm (ví dụ `Project` ↔ `Dự án`, `Workspace` ↔ `Không gian làm việc`, `Archive` ↔ `Lưu trữ`, `Delete` ↔ `Xóa`). Nếu thấy file đang dùng lẫn lộn, chọn phương án thống nhất đa số hoặc hợp ngữ cảnh nhất, đồng thời liệt kê rõ cho người dùng xác nhận ở phần tóm tắt.

---

## 5. An toàn khi chỉnh sửa mã nguồn & Tệp i18n

Khi chạy ở chế độ Audit/Refactor trên các định dạng có cấu trúc (`.json`, `.jsx`, `.tsx`, `.html`, `.md`), tuân thủ tuyệt đối các ranh giới sau:

### 5.1. Bảo toàn cú pháp ngôn ngữ lập trình

- **Không bao giờ** thay dấu ngoặc kép/đơn/backtick dùng làm dấu phân cách chuỗi của JS/TS/JSON/HTML thành `“` `”`.
  - Sai: `<Button label=“Lưu thay đổi” />` hoặc `{“title”: “Chưa có dự án”}` → vỡ cú pháp!
  - Đúng: `<Button label="Lưu thay đổi" />` hoặc `{"title": "Xóa dự án “{name}”?"}`.
- **Không bao giờ** thay dấu ba chấm trong spread syntax (`{...props}`), rest parameter (`...args`) hay TypeScript tuple thành ký tự `…`.
- **Lưu ý escape & linter dự án:** Trong JSON dùng ngoặc kép thẳng bọc ngoài, ngoặc kép cong `“` `”` đặt *bên trong* chuỗi JSON hoàn toàn hợp lệ UTF-8 (`"confirmTitle": "Xóa dự án “{name}”?"`). Tuy nhiên, nếu dự án có quy tắc ESLint/Biome cấm non-ASCII punctuation hoặc dùng sẵn dấu nháy escape `\"`, ưu tiên giữ tương thích với quy ước của codebase và ghi chú lại.

### 5.2. Bảo toàn cú pháp biến động, Rich-text & Cấm ghép chuỗi i18n

- Chuẩn mặc định trong spec/tài liệu mới chưa gắn framework cụ thể: `{tên_biến}` hoặc `{variable}`.
- Nhưng trong dự án thực tế, **phải giữ nguyên** cú pháp placeholder mà thư viện i18n đang dùng:
  - `i18next`: `{{count}}`, `{{name}}`
  - `react-intl` / FormatJS (ICU): `{count, plural, one {# item} other {# items}}`, `{name}`
  - `printf` / backend template: `%s`, `%d`, `${name}`
  - Rich text component tags: `<bold>...</bold>`, `<1>...</1>`
- Khi sửa câu chữ, kiểm tra kỹ để không làm rơi, đổi tên hoặc hỏng cặp thẻ đóng/mở của biến.
- **Không ghép mảnh chuỗi động trong code (String Concatenation):**
  - Tránh nối từng mảnh bằng `+` hoặc nội suy tách rời kiểu `"Found " + count + " unpaid invoice(s)"` hay `{"Đã tìm thấy " + count + " hóa đơn"}`. Cách viết này khiến trật tự câu gãy khi chuyển giữa tiếng Anh và tiếng Việt, không chia được dạng số ít/số nhiều (`plural`) và tạo chuỗi nửa vời khó dịch.
  - Khi gặp phép nối chuỗi cứng trong TSX/JSX, chuyển về một câu hoàn chỉnh tự nhiên (hoặc template literal nguyên câu / đề xuất tách key i18n dùng `{count, plural, ...}` trong phần tóm tắt mà vẫn tôn trọng prop TypeScript đang có).

### 5.3. Tách biệt thông điệp người dùng, Cleanup an toàn & Dữ liệu kỹ thuật

Phân định rạch ròi phần được phép tự xóa khi rà soát với phần chỉ nên đề xuất để không làm hỏng runtime hoặc lệch bản dịch khác:

- **Được tự xóa trực tiếp trong bản copy/code:**
  - Hư từ, câu mào đầu rỗng và chỉ dẫn thừa trong chuỗi văn bản/Markdown.
  - Thuộc tính văn bản dư thuần giao diện không ảnh hưởng logic hoặc props (ví dụ gỡ `title="..."` chỉ lặp lại đúng nhãn chữ của `<button>`).
  - Ghi chú dev, số phiên bản nội bộ (`Updated in v2.4`) hay lời bình hội thoại vô tình bị render trực tiếp lên giao diện người dùng.
- **Chỉ liệt kê vào mục Đề xuất dọn dẹp (không tự ý xóa mặc định):**
  - **Key JSON i18n** nghi trùng nghĩa hoặc không còn dùng (`unused keys`) — tránh làm gãy dynamic lookup kiểu `t('status.' + code)` hoặc lệch với `en.json` / `vi.json`.
  - **Props / TypeScript interface / comment `TODO:` kỹ thuật** phục vụ logic, telemetry hoặc hợp đồng giữa các component.
  - **Tháo bỏ cả khối JSX/component** (như xóa hẳn thẻ `<p>` có điều kiện, bố cục grid hoặc thay modal xác nhận bằng toast Undo) — trừ khi người dùng yêu cầu sửa cấu trúc component trực tiếp.
