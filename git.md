## I. Tạo kho lưu trữ mới

`` `bash
$ git init
`` `

Tạo cấu trúc tệp và thư mục

Thêm tệp mới và cam kết:

`` `bash
$ git thêm -A
$ git commit -m "Kho lưu trữ ban đầu"
`` `


## Kho chia sẻ

1. Chia sẻ với github (công khai)

`` `bash
$ git từ xa thêm nguồn gốc <url>
`` `

2. Chia sẻ với gitlab

`` `bash
$ git từ xa thêm gitlab <url>
`` `

3. Liệt kê tên từ xa:

`` `bash
$ git từ xa -v
`` `

4. Đẩy đến từ xa:

`` `bash
$ git đẩy <tên từ xa> <tên chi nhánh>
`` `

5. Kéo mã mới:

`` `bash
$ git pull <tên từ xa> <tên chi nhánh>
`` `


## II. Sao chép một kho lưu trữ mới
Làm việc với những người khác


`` `bash
$ git clone <url>
`` `

Tạo chi nhánh mới

`` `bash
$ git chi nhánh <tên chi nhánh>
# liệt kê tất cả các chi nhánh
$ git chi nhánh -a
`` `

Chuyển nhánh
`` `bash
$ git thanh toán <tên chi nhánh>
`` `

## III. Đặt lại về cam kết cụ thể

Xem nhật ký cam kết:

`` `bash
$ git nhật ký
$ git log - dòng
$ git log - dòng -20
`` `

Kiểm tra phiên bản lịch sử
`` `bash
$ git đặt lại - cho phép <commit-hash>
`` `