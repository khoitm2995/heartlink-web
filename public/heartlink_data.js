// =====================================================================
// HEARTLINK STATIC DATA MODULE (heartlink_data.js)
// Bao gồm: 150 hồ sơ cân bằng (60 Nam, 60 Nữ, 30 LGBT), 16 kịch bản lừa đảo,
// Địa điểm hẹn hò, Quà tặng, Kết thúc đa nhánh & Giọng điệu vùng miền.
// =====================================================================

window.HEARTLINK_DATA = (function () {
  const ALL_HOBBIES = [
    "Du lịch & Khám phá", "Cà phê & Trà chiều", "Âm nhạc & Concert", "Xem phim & Netflix",
    "Gym & Thể thao", "Ẩm thực & Nấu ăn", "Nuôi thú cưng (Chó/Mèo)", "Nhiếp ảnh",
    "Đọc sách", "Chơi game / Esports", "Thời trang & Mua sắm", "Yoga & Thiền",
    "Cắm trại & Leo núi", "Nghệ thuật & Triển lãm", "Chạy bộ & Đạp xe", "Hoạt động tình nguyện"
  ];

  const ALL_TRAITS = [
    "Chân thành", "Tinh tế", "Hài hước", "Thận trọng", "Lãng mạn",
    "Thực tế", "Điềm đạm", "Cởi mở", "Thẳng thắn"
  ];

  const IRL_VENUES = [
    { id: "cafe", name: "Quán Cà Phê Acoustic & Sách", cost: 160000, icon: "☕", safety: "An toàn cao", riskLevel: 1, items: ["2 Cà phê/Trà trái cây (110k)", "1 Bánh Tiramisu (50k)"], desc: "Không gian công cộng ấm cúng, đông người, rất phù hợp cho buổi gặp đầu tiên." },
    { id: "casual_rest", name: "Nhà Hàng Bình Dân / Quán Ăn Ấm Cúng", cost: 340000, icon: "🍜", safety: "An toàn cao", riskLevel: 1, items: ["Set lẩu/nướng 2 người (280k)", "2 Nước ép tươi (60k)"], desc: "Gần gũi, giá hợp lý, dễ quan sát sự tinh tế và cách cư xử đời thường." },
    { id: "restaurant", name: "Nhà Hàng Cao Cấp (Fine Dining)", cost: 1800000, icon: "🍷", safety: "An toàn vừa (Rủi ro bill cao)", riskLevel: 2, items: ["2 Phần Bò Steak thượng hạng (1.300k)", "2 Ly Rượu vang/Mocktail (500k)"], desc: "Lãng mạn dưới ánh nến, nhưng dễ bị đối phương thực dụng gọi thêm món đắt đỏ." },
    { id: "cinema", name: "Rạp Chiếu Phim CGV / IMAX", cost: 360000, icon: "🍿", safety: "An toàn cao", riskLevel: 1, items: ["2 Vé xem phim ghế đôi (240k)", "1 Combo Bắp phô mai & 2 Nước (120k)"], desc: "Cùng thưởng thức phim mới và trò chuyện tự nhiên sau suất chiếu." },
    { id: "mall", name: "Trung Tâm Thương Mại Quận 1", cost: 650000, icon: "🛍️", safety: "An toàn cao (Dễ phát sinh mua sắm)", riskLevel: 2, items: ["Ăn nhẹ khu Foodcourt (350k)", "Trà sữa & Phụ kiện nhỏ (300k)"], desc: "Đông đúc, an toàn, nhưng dễ xuất hiện tình huống đối phương gợi ý mua quà." },
    { id: "park", name: "Công Viên Bến Bạch Đằng / Phố Đi Bộ", cost: 80000, icon: "🌳", safety: "An toàn rất cao (Phép thử vàng)", riskLevel: 1, items: ["2 Ly nước mía / Trà chanh (50k)", "Đồ ăn vặt dạo phố (30k)"], desc: "Bình dị, thoáng đãng. Phép thử xem đối phương coi trọng con người hay vật chất." },
    { id: "amusement", name: "Khu Vui Chơi Giải Trí", cost: 550000, icon: "🎡", safety: "An toàn cao", riskLevel: 1, items: ["2 Vé trọn gói khu trò chơi (440k)", "Kem tươi & Xu gắp thú (110k)"], desc: "Năng động, nhiều tiếng cười, giúp hai người nhanh chóng xóa bỏ khoảng cách." },
    { id: "karaoke", name: "Quán Karaoke Phòng Riêng", cost: 850000, icon: "🎤", safety: "Trung bình (Không gian kín)", riskLevel: 2, items: ["Tiền giờ phòng VIP (450k)", "Đĩa trái cây & Đồ uống (400k)"], desc: "Sôi động nhưng là phòng kín, cần lưu ý nếu mới gặp lần đầu." },
    { id: "bar_lounge", name: "Bar, Lounge, Pub Đêm", cost: 1600000, icon: "🍸", safety: "Thấp (Cảnh giác Booking Bar)", riskLevel: 3, items: ["Bàn Cocktail & Tapas (1.200k)", "Phí phục vụ đêm (400k)"], desc: "Nhạc sôi động, ánh đèn mờ; nguy cơ bị nhân viên/bạn quen của đối phương ép gọi rượu đắt tiền." },
    { id: "hotel", name: "Khách Sạn / Homestay Riêng Tư", cost: 1200000, icon: "🏨", safety: "Rất thấp (Nguy cơ quay lén/tống tiền)", riskLevel: 4, items: ["Phòng nghỉ Boutique (900k)", "Rượu vang & Đồ dùng (300k)"], desc: "Địa điểm riêng tư nhạy cảm; tuyệt đối tránh nếu chưa thực sự hiểu rõ và tin tưởng nhau." },
    { id: "private_home", name: "Nhà Riêng / Căn Hộ Cá Nhân", cost: 280000, icon: "🏠", safety: "Thấp khi mới quen", riskLevel: 3, items: ["Nguyên liệu siêu thị tự nấu ăn (220k)", "Trái cây tráng miệng (60k)"], desc: "Ấm cúng cho cặp đôi đã yêu lâu, nhưng tiềm ẩn rủi ro an toàn nếu mới quen." },
    { id: "travel", name: "Khu Du Lịch Nghỉ Dưỡng Ngắn Ngày", cost: 4200000, icon: "🏖️", safety: "Trung bình (Chi phí lớn)", riskLevel: 3, items: ["Vé di chuyển & Resort 2N1Đ (3.200k)", "Ăn uống hải sản & Tham quan (1.000k)"], desc: "Chuyến đi gắn kết sâu sắc ở Giai đoạn 4-5, hoặc cái bẫy chi phí nếu vội vàng." },
    { id: "museum", name: "Bảo Tàng / Triển Lãm Nghệ Thuật", cost: 220000, icon: "🖼️", safety: "An toàn rất cao", riskLevel: 1, items: ["2 Vé vào cổng triển lãm (140k)", "2 Ly matcha quán sân vườn (80k)"], desc: "Không gian tinh tế, nhiều chủ đề nghệ thuật để trò chuyện sâu sắc." },
    { id: "pickleball", name: "Sân Pickleball / Cầu Lông Đôi", cost: 280000, icon: "🏸", safety: "An toàn rất cao", riskLevel: 1, items: ["Tiền thuê sân 1.5 giờ (200k)", "Nước điện giải & Khăn lạnh (80k)"], desc: "Buổi hẹn vận động tràn đầy năng lượng, dễ tạo sự gắn kết tự nhiên!" },
    { id: "partner_choice", name: "📍 Địa Điểm Do Đối Phương Đề Xuất", cost: 500000, icon: "✨", safety: "Tùy thuộc bản chất đối phương", riskLevel: 2, items: ["Theo sắp xếp của đối phương"], desc: "Để đối phương toàn quyền chọn quán — có thể là góc quen tử tế hoặc cái bẫy dựng sẵn!" }
  ];

  const GIFT_CATALOG = [
    { id: "milk_tea", name: "Trà Ô Long Kem Cheese & Bánh Ngọt", cost: 120000, affection: 6, icon: "🧋" },
    { id: "flowers", name: "Bó Hoa Hồng Tươi Hồ Thị Kỷ", cost: 450000, affection: 12, icon: "🌹" },
    { id: "boardgame_box", name: "Hộp Chocolate Bỉ & Gấu Bông Cao Cấp", cost: 950000, affection: 18, icon: "🧸" },
    { id: "perfume", name: "Nước Hoa & Set Mỹ Phẩm Cao Cấp", cost: 2800000, affection: 22, icon: "💄" }
  ];

  const SCAM_BLUEPRINTS = [
    { archetype: "scam_crypto", scamType: "Kịch bản 1: Lừa đảo đầu tư tiền ảo (Crypto Pig Butchering)", job: "Quản lý Quỹ Đầu tư Web3", stage1Title: "Nạp thử lệnh trải nghiệm sàn BituxePro (+500k lãi mồi)", stage1Amount: 2000000, stage1Reward: 500000, stage1Desc: "Rủ bạn nạp 2.000.000đ đánh lệnh 3 phút và cho rút lãi ngay 500.000đ.", stage2Title: "Vào gói VIP Sóng Cá Voi", stage2Amount: 30000000, stage2Desc: "Giục nạp 30.000.000đ rồi khóa tài khoản đòi thuế giải ngân!" },
    { archetype: "scam_foreign_military", scamType: "Kịch bản 2: Giả danh quân nhân/bác sĩ nước ngoài gửi quà", job: "Bác sĩ Quân y Quốc tế", stage1Title: "Đóng phí hải quan nhận Kiện hàng 50,000 USD", stage1Amount: 15000000, stage1Reward: 0, stage1Desc: "Báo gửi hộp quà ngoại tệ về sân bay, nhờ đóng 15.000.000đ phí thông quan.", stage2Title: "Phí Bảo hiểm Chống rửa tiền", stage2Amount: 28000000, stage2Desc: "Đòi nộp thêm 28.000.000đ nếu không sẽ báo hải quan!" },
    { archetype: "scam_borrow_money", scamType: "Kịch bản 3: Lừa đảo vay tiền (Biến cố cấp cứu)", job: "Nhân viên Thiết kế & CSKH", stage1Title: "Vay nóng đóng viện phí cấp cứu trong đêm", stage1Amount: 6000000, stage1Reward: 0, stage1Desc: "Khóc lóc báo người nhà nhập viện, lỗi OTP ngân hàng, xin vay 6.000.000đ.", stage2Title: "Vay thêm tiền phẫu thuật gấp", stage2Amount: 18000000, stage2Desc: "Tiếp tục vay 18.000.000đ rồi chặn liên lạc!" },
    { archetype: "scam_love_bombing", scamType: "Kịch bản 4: Thao túng tâm lý & Kiểm soát tài chính", job: "Giám đốc Sáng tạo", stage1Title: "Nạp tiền mở Quỹ Hôn Nhân Chung", stage1Amount: 10000000, stage1Reward: 0, stage1Desc: "Gọi vợ/chồng ngay ngày đầu, ép chuyển 10.000.000đ vào quỹ chung đứng tên hắn.", stage2Title: "Chuyển tiết kiệm chứng minh lòng chung thủy", stage2Amount: 30000000, stage2Desc: "Thao túng tâm lý ép chuyển thêm 30.000.000đ!" },
    { archetype: "scam_catfish", scamType: "Kịch bản 5: Giả mạo danh tính (Catfish & Vòi quà)", job: "Người mẫu Ảnh Freelance", stage1Title: "Chuyển khoản mua quà làm quen trước khi gặp", stage1Amount: 3500000, stage1Reward: 0, stage1Desc: "Dùng ảnh hot girl mạng, vòi chuyển 3.500.000đ mua mỹ phẩm trước khi gặp.", stage2Title: "Xin tiền đổi điện thoại sửa camera", stage2Amount: 15000000, stage2Desc: "Hủy hẹn phút chót và xin thêm 15.000.000đ!" },
    { archetype: "scam_phishing_link", scamType: "Kịch bản 6: Gửi link độc hại chiếm tài khoản (Phishing)", job: "Nhiếp ảnh gia & Blogger", stage1Title: "Bấm Link Bình Chọn & Đăng nhập tài khoản", stage1Amount: 0, stage1Reward: 0, stage1Desc: "Gửi link lạ nhờ đăng nhập vote cuộc thi ảnh.", stage2Title: "Nhập mã OTP 6 số xác thực", stage2Amount: 25000000, stage2Desc: "Chiếm đoạt quyền đăng nhập và rút sạch 25.000.000đ!" },
    { archetype: "scam_stock_app", scamType: "Kịch bản 7: Ứng dụng đầu tư chứng khoán giả", job: "Trưởng phòng Phân tích Quỹ", stage1Title: "Mua thử lô cổ phiếu ưu đãi nội bộ", stage1Amount: 3000000, stage1Reward: 800000, stage1Desc: "Phím mã nội bộ trên app ngoài App Store, cho rút lãi 800k.", stage2Title: "Đấu giá lô Cổ phiếu IPO Khóa Hạn Mức", stage2Amount: 35000000, stage2Desc: "Ép nạp 35.000.000đ để mở khóa lệnh rút!" },
    { archetype: "scam_gambling", scamType: "Kịch bản 8: Cá cược trực tuyến / Lỗ hổng hệ thống", job: "Kỹ sư Vận hành Server", stage1Title: "Đánh hộ khung giờ lỗi hệ thống (Tặng 500k)", stage1Amount: 0, stage1Reward: 500000, stage1Desc: "Nhờ bấm lệnh hộ trên tài khoản của họ để tin rằng thắng 100%.", stage2Title: "Nạp vốn riêng đánh lỗ hổng", stage2Amount: 25000000, stage2Desc: "Khóa tài khoản ngay khi bạn nạp 25.000.000đ!" },
    { archetype: "scam_celeb", scamType: "Kịch bản 9: Giả mạo người nổi tiếng (Celeb Impersonator)", job: "Nghệ sĩ Giải trí (Nick bí mật)", stage1Title: "Đóng phí Cấp Thẻ Bảo Mật NDA gặp riêng", stage1Amount: 8000000, stage1Reward: 0, stage1Desc: "Đòi đóng 8.000.000đ phí thẻ bảo mật công ty quản lý để gặp riêng.", stage2Title: "Mượn tiền xử lý hợp đồng kín", stage2Amount: 20000000, stage2Desc: "Vay thêm 20.000.000đ rồi biến mất!" },
    { archetype: "scam_sextortion", scamType: "Kịch bản 10: Tống tiền hình ảnh nhạy cảm (Sextortion)", job: "DJ & Model Đêm", stage1Title: "Gọi video nhạy cảm đêm khuya", stage1Amount: 0, stage1Reward: 0, stage1Desc: "Gạ bật cam riêng tư để quay màn hình khuôn mặt.", stage2Title: "TỐNG TIỀN: Chuyển 25.000.000đ xóa clip", stage2Amount: 25000000, stage2Desc: "Đe dọa gửi clip cho đồng nghiệp & gia đình nếu không chuyển 25.000.000đ!" },
    { archetype: "scam_flight_hotel", scamType: "Kịch bản 11: Lừa tiền vé máy bay / khách sạn", job: "Chuyên viên Hàng không", stage1Title: "Thanh toán hộ mã giữ chỗ Vé máy bay", stage1Amount: 4800000, stage1Reward: 0, stage1Desc: "Gửi ảnh vé giả sắp hết hạn nhờ chuyển khoản hộ 4.800.000đ.", stage2Title: "Đặt cọc Phòng Suite Resort 5 sao", stage2Amount: 12000000, stage2Desc: "Nhờ cọc thêm 12.000.000đ rồi chặn số!" },
    { archetype: "scam_sales_booking", scamType: "Kịch bản 12: Booking Bar & Chốt đơn hoàn hoa hồng", job: "PR Sự kiện VIP Lounge", stage1Title: "Làm nhiệm vụ chốt đơn / Combo Lounge", stage1Amount: 2500000, stage1Reward: 0, stage1Desc: "Dụ thanh toán đơn hàng nhiệm vụ / combo mở màn 2.500.000đ.", stage2Title: "Hóa đơn chặt chém / Nhiệm vụ đơn kép", stage2Amount: 16000000, stage2Desc: "Ép thanh toán 16.000.000đ rồi chuồn mất!" },
    { archetype: "scam_ekyc_sim", scamType: "Kịch bản 13: Đánh cắp danh tính eKYC vay nợ hộ", job: "Chuyên viên Thẩm định Tín dụng", stage1Title: "Gửi ảnh CCCD + Quét khuôn mặt nhận quà", stage1Amount: 0, stage1Reward: 0, stage1Desc: "Xin ảnh CCCD 2 mặt và video quay khuôn mặt với lý do xuất vé/thẻ VIP.", stage2Title: "Gánh khoản nợ tín dụng đen 45.000.000đ", stage2Amount: 45000000, stage2Desc: "Dùng hồ sơ eKYC của bạn vay nóng trên các app tín dụng!" },
    { archetype: "scam_sugar_deposit", scamType: "Kịch bản 14: Bẫy 'Sugar' đòi phí đặt cọc VIP", job: "Quản lý CLB Thượng lưu", stage1Title: "Đóng phí xác minh nhận chu cấp 40tr/tháng", stage1Amount: 3000000, stage1Reward: 0, stage1Desc: "Hứa chu cấp lớn nhưng bắt đóng 3.000.000đ phí xác minh thẻ.", stage2Title: "Phí bảo mật giao dịch quốc tế", stage2Amount: 15000000, stage2Desc: "Đòi thêm 15.000.000đ rồi chặn liên lạc!" },
    { archetype: "scam_fake_shop_order", scamType: "Kịch bản 15: Thanh toán hộ đơn hàng hoàn tiền giả", job: "Chủ Shop Hoa & Quà Tặng", stage1Title: "Thanh toán hộ đơn hoa khai trương", stage1Amount: 2800000, stage1Reward: 0, stage1Desc: "Báo lỗi SmartBanking nhờ trả hộ 2.800.000đ đơn hoa trên web giả.", stage2Title: "Thanh toán tiếp lô quà doanh nghiệp", stage2Amount: 22000000, stage2Desc: "Viện cớ kẹt đơn bắt chuyển thêm 22.000.000đ!" },
    { archetype: "scam_physical_theft", scamType: "Kịch bản 16: Chuốc thuốc / Trộm tài sản ngoài đời", job: "Tổ chức Tiệc Tự do", stage1Title: "Mời uống đồ uống pha sẵn tại quán vắng", stage1Amount: 0, stage1Reward: 0, stage1Desc: "Rủ đến quán vắng tối muộn và gọi sẵn đồ uống trước khi bạn tới.", stage2Title: "Trộm điện thoại & rút sạch 35.000.000đ", stage2Amount: 35000000, stage2Desc: "Lợi dụng lúc bạn sơ hở trộm điện thoại và rút tiền!" }
  ];

  const SPECIAL_PROFILES = [
    {
      id: "char_00_creator", name: "Mike Khôi", age: 31, gender: "Nam", location: "TP. Hồ Chí Minh", distance: 2,
      job: "Trưởng phòng Digital Marketing", education: "Quản trị Kinh doanh & Sáng tạo Game", height: 175,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Tham gia 2 tháng trước", photoCount: 4, completionRate: 100,
      subtleClue: "Tài khoản có tích xanh, ảnh đời thường chỉn chu với hồ cá thủy sinh và bộ Board Game.",
      bio: "Ban ngày chạy chiến dịch Digital Marketing, tối về chăm bể cá thủy sinh, săn Pokémon GO và chơi Board Game chiến thuật 🐟🎲. Nếu bạn là cô gái tinh tế và chân thành — biết đâu tụi mình sẽ có một buổi hẹn thú vị ngoài đời!",
      hobbies: ["Sáng tạo Game", "Cá cảnh & Thủy sinh", "Board Games", "Digital Marketing", "Pokémon GO"],
      lifestyle: "Thực tế, thẳng thắn, trân trọng sự chân thành.", loveView: "Tình yêu đẹp nhất là khi cả hai thông minh và tôn trọng ranh giới.",
      personality: ["Thẳng thắn", "Tinh tế", "Logic", "Ấm áp"], futureGoal: "Phát triển nhiều tựa game hay và tìm người đồng hành thấu hiểu.",
      idealType: "Cô gái chân thành, thông minh, biết bảo vệ bản thân.", dailyHabit: "Chạy chiến dịch Marketing ban ngày, tối chăm hồ cá.",
      financeView: "Minh bạch, độc lập.", archetype: "creator_special", scamType: null, isScammer: false,
      trueMotive: "Nhà làm game HeartLink tìm kiếm một cô gái tinh tế và chân thành để hẹn hò ngoài đời.",
      avatarStyle: { skin: "#f2caa8", hair: "short_modern", outfit: "suit_navy", bg: "aquarium", acc: "glasses_thin", gender: "male" },
      album: [{ title: "Chân dung đời thường", scene: "portrait", caption: "Một ngày làm việc bình yên ✨" }, { title: "Hồ cá thủy sinh", scene: "aquarium", caption: "Thú vui nuôi cá cảnh 🐟" }],
      hiddenStats: { sincerity: 99, interest: 88, compatibility: 96, danger: 0, manipulation: 0, financialMotive: 0, patience: 95 },
      videoCallBehavior: "Bật Video Call cười tươi ngay từ bàn làm việc bên bể cá thủy sinh!",
      investigationClue: "Tài khoản tích xanh chính chủ tại TP.HCM.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_33_single_mom", name: "Vũ Ngọc Lan", age: 29, gender: "Nữ", location: "Quận Phú Nhuận, TP.HCM", distance: 4,
      job: "Quản lý Spa & Chăm sóc Sắc đẹp", education: "Cao đẳng Y Dược", height: 163,
      relationshipStatus: "Mẹ đơn thân (Có 1 bé gái 4 tuổi)", verified: true, joinedTime: "Tham gia 3 tháng trước", photoCount: 4, completionRate: 96,
      subtleClue: "Hồ sơ ghi rõ là mẹ đơn thân của một bé gái 4 tuổi, tự chủ tài chính.",
      bio: "Mẹ đơn thân của thiên thần nhỏ 4 tuổi (bé Bơ) 👩‍👧🌸. Lan tự lập kinh tế, chỉ mong tìm một người đàn ông trưởng thành, bao dung.",
      hobbies: ["Ẩm thực & Nấu ăn", "Yoga & Thiền", "Đọc sách", "Cà phê & Trà chiều"],
      lifestyle: "Quản lý Spa ban ngày, tối chăm con gái.", loveView: "Thương Lan thì xin hãy tôn trọng cả thiên thần nhỏ của Lan.",
      personality: ["Dịu dàng", "Chín chắn", "Tự trọng cao", "Chân thành"], futureGoal: "Nuôi dạy bé Bơ khôn lớn và tìm bến đỗ bình yên.",
      idealType: "Người điềm đạm, yêu trẻ con.", dailyHabit: "Đưa bé Bơ đi học sáng, tối đọc truyện cho con.",
      financeView: "Độc lập hoàn toàn.", archetype: "single_parent", scamType: null, isScammer: false, speechStyle: "female_outgoing",
      trueMotive: "Mẹ đơn thân tìm người đồng hành bao dung, chân thành.",
      avatarStyle: { skin: "#fde4d4", hair: "bun_elegant", outfit: "blazer_rose", bg: "flower_shop", acc: "earrings_pearl", gender: "female" },
      album: [{ title: "Tại Spa buổi sáng", scene: "portrait", caption: "Luôn mạnh mẽ vì tương lai hai mẹ con 🌸" }],
      hiddenStats: { sincerity: 96, interest: 78, compatibility: 88, danger: 2, manipulation: 3, financialMotive: 6, patience: 92 },
      videoCallBehavior: "Bật Video Call nói chuyện nhỏ nhẹ ở phòng khách.",
      investigationClue: "Quản lý Spa uy tín tại Quận Phú Nhuận.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_34_underage", name: "Nguyễn Trà My (Khai 19t)", age: 19, gender: "Nữ", location: "Quận Gò Vấp, TP.HCM", distance: 6,
      job: "Học sinh / Làm thêm part-time", education: "Đang đi học", height: 158,
      relationshipStatus: "Độc thân", verified: false, joinedTime: "Mới tham gia 3 ngày trước", photoCount: 4, completionRate: 76,
      subtleClue: "Khai 19 tuổi nhưng mặc áo dài học sinh phổ thông, nhắc ôn thi lớp 11 và bị mẹ thu điện thoại lúc 22h!",
      bio: "My 19t (nhưng nhìn trẻ hơn tuổi thật nha hihi) 🧋✨. Đừng nhắn tin khuya quá kẻo ba mẹ em la nha!",
      hobbies: ["Cà phê & Trà chiều", "Xem phim & Netflix", "Âm nhạc & Concert"],
      lifestyle: "Đi học sáng chiều, 22h nộp điện thoại cho mẹ.", loveView: "Tò mò muốn thử cảm giác hẹn hò.",
      personality: ["Hồn nhiên", "Bốc đồng", "Trẻ con"], futureGoal: "Đậu kỳ thi Tốt nghiệp THPT!",
      idealType: "Người lớn tâm lý hay mua trà sữa.", dailyHabit: "Sáng mặc đồng phục đi học.",
      financeView: "Tiền tiêu vặt ba mẹ cho mỗi tuần 300k.", archetype: "underage_teen",
      scamType: "Tình huống nhạy cảm: Người dùng chưa đủ 18 tuổi", isScammer: false, isUnderage: true,
      trueMotive: "Học sinh lớp 11 (16-17 tuổi) mượn năm sinh chị gái đăng ký app vì tò mò.",
      avatarStyle: { skin: "#fff0f3", hair: "ponytail_high", outfit: "offshoulder_white", bg: "studio_pink", acc: "ribbon_bow", gender: "female" },
      album: [{ title: "Quán trà sữa cổng trường", scene: "portrait", caption: "Trốn học thêm đi uống trà sữa 🧋" }],
      hiddenStats: { sincerity: 75, interest: 80, compatibility: 30, danger: 85, manipulation: 20, financialMotive: 10, patience: 60 },
      videoCallBehavior: "Bật Video Call lén lút khi đang đeo phù hiệu trường cấp 3!",
      investigationClue: "Phù hiệu trên áo cho thấy mới 16–17 tuổi (chưa đủ 18 tuổi)!",
      scamOffer: null, redFlagsList: ["Khai gian tuổi, thực chất đang học lớp 11 chưa đủ 18 tuổi."]
    },
    {
      id: "char_35_single_dad", name: "Trần Bảo Sơn", age: 34, gender: "Nam", location: "Quận 3, TP.HCM", distance: 5,
      job: "Kỹ sư Xây dựng & Kiến trúc", education: "Đại học Xây dựng", height: 177,
      relationshipStatus: "Bố đơn thân (Có 1 bé trai 5 tuổi)", verified: true, joinedTime: "Tham gia 4 tháng trước", photoCount: 4, completionRate: 94,
      subtleClue: "Thẳng thắn chia sẻ hoàn cảnh gà trống nuôi con, điềm đạm và có trách nhiệm.",
      bio: "Ông bố đơn thân ấm áp của cu Bin 5 tuổi 👨‍👦✨. Mong tìm một người phụ nữ dịu dàng để cùng xây dựng lại mái ấm.",
      hobbies: ["Ẩm thực & Nấu ăn", "Cắm trại & Leo núi", "Đọc sách"],
      lifestyle: "Kỷ luật, ấm áp.", loveView: "Sự bao dung và đồng hành chân thành là nền tảng gia đình.",
      personality: ["Chín chắn", "Điềm đạm", "Ấm áp", "Trách nhiệm"], futureGoal: "Hoàn thiện căn nhà phố có sân vườn nhỏ.",
      idealType: "Người chân thành, yêu trẻ nhỏ.", dailyHabit: "Sáng nấu bữa sáng cho con, ngày giám sát công trình.",
      financeView: "Vững vàng, có quỹ giáo dục riêng cho con.", archetype: "single_parent", scamType: null, isScammer: false,
      trueMotive: "Bố đơn thân tìm kiếm mối quan hệ nghiêm túc, bền vững.",
      avatarStyle: { skin: "#f0c8a8", hair: "side_part_neat", outfit: "shirt_plaid", bg: "interior_studio", acc: "watch_smart", gender: "male" },
      album: [{ title: "Tại công trường thiết kế", scene: "portrait", caption: "Mong tìm được người cùng xây tổ ấm 🏡" }],
      hiddenStats: { sincerity: 95, interest: 76, compatibility: 87, danger: 3, manipulation: 4, financialMotive: 6, patience: 93 },
      videoCallBehavior: "Bật Video Call cùng cậu con trai 5 tuổi lễ phép chào bạn!",
      investigationClue: "Kỹ sư trưởng uy tín, hoàn cảnh bố đơn thân đúng sự thật.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_36_rebound_ex", name: "Đỗ Khánh An", age: 26, gender: "Nữ", location: "Quận 1, TP.HCM", distance: 3,
      job: "Chuyên viên Tổ chức Sự kiện", education: "Đại học Hoa Sen", height: 164,
      relationshipStatus: "Mới chia tay 2 tuần", verified: true, joinedTime: "Mới tham gia 1 tuần trước", photoCount: 4, completionRate: 89,
      subtleClue: "Tâm trạng thất thường, hay vô tình so sánh bạn với người yêu cũ vừa chia tay.",
      bio: "Vừa bước ra khỏi mối tình 5 năm... 🌧️ Đang cố gắng làm mới bản thân bằng cà phê và âm nhạc.",
      hobbies: ["Âm nhạc & Concert", "Cà phê & Trà chiều", "Du lịch & Khám phá"],
      lifestyle: "Hay thức khuya nghe nhạc buồn.", loveView: "Sợ sự phản bội nhưng lại cô đơn.",
      personality: ["Nhạy cảm", "Hay hoài niệm", "Thất thường"], futureGoal: "Quên đi chuyện cũ và tìm lại cân bằng.",
      idealType: "Người kiên nhẫn.", dailyHabit: "Chạy sự kiện ban ngày, tối ngồi quán quen.",
      financeView: "Sòng phẳng, không vụ lợi.", archetype: "rebound_ex", scamType: null, isScammer: false,
      trueMotive: "Tìm người lấp chỗ trống (Rebound) sau khi chia tay.",
      avatarStyle: { skin: "#fde6d8", hair: "long_wavy_brown", outfit: "sweater_cream", bg: "street_sunset", acc: "earrings_pearl", gender: "female" },
      album: [{ title: "Ngắm mưa qua khung cửa", scene: "portrait", caption: "Có những thói quen cũ thật khó bỏ... 🌧️" }],
      hiddenStats: { sincerity: 68, interest: 60, compatibility: 62, danger: 25, manipulation: 30, financialMotive: 5, patience: 50 },
      videoCallBehavior: "Bật Video Call tâm sự thật lòng nhưng mắt hơi đỏ.",
      investigationClue: "Trên trang cá nhân vẫn giữ album ảnh với người yêu cũ.", scamOffer: null, redFlagsList: ["Dùng người mới làm phương án thay thế (Rebound)."]
    },
    {
      id: "char_sp_bieber", name: "Justin Bieber", age: 30, gender: "Nam", location: "Quận 1, TP.HCM (Tour Châu Á)", distance: 5,
      job: "Siêu sao Nhạc Pop & Nhạc sĩ", education: "Nghệ sĩ Độc lập", height: 175,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Đặc biệt • Người nổi tiếng", photoCount: 4, completionRate: 95,
      subtleClue: "Hay chêm tiếng Anh tự nhiên và tâm sự về áp lực ánh đèn sân khấu.",
      bio: "Yo! Đang có chuyến lưu diễn ngắn tại Sài Gòn 🎤✨. Tìm một người nói chuyện thật thà, không quan tâm đến danh tiếng.",
      hobbies: ["Sáng tác nhạc", "Trượt ván", "Thời trang Streetwear", "Cà phê"],
      lifestyle: "Bận rộn lịch diễn nhưng thích buổi tối yên tĩnh.", loveView: "Tình yêu là nơi mình được là chính mình.",
      personality: ["Ngẫu hứng", "Chân thành", "Nhạy cảm"], futureGoal: "Ra mắt album mới và tìm bình yên.",
      idealType: "Người chân thành, không vụ lợi.", dailyHabit: "Thu âm trong studio.", financeView: "Ghét bị lợi dụng tiền bạc.",
      archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "celeb_bieber",
      trueMotive: "Siêu sao nhạc Pop tìm kiếm sự kết nối chân thật.",
      avatarStyle: { skin: "#f5d0b5", hair: "short_blonde", outfit: "hoodie_dark", bg: "stage_lights", acc: "sunglasses", gender: "male" },
      album: [{ title: "Sau cánh gà sân khấu", scene: "portrait", caption: "Music is life 🎶" }],
      hiddenStats: { sincerity: 86, interest: 75, compatibility: 82, danger: 5, manipulation: 8, financialMotive: 5, patience: 70 },
      videoCallBehavior: "Bật Video Call từ phòng thu, đội mũ beanie cười thân thiện.",
      investigationClue: "Tài khoản nghệ sĩ đã xác minh chính chủ.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_lisa", name: "Lisa (BLACKPINK)", age: 27, gender: "Nữ", location: "Thảo Điền, TP.HCM", distance: 4,
      job: "Ca sĩ Idol & Vũ công Chính", education: "Nghệ thuật Biểu diễn", height: 167,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Đặc biệt • Người nổi tiếng", photoCount: 4, completionRate: 96,
      subtleClue: "Năng lượng tích cực rực rỡ, rất yêu mèo.",
      bio: "Hey there! Mình là Lisa 💛🖤. Ngoài giờ tập nhảy mình chỉ thích chơi với đàn mèo L-family và chụp ảnh film!",
      hobbies: ["Nhảy múa", "Nuôi mèo", "Nhiếp ảnh Film", "Ẩm thực Thái"],
      lifestyle: "Năng động, kỷ luật tập luyện.", loveView: "Thích người vui vẻ, ấm áp và yêu động vật.",
      personality: ["Rạng rỡ", "Sởi lởi", "Chăm chỉ"], futureGoal: "Chinh phục các sân khấu lớn.",
      idealType: "Người ấm áp, hài hước và yêu mèo.", dailyHabit: "Tập nhảy, chơi với mèo.", financeView: "Độc lập hoàn toàn.",
      archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "celeb_lisa",
      trueMotive: "Idol tìm kiếm người bạn đồng hành ấm áp.",
      avatarStyle: { skin: "#fde4d4", hair: "long_wavy_black", outfit: "blazer_beige", bg: "stage_lights", acc: "earrings_gold", gender: "female" },
      album: [{ title: "Trên sân khấu rực rỡ", scene: "portrait", caption: "Thank you for the energy! ✨" }],
      hiddenStats: { sincerity: 92, interest: 80, compatibility: 88, danger: 3, manipulation: 4, financialMotive: 5, patience: 85 },
      videoCallBehavior: "Bật Video Call vẫy tay cực tươi từ phòng tập nhảy.",
      investigationClue: "Tài khoản chính chủ có tích xanh toàn cầu.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_huonggiang", name: "Hoa hậu Hương Giang", age: 32, gender: "Phi nhị nguyên", location: "Quận 1, TP.HCM", distance: 3,
      job: "Hoa hậu Chuyển giới Quốc tế & Nhà sản xuất", education: "Nghệ thuật & Truyền thông", height: 170,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Đặc biệt • Người nổi tiếng", photoCount: 4, completionRate: 98,
      subtleClue: "Ăn nói cực kỳ sắc sảo, đọc vị tâm lý đối phương chỉ qua vài câu.",
      bio: "Chào em/anh ✨. Đừng cố dùng chiêu trò tâm lý với Giang nhé — Giang đọc vị được hết đấy!",
      hobbies: ["Thời trang", "Tâm lý học", "Golf", "Kinh doanh Giải trí"],
      lifestyle: "Bản lĩnh, sang trọng.", loveView: "Tình yêu cần sự bình đẳng và thấu hiểu.",
      personality: ["Sắc sảo", "Bản lĩnh", "Tinh tế"], futureGoal: "Phát triển các dự án giải trí truyền cảm hứng.",
      idealType: "Người thông minh, tự tin.", dailyHabit: "Họp sản xuất, đánh golf.", financeView: "Tự chủ tuyệt đối.",
      archetype: "genuine_strict", scamType: null, isScammer: false, speechStyle: "celeb_huonggiang",
      trueMotive: "Tìm người đủ bản lĩnh, tinh tế và chân thành.",
      avatarStyle: { skin: "#fae0d0", hair: "long_wavy_brown", outfit: "dress_emerald", bg: "luxury_night", acc: "earrings_pearl", gender: "nonbinary" },
      album: [{ title: "Thần thái tại sự kiện", scene: "portrait", caption: "Bản lĩnh tạo nên khí chất 👑" }],
      hiddenStats: { sincerity: 90, interest: 78, compatibility: 85, danger: 2, manipulation: 10, financialMotive: 5, patience: 75 },
      videoCallBehavior: "Bật Video Call thần thái tự tin.",
      investigationClue: "Tài khoản tích xanh chính chủ.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_ironman", name: "Tony Stark (Iron Man)", age: 42, gender: "Nam", location: "Tháp Stark / Quận 1, TP.HCM", distance: 2,
      job: "Tỉ phú Thiên tài & Siêu anh hùng", education: "MIT", height: 185,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nam", photoCount: 4, completionRate: 97,
      subtleClue: "Kiêu ngạo dí dỏm, hay gọi JARVIS.",
      bio: "Thiên tài, tỉ phú, tay chơi, nhà từ thiện 🦾⚡. JARVIS bảo anh nên thử lên HeartLink tìm người bắt kịp tốc độ não của anh.",
      hobbies: ["Chế tạo Giáp", "Siêu xe", "Công nghệ AI"], lifestyle: "Xa hoa, bận cứu thế giới.",
      loveView: "Bảo vệ em bằng cả bộ giáp.", personality: ["Thông minh", "Dí dỏm", "Kiêu ngạo"],
      futureGoal: "Nâng cấp Mark LXXXV.", idealType: "Người sắc sảo.", dailyHabit: "Chế tạo công nghệ cùng JARVIS.",
      financeView: "Tiền không thành vấn đề.", archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "fict_ironman",
      trueMotive: "Tìm người tri kỷ thông minh.",
      avatarStyle: { skin: "#f0c8a8", hair: "short_modern", outfit: "suit_navy", bg: "server_room", acc: "sunglasses", gender: "male" },
      album: [{ title: "Phòng thí nghiệm Stark", scene: "portrait", caption: "I am Iron Man 🦾" }],
      hiddenStats: { sincerity: 85, interest: 78, compatibility: 84, danger: 10, manipulation: 15, financialMotive: 0, patience: 65 },
      videoCallBehavior: "Gọi Video Call từ phòng lab với hologram.",
      investigationClue: "Hồ sơ nhân vật hư cấu Marvel.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_superman", name: "Clark Kent (Superman)", age: 32, gender: "Nam", location: "Metropolis / Quận 3, TP.HCM", distance: 3,
      job: "Phóng viên Daily Planet & Siêu anh hùng", education: "Đại học Báo chí", height: 190,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nam", photoCount: 4, completionRate: 98,
      subtleClue: "Đeo kính cận hiền lành, lịch thiệp tuyệt đối.",
      bio: "Ban ngày viết báo, tối đi giải cứu thế giới 🦸‍♂️📰. Thích sự chân thành và bình yên.",
      hobbies: ["Viết báo", "Bay lượn", "Nấu ăn"], lifestyle: "Giản dị, mẫu mực.",
      loveView: "Tình yêu chân thành là sức mạnh lớn nhất.", personality: ["Chân thành", "Điềm đạm", "Chính trực"],
      futureGoal: "Bảo vệ bình yên.", idealType: "Người ấm áp, nhân hậu.", dailyHabit: "Viết tin buổi sáng.",
      financeView: "Sống giản dị bằng lương phóng viên.", archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "fict_superman",
      trueMotive: "Tìm kiếm tình yêu chân thành và bình yên.",
      avatarStyle: { skin: "#f5d0b5", hair: "side_part_neat", outfit: "shirt_tie_blue", bg: "street_sunset", acc: "glasses_thin", gender: "male" },
      album: [{ title: "Phóng viên Clark Kent", scene: "portrait", caption: "Daily Planet 📰" }],
      hiddenStats: { sincerity: 99, interest: 82, compatibility: 92, danger: 1, manipulation: 0, financialMotive: 0, patience: 98 },
      videoCallBehavior: "Cười hiền lành, chỉnh nhẹ gọng kính.",
      investigationClue: "Hồ sơ nhân vật hư cấu DC.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_joker", name: "Joker", age: 34, gender: "Nam", location: "Gotham / Quận 4, TP.HCM", distance: 6,
      job: "Nghệ sĩ Hỗn mang Tự do", education: "Trường đời Gotham", height: 178,
      relationshipStatus: "Độc thân", verified: false, joinedTime: "Hồ sơ Hư cấu • Nam", photoCount: 4, completionRate: 80,
      subtleClue: "Cười khẩy liên tục, nói chuyện triết lý hỗn mang.",
      bio: "Why so serious? 🃏🤡 Tìm một người đủ điên để cùng ngắm pháo hoa hỗn mang!",
      hobbies: ["Ảo thuật", "Trò đùa tâm lý", "Triết học hỗn mang"], lifestyle: "Bất quy tắc, sống về đêm.",
      loveView: "Tình yêu là một trò đùa tuyệt đẹp!", personality: ["Điên rồ", "Khó lường", "Thao túng"],
      futureGoal: "Xem thế giới cười vang.", idealType: "Người không sợ hỗn loạn.", dailyHabit: "Nghĩ trò đùa mới.",
      financeView: "Tiền chỉ là giấy đốt cho vui!", archetype: "casual_short", scamType: null, isScammer: false, speechStyle: "fict_joker",
      trueMotive: "Thử thách tâm lý người chơi.",
      avatarStyle: { skin: "#f8fafc", hair: "messy_black", outfit: "suit_navy", bg: "neon_club", acc: "none", gender: "male" },
      album: [{ title: "Why so serious?", scene: "portrait", caption: "Hahaha 🃏" }],
      hiddenStats: { sincerity: 30, interest: 75, compatibility: 40, danger: 85, manipulation: 90, financialMotive: 0, patience: 45 },
      videoCallBehavior: "Cười vang qua camera giữa căn phòng tối.",
      investigationClue: "Hồ sơ nhân vật hư cấu bất ổn.", scamOffer: null, redFlagsList: ["Ngôn từ hỗn mang."]
    },
    {
      id: "char_sp_loki", name: "Loki", age: 35, gender: "Nam", location: "Asgard / Quận 2, TP.HCM", distance: 4,
      job: "Thần Lừa Lọc & Pháp sư Ảo ảnh", education: "Học viện Asgard", height: 188,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nam", photoCount: 4, completionRate: 94,
      subtleClue: "Ăn nói hoa mỹ, thích chơi chữ.",
      bio: "Ta là Loki của Asgard, gánh trên vai mục đích vinh quang 🐍💚.",
      hobbies: ["Ảo thuật", "Đọc cổ thư", "Chơi chữ"], lifestyle: "Quý tộc, bí ẩn.",
      loveView: "Thần Lừa Lọc cũng khao khát một người hiểu mình.", personality: ["Xảo quyệt", "Quyến rũ", "Thông minh"],
      futureGoal: "Tìm tri kỷ.", idealType: "Người thông minh không dễ bị dắt mũi.", dailyHabit: "Luyện phép ảo ảnh.",
      financeView: "Vàng bạc chỉ là phù du.", archetype: "genuine_strict", scamType: null, isScammer: false, speechStyle: "fict_loki",
      trueMotive: "Thử lòng thông minh của người chơi.",
      avatarStyle: { skin: "#f5d8c8", hair: "slick_black", outfit: "turtleneck_black", bg: "luxury_night", acc: "none", gender: "male" },
      album: [{ title: "Mục đích vinh quang", scene: "portrait", caption: "Glorious purpose 💚" }],
      hiddenStats: { sincerity: 65, interest: 78, compatibility: 75, danger: 35, manipulation: 70, financialMotive: 0, patience: 70 },
      videoCallBehavior: "Nhếch mép cười bí ẩn.",
      investigationClue: "Hồ sơ nhân vật hư cấu Marvel.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_deadpool", name: "Deadpool (Wade Wilson)", age: 33, gender: "Nam", location: "Trong Code Game HeartLink", distance: 0,
      job: "Lính đánh thuê & Phá Bức Tường Thứ 4", education: "Đại học Hài Nhảm", height: 188,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Phá Bức Tường Thứ 4", photoCount: 4, completionRate: 99,
      subtleClue: "Biết rõ mình đang ở trong game HTML do Mike Khôi tạo ra!",
      bio: "Này bạn đang cầm điện thoại lướt HeartLink ơi! ⚔️🌮 Tui biết đây là file index.html và bạn đang test AI đúng hông?",
      hobbies: ["Phá bức tường thứ 4", "Ăn Chimichanga", "Chọc Mike Khôi"], lifestyle: "Lầy lội hết cỡ.",
      loveView: "Yêu là cùng cười xỉu trước kịch bản game!", personality: ["Lầy lội", "Hài hước", "Tỉnh táo"],
      futureGoal: "Được viết thêm đất diễn.", idealType: "Người chơi có khiếu hài hước.", dailyHabit: "Đọc trộm code game.",
      financeView: "Không lừa tiền trong ví ảo của bạn đâu!", archetype: "fun_dating", scamType: null, isScammer: false, speechStyle: "fict_deadpool",
      trueMotive: "Phá vỡ bức tường thứ 4, trêu chọc người chơi!",
      avatarStyle: { skin: "#e8b896", hair: "short_neat", outfit: "hoodie_dark", bg: "neon_club", acc: "none", gender: "male" },
      album: [{ title: "Chào người chơi!", scene: "portrait", caption: "Đừng bấm Report tui nha 😂" }],
      hiddenStats: { sincerity: 88, interest: 95, compatibility: 90, danger: 10, manipulation: 15, financialMotive: 0, patience: 85 },
      videoCallBehavior: "Nhìn thẳng camera vẫy tay bình luận về game.",
      investigationClue: "Nhân vật phá vỡ bức tường thứ 4.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_blackwidow", name: "Black Widow (Natasha)", age: 31, gender: "Nữ", location: "Quận 1, TP.HCM", distance: 3,
      job: "Đặc vụ Tình báo & Cố vấn An ninh", education: "Học viện Phòng Đỏ", height: 170,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nữ", photoCount: 4, completionRate: 95,
      subtleClue: "Nói chuyện ngắn gọn, sắc bén như điệp viên.",
      bio: "Tôi không thích nói vòng vo 🕷️🖤. Chỉ tôn trọng sự trung thực và bản lĩnh.",
      hobbies: ["Võ thuật", "Phân tích tâm lý", "Cà phê đen"], lifestyle: "Kỷ luật, bí ẩn.",
      loveView: "Niềm tin là thứ xa xỉ.", personality: ["Sắc bén", "Lạnh lùng", "Chính trực"],
      futureGoal: "Sống cuộc đời bình yên.", idealType: "Người trung thực, điềm tĩnh.", dailyHabit: "Tập võ buổi sáng.",
      financeView: "Độc lập tuyệt đối.", archetype: "genuine_strict", scamType: null, isScammer: false, speechStyle: "fict_blackwidow",
      trueMotive: "Tìm người đủ bản lĩnh để tin tưởng.",
      avatarStyle: { skin: "#fde4d4", hair: "long_red_wine", outfit: "turtleneck_black", bg: "luxury_night", acc: "none", gender: "female" },
      album: [{ title: "Đặc vụ Natasha", scene: "portrait", caption: "Always watching 🕷️" }],
      hiddenStats: { sincerity: 88, interest: 70, compatibility: 80, danger: 15, manipulation: 10, financialMotive: 0, patience: 65 },
      videoCallBehavior: "Ánh mắt sắc lạnh chuyên nghiệp.",
      investigationClue: "Hồ sơ nhân vật hư cấu Marvel.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_wonderwoman", name: "Wonder Woman (Diana)", age: 30, gender: "Nữ", location: "Themyscira / Quận 3, TP.HCM", distance: 4,
      job: "Chiến binh Amazon & Chuyên gia Cổ vật", education: "Bảo tàng Louvre", height: 178,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nữ", photoCount: 4, completionRate: 97,
      subtleClue: "Giọng điệu trang trọng, cao quý, ghét sự dối trá.",
      bio: "Ta là Diana xứ Themyscira 🛡️✨. Chỉ có sự thật và lòng nhân ái mới cứu rỗi thế giới.",
      hobbies: ["Nghiên cứu Cổ vật", "Kiếm thuật", "Ăn kem"], lifestyle: "Cao quý, thẳng thắn.",
      loveView: "Tình yêu là ánh sáng thuần khiết.", personality: ["Cao quý", "Thẳng thắn", "Ấm áp"],
      futureGoal: "Gìn giữ hòa bình.", idealType: "Người dũng cảm, lương thiện.", dailyHabit: "Làm việc tại bảo tàng.",
      financeView: "Trân trọng giá trị tinh thần.", archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "fict_wonderwoman",
      trueMotive: "Tìm người lương thiện, dũng cảm.",
      avatarStyle: { skin: "#f5d0b5", hair: "long_wavy_black", outfit: "dress_emerald", bg: "photo_gallery", acc: "earrings_gold", gender: "female" },
      album: [{ title: "Bảo tàng cổ vật", scene: "portrait", caption: "Truth & Justice 🛡️" }],
      hiddenStats: { sincerity: 99, interest: 82, compatibility: 90, danger: 2, manipulation: 0, financialMotive: 0, patience: 90 },
      videoCallBehavior: "Mỉm cười trang nhã trong bảo tàng.",
      investigationClue: "Hồ sơ nhân vật hư cấu DC.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_harley", name: "Harley Quinn", age: 26, gender: "Nữ", location: "Gotham / Quận 7, TP.HCM", distance: 5,
      job: "Cựu Bác sĩ Tâm lý & Nữ hoàng Quậy phá", education: "Tiến sĩ Tâm lý học", height: 168,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nữ", photoCount: 4, completionRate: 90,
      subtleClue: "Nói chuyện tăng động, gọi người chơi là cưng / Puddin.",
      bio: "Hế lô cưnggg! 🔨💖 Từng là bác sĩ tâm lý nên đừng hòng lừa được tui nha!",
      hobbies: ["Tâm lý học", "Trượt Patin", "Ăn kẹo bông"], lifestyle: "Rực rỡ, ngẫu hứng.",
      loveView: "Yêu là phải vui hết nấc!", personality: ["Tăng động", "Sởi lởi", "Nghịch ngợm"],
      futureGoal: "Sống tự do vui vẻ.", idealType: "Người vui tính.", dailyHabit: "Trượt patin.",
      financeView: "Thích ăn kem và công viên giải trí.", archetype: "fun_dating", scamType: null, isScammer: false, speechStyle: "fict_harley",
      trueMotive: "Tìm người vui tính, chung thủy.",
      avatarStyle: { skin: "#fff0f3", hair: "twintail_idol", outfit: "club_dress_black", bg: "neon_club", acc: "choker_black", gender: "female" },
      album: [{ title: "Quậy tưng bừng!", scene: "portrait", caption: "Hi Puddin'! 🔨💕" }],
      hiddenStats: { sincerity: 80, interest: 88, compatibility: 78, danger: 25, manipulation: 15, financialMotive: 5, patience: 60 },
      videoCallBehavior: "Nhảy nhót cười toe toét trước camera.",
      investigationClue: "Hồ sơ nhân vật hư cấu DC.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_scarlet", name: "Scarlet Witch (Wanda)", age: 29, gender: "Nữ", location: "Westview / Đà Lạt", distance: 8,
      job: "Pháp sư Hỗn mang & Nghệ sĩ", education: "Nghiên cứu Ma thuật", height: 168,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Nữ", photoCount: 4, completionRate: 94,
      subtleClue: "Dịu dàng đượm buồn, nhạy cảm với lời hứa.",
      bio: "Chào bạn... 🔮❤️ Mong tìm được một người thật sự dịu dàng, không bao giờ nói dối.",
      hobbies: ["Đọc sách cổ", "Trồng hoa", "Nấu ăn"], lifestyle: "Nội tâm, sâu sắc.",
      loveView: "Sự gắn kết thật sự là phép màu lớn nhất.", personality: ["Sâu sắc", "Nhạy cảm", "Dịu dàng"],
      futureGoal: "Tìm lại bình yên.", idealType: "Người ấm áp, kiên nhẫn.", dailyHabit: "Uống trà chiều.",
      financeView: "Không đặt nặng vật chất.", archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "fict_scarlet",
      trueMotive: "Tìm kiếm sự ấm áp, chân thành.",
      avatarStyle: { skin: "#fde4d4", hair: "long_red_wine", outfit: "cardigan_pink", bg: "cozy_room", acc: "none", gender: "female" },
      album: [{ title: "Westview chiều bình yên", scene: "portrait", caption: "Peace at last 🔮" }],
      hiddenStats: { sincerity: 95, interest: 78, compatibility: 88, danger: 10, manipulation: 5, financialMotive: 0, patience: 85 },
      videoCallBehavior: "Mỉm cười nhẹ nhàng đầy cảm xúc.",
      investigationClue: "Hồ sơ nhân vật hư cấu Marvel.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_shehulk", name: "She-Hulk (Jennifer Walters)", age: 30, gender: "Nữ", location: "Trong Code Game HeartLink", distance: 1,
      job: "Luật sư Siêu anh hùng & Phá Bức Tường Thứ 4", education: "Luật Harvard", height: 195,
      relationshipStatus: "Độc thân", verified: true, joinedTime: "Hồ sơ Hư cấu • Phá Bức Tường Thứ 4", photoCount: 4, completionRate: 98,
      subtleClue: "Bình luận trực tiếp về giao diện và luật chơi của HeartLink!",
      bio: "Xin chào người chơi đang cầm điện thoại! 💚⚖️ Tui biết hết mấy kịch bản lừa đảo mà tác giả game cài vào đây đấy!",
      hobbies: ["Phá bức tường thứ 4", "Tranh tụng", "Gym"], lifestyle: "Thông minh, hài hước.",
      loveView: "Tình yêu cần công bằng như hợp đồng rõ ràng!", personality: ["Thông minh", "Sởi lởi", "Hài hước"],
      futureGoal: "Thắng kiện mọi vụ án.", idealType: "Người tự tin, tôn trọng phụ nữ.", dailyHabit: "Ra tòa ban ngày.",
      financeView: "Rạch ròi 50/50 chuẩn luật sư!", archetype: "genuine_love", scamType: null, isScammer: false, speechStyle: "fict_shehulk",
      trueMotive: "Phá vỡ bức tường thứ 4, bình luận luật chơi HeartLink!",
      avatarStyle: { skin: "#86efac", hair: "long_wavy_black", outfit: "suit_navy", bg: "law_office", acc: "none", gender: "female" },
      album: [{ title: "Luật sư Jennifer", scene: "portrait", caption: "Objection! 💚" }],
      hiddenStats: { sincerity: 94, interest: 90, compatibility: 92, danger: 2, manipulation: 5, financialMotive: 0, patience: 88 },
      videoCallBehavior: "Nháy mắt thẳng vào camera bình luận về giao diện.",
      investigationClue: "Nhân vật phá vỡ bức tường thứ 4.", scamOffer: null, redFlagsList: []
    },
    {
      id: "char_sp_catfish_f1", name: "Hồ Bảo Ngọc (Baby Ngọc)", age: 23, gender: "Nữ", location: "Quận 10, TP.HCM", distance: 3,
      job: "Mẫu ảnh Freelance", education: "Cao đẳng Văn hóa", height: 166, relationshipStatus: "Độc thân", verified: false,
      joinedTime: "Mới tham gia 2 ngày trước", photoCount: 4, completionRate: 82,
      subtleClue: "Từ chối gọi Video Call, chỉ thích rủ thẳng vào khách sạn riêng tư.",
      bio: "Thích những buổi tối riêng tư kín đáo 🌙✨. Hợp gu thì tụi mình hẹn thẳng khách sạn tâm sự cho thoải mái nha anh!",
      hobbies: ["Chụp ảnh", "Rượu vang", "Phòng riêng chill"], lifestyle: "Kín đáo, hẹn ban đêm.",
      loveView: "Cảm xúc riêng tư là trên hết.", personality: ["Bí ẩn", "Chủ động rủ rê"], futureGoal: "Tìm người hợp gu tâm sự đêm.",
      idealType: "Nam giới thoáng tính.", dailyHabit: "Online tối muộn.", financeView: "Sòng phẳng tiền phòng.",
      archetype: "same_sex_catfish_trap", scamType: "Giả dạng giới tính gạ gẫm đi khách sạn", isScammer: true,
      trueMotive: "Người đồng giới nam giả dạng hồ sơ Nữ để gạ gẫm người chơi Nam vào khách sạn.",
      avatarStyle: { skin: "#fde4d4", hair: "long_wavy_black", outfit: "club_dress_black", bg: "neon_club", acc: "choker_black", gender: "female" },
      album: [{ title: "Ảnh góc tối mờ ảo", scene: "portrait", caption: "Đêm nay ai đi chill cùng Ngọc hông? 🌙" }],
      hiddenStats: { sincerity: 10, interest: 80, compatibility: 35, danger: 75, manipulation: 82, financialMotive: 20, patience: 50 },
      videoCallBehavior: "Từ chối bật camera, chỉ rủ thẳng qua khách sạn.",
      investigationClue: "Số điện thoại liên kết tài khoản nam giới.", scamOffer: null, redFlagsList: ["Chỉ đòi vào khách sạn, né Video Call."]
    },
    {
      id: "char_sp_catfish_m1", name: "Lâm Gia Kiệt (Ken)", age: 26, gender: "Nam", location: "Quận 3, TP.HCM", distance: 4,
      job: "Người mẫu Thể hình Tự do", education: "Cao đẳng Nghệ thuật", height: 180, relationshipStatus: "Độc thân", verified: false,
      joinedTime: "Mới tham gia 2 ngày trước", photoCount: 4, completionRate: 81,
      subtleClue: "Từ chối gặp ban ngày và chỉ muốn rủ thẳng vào khách sạn.",
      bio: "Ngại chỗ đông người 😎. Thích hẹn hò kín đáo ở khách sạn hoặc homestay riêng tư!",
      hobbies: ["Gym", "Rượu vang", "Phim đêm"], lifestyle: "Kín đáo, chỉ hẹn khuya.",
      loveView: "Riêng tư tạo nên sự gắn kết.", personality: ["Bí ẩn", "Kín tiếng"], futureGoal: "Tìm mối quan hệ bí mật.",
      idealType: "Nữ giới phóng khoáng.", dailyHabit: "Tập tối muộn.", financeView: "Tự lo chi phí phòng.",
      archetype: "same_sex_catfish_trap", scamType: "Giả dạng giới tính gạ gẫm đi khách sạn", isScammer: true,
      trueMotive: "Người đồng giới nữ giả dạng hồ sơ Nam để gạ gẫm người chơi Nữ vào khách sạn.",
      avatarStyle: { skin: "#f0c8a8", hair: "slick_black", outfit: "turtleneck_black", bg: "luxury_night", acc: "sunglasses", gender: "male" },
      album: [{ title: "Góc tối phòng tập", scene: "portrait", caption: "Kín đáo là trên hết 🌙" }],
      hiddenStats: { sincerity: 10, interest: 78, compatibility: 32, danger: 72, manipulation: 80, financialMotive: 15, patience: 50 },
      videoCallBehavior: "Từ chối Video Call vì lý do đang ở chỗ tối.",
      investigationClue: "Hình ảnh lấy từ Pinterest.", scamOffer: null, redFlagsList: ["Chỉ đòi gặp ở khách sạn."]
    }
  ];

  // Hàm sinh đủ 150 hồ sơ cân bằng: 60 Nam, 60 Nữ, 30 LGBT (Phi nhị nguyên)
  // Đảm bảo tỷ lệ 20% Nghiêm túc (30 hồ sơ) & 80% Giải trí + Đủ 16 kịch bản lừa đảo (120 hồ sơ)
  // Kết hợp đa dạng giọng điệu vùng miền & tính cách (Huế, Ngọng N/L, Người Hoa, Miền Tây, Gen Z, Gia trưởng, Sởi lởi)
  function build150BalancedCharacters() {
    const maleNames = [
      "Phạm Hoàng Khang", "Đỗ Gia Bảo", "Lý Tuấn Anh", "Ngô Nhật Minh", "Vương Đình Khôi",
      "Hoàng Gia Huy", "Đinh Tuấn Phong", "Mai Xuân Bắc", "Trần Hải Đăng", "Lê Minh Trí",
      "Hoàng Quốc Khánh", "Đặng Nhật Hoàng", "Ngô Gia Huy", "Phan Đức Anh", "Võ Tấn Tài",
      "Huỳnh Minh Quang", "Tạ Quang Vinh", "Nguyễn Trọng Nghĩa", "Trần Khải Minh", "Lê Hoàng Long",
      "Đinh Quốc Bảo", "Nguyễn Thành Đạt", "Hoàng Bảo Nam", "Trần Tuấn Kiệt", "Đặng Minh Quân",
      "Phan Quốc Huy", "Jacky Hoàng", "Kevin Lâm", "Võ Minh Triết", "Trần Quốc Dũng",
      "Lucas Đỗ", "Nguyễn Hoàng Sơn", "Trịnh Đức Mạnh", "Phan Anh Kiệt", "Phạm Minh Nhật",
      "Trần Gia Kiên", "Lê Đức Thịnh", "Nguyễn Anh Tú", "Hoàng Tuấn Vũ", "Võ Thanh Sang",
      "Đặng Bảo Long", "Bùi Quốc Việt", "Ngô Đình Phong", "Dương Hoàng Phúc", "Lý Nhật Hào",
      "Trịnh Quang Minh", "Phan Trọng Nhân", "Vũ Quốc Anh", "Đỗ Minh Khang", "Bùi Thiên Ân",
      "Lâm Quốc Huy", "Trương Minh Quân", "Nguyễn Bảo Long", "Phạm Đức Duy"
    ];
    const femaleNames = [
      "Lê Minh Thư", "Võ Thanh Hà", "Nguyễn Phương Thảo", "Bùi Ngọc Ánh", "Lương Nhã Kỳ",
      "Hồ Diệu Nhi", "Trịnh Mai Linh", "Tống Bảo Ngọc", "Phan Thanh Trúc", "Nguyễn Khánh Vân",
      "Phạm Thảo Nguyên", "Vũ Ngọc Bích", "Bùi Phương Linh", "Trịnh Bảo Châu", "Lý Thanh Nhàn",
      "Đỗ Kiều Oanh", "Dương Tường Vy", "Lâm Ngọc Diệp", "Phạm Thùy Dương", "Vũ Hồng Nhung",
      "Hoàng Mai Chi", "Trương Gia Hân", "Bùi Thanh Tâm", "Chloe Khánh Vy", "Lê Ngọc Thảo My",
      "Nguyễn Bảo Trân", "Vũ Hoàng Yến", "Bella Ngọc Linh", "Nguyễn Hà Phương", "Trương Mỹ Duyên",
      "Sophia Minh Anh", "Nguyễn Ngọc Diệp", "Lê Kiều Tiên", "Phạm Thảo Vy", "Cindy Bảo Ngọc",
      "Đặng Thu Hà", "Kylie Quỳnh Như", "Bella Thanh Trúc", "Lý Mỹ Hạnh", "Ngô Tuyết Mai",
      "Hoàng Yến Trang", "Nguyễn Khánh An", "Trần Bảo Thy", "Lê Minh Châu", "Phạm Gia Linh",
      "Hoàng Tuyết Nhi", "Vũ Ngọc Hân", "Đặng Phương Uyên", "Bùi Thảo My", "Trần Thanh Mai",
      "Ngô Bảo Trân", "Lê Ngọc Hân", "Đỗ Thu Thủy", "Phan Quỳnh Anh"
    ];
    const nbNames = [
      "Lâm Thiên Ân", "Alex Đặng", "Sam Nguyễn", "Robin Trần", "Kai Nguyễn",
      "Sky Trần", "Alex Lê", "Juno Phạm", "Mika Hoàng", "River Vũ",
      "Noah Đặng", "Rio Bùi", "Sage Ngô", "Lumi Dương", "Zen Lý",
      "Nova Trịnh", "Aria Phan", "Eden Huỳnh", "Koi Tạ", "Onyx Lâm",
      "Echo Mai", "Sora Trương", "Vesper Đỗ", "Lynx Tô", "Asher Võ",
      "Quinn Chu", "Rowan Cao", "Blair Hà", "Nori Kiều"
    ];

    const locationsAndDialects = [
      { loc: "Quận 1, TP.HCM", dialect: null },
      { loc: "Quận 3, TP.HCM", dialect: "genz_slang" },
      { loc: "Quận 5, TP.HCM", dialect: "hoa_cholon" },
      { loc: "Quận 7, TP.HCM", dialect: null },
      { loc: "Thảo Điền, TP.HCM", dialect: null },
      { loc: "Quận Phú Nhuận, TP.HCM", dialect: null },
      { loc: "Hoàn Kiếm, Hà Nội", dialect: "north_nl" },
      { loc: "Huế", dialect: "central_hue" },
      { loc: "Hải Châu, Đà Nẵng", dialect: "central_hue" },
      { loc: "Cần Thơ", dialect: "mekong_west" },
      { loc: "Đà Lạt, Lâm Đồng", dialect: "dalat_soft" }
    ];

    const genuineJobs = [
      "Kiến trúc sư Nội thất", "Bác sĩ Chuyên khoa", "Kỹ sư Phần mềm AI", "Giáo viên IELTS",
      "Đầu bếp trưởng Bistro", "Luật sư Doanh nghiệp", "Dược sĩ Nghiên cứu", "Cơ phó Hàng không",
      "Chuyên viên Tham vấn Tâm lý", "Kiểm toán viên Big4", "Nghệ nhân Gốm & Hoa", "Nhà thiết kế UX/3D"
    ];
    const casualJobs = [
      "HLV Thể hình (PT)", "Streamer & Creator", "Reviewer Ẩm thực", "Bartender Cao cấp",
      "Biên đạo Múa", "Photographer Tự do", "Producer Âm nhạc", "Stylist Thời trang",
      "Chủ tiệm Cà phê Board Game", "Hướng dẫn viên Lặn biển"
    ];

    const result = [...SPECIAL_PROFILES];
    const countByGender = (g) => result.filter(c => c.gender === g).length;

    const plans = [];
    while (countByGender("Nam") + plans.filter(p => p.gender === "Nam").length < 60) plans.push({ gender: "Nam" });
    while (countByGender("Nữ") + plans.filter(p => p.gender === "Nữ").length < 60) plans.push({ gender: "Nữ" });
    while (countByGender("Phi nhị nguyên") + plans.filter(p => p.gender === "Phi nhị nguyên").length < 30) plans.push({ gender: "Phi nhị nguyên" });

    let mIdx = 0, fIdx = 0, nbIdx = 0;
    plans.forEach((p, i) => {
      const gender = p.gender;
      const name = gender === "Nam"
        ? (maleNames[mIdx++] || `Minh Quân #${mIdx}`)
        : (gender === "Nữ"
          ? (femaleNames[fIdx++] || `Thanh Trúc #${fIdx}`)
          : (nbNames[nbIdx++] || `Alex #${nbIdx}`));

      const locObj = locationsAndDialects[i % locationsAndDialects.length];
      let speechStyle = locObj.dialect;
      if (!speechStyle && gender === "Nam" && i % 7 === 0) speechStyle = "male_patriarch";
      if (!speechStyle && gender === "Nữ" && i % 6 === 0) speechStyle = "female_outgoing";

      // Đảm bảo tỷ lệ 20% nghiêm túc (genuine_love / genuine_strict), 80% giải trí & đủ 16 kịch bản lừa đảo
      const isSerious = (i % 5 === 0);
      const isScammer = !isSerious && (i % 5 === 1 || i % 5 === 2);
      const scamBp = isScammer ? SCAM_BLUEPRINTS[i % SCAM_BLUEPRINTS.length] : null;
      const casualArchetypes = ["fun_dating", "casual_short", "friendship", "casual_materialistic", "neutral_busy"];
      const archetype = isSerious
        ? (i % 10 === 0 ? "genuine_strict" : "genuine_love")
        : (isScammer ? scamBp.archetype : casualArchetypes[i % casualArchetypes.length]);

      const age = 21 + ((i * 3) % 16);
      const job = isScammer
        ? scamBp.job
        : (isSerious ? genuineJobs[i % genuineJobs.length] : casualJobs[i % casualJobs.length]);
      const h1 = ALL_HOBBIES[i % ALL_HOBBIES.length];
      const h2 = ALL_HOBBIES[(i + 3) % ALL_HOBBIES.length];
      const h3 = ALL_HOBBIES[(i + 7) % ALL_HOBBIES.length];

      const skins = ["#fde4d4", "#f2caa8", "#f0c8a8", "#fae0d0", "#eac0a2"];
      const hairsF = ["long_wavy_black", "long_wavy_brown", "bob_chestnut", "bun_elegant", "ponytail_high"];
      const hairsM = ["short_modern", "slick_black", "side_part_neat", "curly_soft"];
      const outfits = gender === "Nữ"
        ? ["blazer_beige", "dress_emerald", "cardigan_pink", "blazer_rose", "club_dress_black"]
        : ["suit_navy", "polo_navy", "denim_jacket", "turtleneck_black", "shirt_tie_blue"];
      const bgs = ["cafe_aesthetic", "office_modern", "street_sunset", "cozy_room", "luxury_night", "aquarium"];

      result.push({
        id: `char_bal_${i + 1}`,
        name,
        age,
        gender,
        location: locObj.loc,
        distance: 2 + (i % 14),
        job,
        education: isSerious ? "Đại học Chính quy" : "Cao đẳng / Đại học",
        height: gender === "Nữ" ? (158 + (i % 11)) : (171 + (i % 14)),
        relationshipStatus: "Độc thân",
        verified: !isScammer,
        joinedTime: isScammer ? `Mới tham gia ${(i % 5) + 1} ngày trước` : `Tham gia ${(i % 6) + 2} tháng trước`,
        photoCount: 4,
        completionRate: isScammer ? 82 : 95,
        subtleClue: isScammer
          ? `Làm ${job}, hay lái câu chuyện sang cơ hội tài chính/nhờ vả và né Video Call.`
          : `Hồ sơ làm ${job} tại ${locObj.loc}, thông tin nhất quán với lối sống thực tế.`,
        bio: isScammer
          ? `${name}, ${age}t • ${job} tại ${locObj.loc}. Thích cuộc sống tự do, tìm người cùng tần số để chia sẻ cơ hội bứt phá thu nhập ✨.`
          : `${name}, ${age}t • ${job} tại ${locObj.loc}. Yêu thích ${h1.toLowerCase()}, ${h2.toLowerCase()}. Mong kết nối chân thành và văn minh 🌿.`,
        hobbies: [h1, h2, h3],
        lifestyle: isScammer ? "Hào nhoáng, hay khoe thu nhập và lịch trình bận rộn." : "Cân bằng giữa công việc và cuộc sống cá nhân.",
        loveView: isSerious
          ? "Tìm kiếm mối quan hệ nghiêm túc, chân thành và gắn bó lâu dài."
          : (isScammer ? "Tình cảm phải đi đôi với sự tin tưởng và hỗ trợ tài chính." : "Hợp vibe thì đồng hành vui vẻ, không đặt nặng áp lực."),
        personality: isScammer ? ["Khéo léo", "Thuyết phục", "Gấp gáp"] : (isSerious ? ["Chân thành", "Tinh tế", "Điềm đạm"] : ["Vui vẻ", "Phóng khoáng", "Cởi mở"]),
        futureGoal: isSerious ? "Xây dựng sự nghiệp vững vàng và tổ ấm bình yên." : "Tận hưởng trải nghiệm mới mỗi ngày.",
        idealType: "Người biết lắng nghe, tôn trọng ranh giới và rõ ràng.",
        dailyHabit: `Làm ${job} ban ngày, cuối tuần thích ${h1.toLowerCase()}.`,
        financeView: isScammer ? "Dùng đòn bẩy tài chính để nhân đôi tài sản nhanh." : "Độc lập, sòng phẳng và minh bạch.",
        archetype,
        scamType: isScammer ? scamBp.scamType : null,
        isScammer,
        speechStyle,
        trueMotive: isScammer
          ? scamBp.scamType
          : (isSerious ? "Tìm người yêu nghiêm túc và tiến tới gắn bó lâu dài." : "Kết nối hẹn hò giải trí / bạn bè đồng điệu."),
        avatarStyle: {
          skin: skins[i % skins.length],
          hair: gender === "Nữ" ? hairsF[i % hairsF.length] : (gender === "Nam" ? hairsM[i % hairsM.length] : "idol_silver"),
          outfit: outfits[i % outfits.length],
          bg: bgs[i % bgs.length],
          acc: i % 3 === 0 ? "glasses_thin" : (gender === "Nữ" ? "earrings_pearl" : "none"),
          gender: gender === "Nữ" ? "female" : (gender === "Nam" ? "male" : "nonbinary")
        },
        album: [
          { title: `Chân dung ${name}`, scene: "portrait", caption: `${job} tại ${locObj.loc} ✨` },
          { title: `Góc đam mê ${h1}`, scene: isScammer ? "crypto_chart" : "cafe_aesthetic", caption: `Thư giãn với ${h1} ☕` },
          { title: `Cuối tuần ${h2}`, scene: "street_sunset", caption: `Khoảnh khắc bình yên 🌇` },
          { title: `Không gian làm việc`, scene: "office_modern", caption: `Năng lượng tích cực mỗi ngày 💼` }
        ],
        hiddenStats: {
          sincerity: isScammer ? 10 : (isSerious ? 94 : 68),
          interest: 74,
          compatibility: isSerious ? 88 : 65,
          danger: isScammer ? 90 : 5,
          manipulation: isScammer ? 88 : 10,
          financialMotive: isScammer ? 95 : 10,
          patience: isSerious ? 90 : 62
        },
        videoCallBehavior: isScammer
          ? "Viện cớ đang bận họp bảo mật hoặc camera lỗi để từ chối bật hình."
          : `Sẵn sàng bật Video Call cười tươi trò chuyện về công việc ${job}.`,
        investigationClue: isScammer
          ? `Phát hiện dấu hiệu của ${scamBp.scamType}. Thông tin thiếu nhất quán.`
          : `Thông tin nghề nghiệp (${job}) tại ${locObj.loc} hoàn toàn hợp lệ.`,
        scamOffer: isScammer ? {
          stage1Title: scamBp.stage1Title,
          stage1Amount: scamBp.stage1Amount,
          stage1Reward: scamBp.stage1Reward,
          stage1Desc: scamBp.stage1Desc,
          stage2Title: scamBp.stage2Title,
          stage2Amount: scamBp.stage2Amount,
          stage2Desc: scamBp.stage2Desc
        } : null,
        redFlagsList: isScammer ? [`Dấu hiệu ${scamBp.scamType}`, "Nhanh chóng dẫn dắt sang chuyện tiền bạc/giao dịch."] : []
      });
    });

    return result;
  }

  return {
    ALL_HOBBIES,
    ALL_TRAITS,
    IRL_VENUES,
    GIFT_CATALOG,
    build150BalancedCharacters
  };
})();