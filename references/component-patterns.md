# Quy chuẩn thành phần giao diện & Bảng kiểm chất lượng

Tài liệu tham chiếu chi tiết cho skill `ux-copy`, cung cấp công thức thành phần giao diện kèm cặp ví dụ song ngữ Việt – Anh và cách xử lý các tình huống ngoại lệ thường gặp trên sản phẩm phần mềm.

---

## 1. Nút bấm & Lời kêu gọi hành động (Buttons & CTAs)

- **Công thức:** `[Động từ hành động] + [Đối tượng cụ thể]` | `[Action verb] + [Specific object]`
- **Lý do:** Người dùng thường quét nút bấm trước khi đọc hết đoạn mô tả. Nhãn nút rõ kết quả giúp họ bấm tự tin mà không sợ hệ thống làm điều bất ngờ.
- **Quy tắc:**
  - Bắt đầu trực tiếp bằng động từ hành động.
  - Phản ánh chính xác trạng thái sau khi bấm.
  - Nút đóng hoặc từ bỏ luồng nên nói rõ hành động an toàn (`Giữ lại tệp` / `Keep file`, `Đóng` / `Close`, `Quay lại` / `Go back`) thay vì `Hủy` / `Cancel` khi từ *Hủy* dễ gây nhầm với *Hủy đơn hàng* hoặc *Hủy đăng ký*.
  - **Ngoại lệ có kiểm soát:** Trong wizard nhiều bước mà tiêu đề bước đã định rõ ngữ cảnh, có thể dùng `Tiếp tục` / `Continue` hoặc `Tiếp theo` / `Next` nếu ghép `[Động từ + Đối tượng]` làm nút quá dài, nhưng vẫn ưu tiên nhãn cụ thể hơn khi đủ chỗ (`Tiếp tục thanh toán` / `Continue to payment`).

| Ngôn ngữ | Tránh (Chưa đạt) | Chuẩn (Nên dùng) |
| :--- | :--- | :--- |
| `vi` | `OK`, `Gửi`, `Đồng ý`, `Đăng ký` | `Lưu thay đổi`, `Gửi lời mời`, `Tạo tài khoản` |
| `en` | `OK`, `Submit`, `Yes`, `Click here` | `Save changes`, `Send invite`, `Create account` |

---

## 2. Thông báo lỗi hệ thống (Error Messages)

- **Công thức 3 phần:** `[Điều gì đã xảy ra] + [Lý do ngắn gọn (nếu xác định được)] + [Hướng xử lý tiếp theo]`
- **Lý do:** Thông báo lỗi cộc lốc (*“Lỗi hệ thống”*, *“Something went wrong”*) khiến người dùng kẹt tại chỗ và mất niềm tin; còn phơi nguyên stack trace hoặc mã lỗi nội bộ gây hoang mang.
- **Quy tắc:**
  - Nêu sự việc khách quan, không đổ lỗi cho người dùng (tránh *“Bạn đã nhập sai…”* hay *“Invalid user action”*).
  - Nếu không xác định được nguyên nhân cụ thể, đừng bịa lý do — nêu thẳng tác động và hành động khôi phục khả thi.
  - Nếu hệ thống cần mã tham chiếu cho bộ phận hỗ trợ (support), đặt gọn mã ở cuối dưới dạng phụ trợ, không thay thế câu giải thích chính.

**Ví dụ chuẩn:**
- `vi`: *Không lưu được thay đổi do mất kết nối mạng. Kiểm tra đường truyền rồi thử lại.*
- `vi` (không rõ nguyên nhân): *Chưa tải được danh sách hóa đơn lúc này. Thử tải lại trang hoặc liên hệ hỗ trợ nếu lỗi vẫn tiếp diễn (mã lỗi: {error_code}).*
- `en`: *Couldn't save your changes because you're offline. Check your connection and try again.*
- `en` (không rõ nguyên nhân): *We couldn't load your invoices right now. Refresh the page or contact support if this keeps happening (code: {error_code}).*

---

## 3. Trạng thái trống (Empty States)

- **Công thức 3 bước:** `[Tiêu đề hiện trạng] + [Mô tả giá trị / mục đích] + [CTA dẫn lối bắt đầu]`
- **Lý do:** Màn hình trắng trơn hoặc chỉ ghi *“Không có dữ liệu”* / *“No data”* dễ khiến người dùng mới nghĩ tính năng bị lỗi hoặc không biết bắt đầu từ đâu.
- **Quy tắc:**
  - Phân biệt **trạng thái trống ban đầu** (chưa có dữ liệu → gợi ý tạo mới) với **trạng thái trống do bộ lọc/tìm kiếm** (không khớp kết quả → gợi ý `Xóa bộ lọc` / `Clear filters` hoặc đổi từ khóa).

**Ví dụ chuẩn (Ban đầu):**
- `vi`:
  - Tiêu đề: `Chưa có dự án nào`
  - Mô tả: `Tạo dự án đầu tiên để theo dõi tiến độ công việc cùng đội ngũ.`
  - CTA: `Tạo dự án mới`
- `en`:
  - Tiêu đề: `No projects yet`
  - Mô tả: `Create your first project to track progress with your team.`
  - CTA: `Create project`

**Ví dụ chuẩn (Sau khi lọc / tìm kiếm):**
- `vi`: `Không tìm thấy kết quả khớp với “{từ_khóa}”` → `Thử từ khóa khác hoặc xóa bộ lọc đang áp dụng.` → CTA: `Xóa bộ lọc`
- `en`: `No results for "{query}"` → `Try a different search term or clear your active filters.` → CTA: `Clear filters`

---

## 4. Hộp thoại xác nhận phá hủy (Confirmation & Destruction Dialogs)

- **Công thức:** `Xóa {tên_đối_tượng}?` + `[Hậu quả & phạm vi ảnh hưởng]` + `[Nút an toàn] / [Nút phá hủy đích danh]`
- **Lý do:** Câu hỏi chung chung (*“Bạn có chắc chắn không?”*) buộc người dùng đọc lại toàn bộ bối cảnh; còn cặp nút `Đồng ý` / `Hủy` dễ gây bấm nhầm khi đang thao tác nhanh.
- **Quy tắc:**
  - **Đừng lạm dụng modal:** Nếu hành động có thể khôi phục dễ dàng (như lưu trữ ghi chú, bỏ ghim), ưu tiên thực hiện ngay kèm thanh **Undo / Hoàn tác** thay vì bật hộp thoại chặn màn hình.
  - Chỉ dùng modal xác nhận cho hành động khó đảo ngược hoặc ảnh hưởng diện rộng (xóa vĩnh viễn, hủy gói, thu hồi quyền).
  - Nút an toàn ưu tiên nhãn cụ thể (`Giữ lại` / `Keep`, `Giữ lại dự án` / `Keep project`), nút phá hủy mang màu cảnh báo và lặp lại đúng động từ + đối tượng (`Xóa dự án` / `Delete project`).

**Ví dụ chuẩn:**
- `vi`:
  - Tiêu đề: `Xóa dự án “{tên_dự_án}”?`
  - Mô tả: `Hành động này không thể hoàn tác. Toàn bộ tệp và bình luận trong dự án sẽ bị xóa vĩnh viễn.`
  - Nút phụ (an toàn): `Giữ lại` | Nút chính (danger): `Xóa dự án`
- `en`:
  - Tiêu đề: `Delete "{project_name}"?`
  - Mô tả: `This action can't be undone. All files and comments in this project will be permanently deleted.`
  - Nút phụ (an toàn): `Keep project` | Nút chính (danger): `Delete project`

---

## 5. Biểu mẫu & Báo lỗi nhập liệu (Forms & Inline Validation)

- **Nhãn trường (Label):** Luôn đứng độc lập bên trên hoặc bên cạnh ô nhập; không dùng placeholder thay cho label vì người dùng quên mất mình đang nhập trường nào ngay khi gõ ký tự đầu tiên.
- **Văn bản gợi ý (Placeholder):** Đưa ví dụ định dạng hợp lệ hoặc mô tả cực ngắn (ví dụ: `nguyenvana@congty.vn` hoặc `name@company.com`), không lặp lại tên nhãn (*“Nhập email của bạn”*).
- **Lỗi nhập liệu (Inline Error):**
  - Hiển thị ngay dưới trường bị lỗi.
  - Chỉ rõ điều kiện còn thiếu để hợp lệ thay vì phán xét chung chung.

| Thành phần | Tránh | Chuẩn (`vi` / `en`) |
| :--- | :--- | :--- |
| Placeholder email | `Nhập địa chỉ email` / `Enter your email` | `lan.nguyen@congty.vn` / `alex@company.com` |
| Lỗi mật khẩu | `Mật khẩu sai` / `Invalid password` | `Mật khẩu cần tối thiểu 8 ký tự, gồm cả chữ và số.` / `Use at least 8 characters, including a letter and a number.` |
| Lỗi bỏ trống bắt buộc | `Không hợp lệ` / `Required` | `Nhập tên dự án để tiếp tục.` / `Enter a project name to continue.` |

---

## 6. Chú giải công cụ (Tooltips)

- Chỉ thêm tooltip khi nó giải thích *vì sao*, phím tắt hoặc hệ quả giúp người dùng ra quyết định.
- Không lặp lại nguyên văn nhãn đã hiển thị trên giao diện (trừ icon button không có chữ, khi đó tooltip đóng vai trò định danh chức năng + phím tắt nếu có).
- Ví dụ:
  - Chưa đạt: Hover vào nút `Xuất CSV` hiện tooltip `Xuất CSV`.
  - Chuẩn: Hover vào nút `Xuất CSV` hiện `Tải toàn bộ dữ liệu đã lọc theo cột đang hiển thị` / `Download filtered rows using the visible columns`.

---

## 7. Trạng thái chờ & Tiến trình (Loading & Progress States)

- Dùng động từ đang diễn ra kết hợp dấu ba chấm đơn `…`: `Đang tải dữ liệu…`, `Đang đồng bộ…` | `Loading data…`, `Syncing…`.
- Với tác vụ kéo dài trên vài giây (nhập tệp, tạo báo cáo), hiển thị bước hiện tại hoặc ước lượng thời gian (`Đang xử lý 12/40 ảnh…` / `Processing 12 of 40 images…`) để giảm cảm giác treo máy.

---

## 8. Thông báo nổi & Banner (Toasts & Inline Alerts)

- **Toast:** Chỉ dùng cho phản hồi ngắn sau thao tác tức thì (`Đã sao chép liên kết` / `Link copied`, `Đã lưu vào thùng rác — Hoàn tác` / `Moved to trash — Undo`). Không nhét lỗi nghiêm trọng cần người dùng đọc kỹ hoặc điền thông tin vào toast tự tắt sau 3 giây.
- **Inline Banner:** Dùng cho cảnh báo trạng thái hệ thống hoặc quyền lợi gắn với màn hình hiện tại (`Gói dùng thử còn 3 ngày.` / `Your trial ends in 3 days.`) kèm đúng 1 hành động chính nếu cần.

---

## 9. Hướng dẫn ban đầu (Onboarding & Progressive Disclosure)

- Trình bày thông tin theo từng bước logic; mỗi màn hình hoặc thẻ hướng dẫn chỉ tập trung vào một hành động then chốt.
- Ưu tiên cho người dùng chạm giá trị thật càng sớm càng tốt trước khi yêu cầu thiết lập cấu hình phụ.

---

## 10. Bảng kiểm nhanh Do's & Don'ts

| Nên làm (Do) | Không nên làm (Don't) |
| :--- | :--- |
| Bắt đầu nút bấm bằng động từ hành động cụ thể (`Tạo dự án`, `Save changes`). | Không dùng nhãn mơ hồ hoặc cộc lốc (`OK`, `Gửi`, `Submit`). |
| Cấu trúc lỗi gồm 3 phần: Hiện trạng, Lý do (nếu biết) và Hướng xử lý. | Không chỉ hiện mã lỗi nội bộ hoặc câu cụt lủn (`Lỗi hệ thống`, `Failed`). |
| Trạng thái trống luôn có lối bắt đầu hoặc nút xóa bộ lọc. | Không bỏ màn hình trống rơi vào ngõ cụt không hành động. |
| Modal xóa hỏi thẳng vào đối tượng và nêu hậu quả rõ ràng. | Không hỏi chung chung (`Bạn có chắc không?` / `Are you sure?`). |
| Tôn trọng nhãn nút rõ hành vi (`Giữ lại` / `Xóa dự án`). | Không dùng cặp nút gây nhầm (`Đồng ý` / `Hủy bỏ`) cho thao tác phá hủy. |
| Viết câu chủ động, gọn, đúng văn phong bản địa của từng ngôn ngữ. | Không dịch word-by-word cấu trúc bị động tiếng Anh sang tiếng Việt. |
| Dùng Sentence Case cho tiêu đề UI tiếng Việt (và mặc định khuyến nghị cho tiếng Anh). | Không áp dụng Title Case (viết hoa chữ đầu mọi từ) lên tiếng Việt. |
| Dùng Undo cho thao tác có thể khôi phục thay vì chặn bằng modal. | Không bật hộp thoại xác nhận cho mọi thao tác thường nhật. |
| Giữ nguyên 1 thuật ngữ duy nhất cho 1 khái niệm trên cả sản phẩm. | Không đổi từ đồng nghĩa tùy hứng giữa các màn hình. |
| Viết trực tiếp cho người dùng cuối. | Không để lọt ghi chú dev, nhật ký cập nhật hay câu trao đổi nội bộ lên UI. |
