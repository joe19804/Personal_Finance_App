-- 1. 使用者資訊表 (儲存 OAuth 登入後的用戶與總餘額)
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY, -- 存儲 OAuth 的 Provider ID (如 Google ID)
    email VARCHAR(255) UNIQUE NOT NULL,
    current_balance DECIMAL(12, 2) DEFAULT 0.00,
    total_income DECIMAL(12, 2) DEFAULT 0.00,
    total_expenses DECIMAL(12, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. 預算表
CREATE TABLE budgets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    maximum DECIMAL(12, 2) NOT NULL,
    theme VARCHAR(7) NOT NULL, -- 存儲十六進位顏色碼，如 #277C78
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- PlanetScale 建議在 user_id 上建立索引以加速查詢
    INDEX idx_user_id (user_id)
);

-- 3. 儲蓄罐表 (Pots)
CREATE TABLE pots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    target DECIMAL(12, 2) NOT NULL,
    total DECIMAL(12, 2) DEFAULT 0.00,
    theme VARCHAR(7) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id)
);

-- 4. 交易紀錄表
CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    avatar TEXT, -- 存儲圖片 URL
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    date DATETIME NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    is_recurring BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_date (date) -- 方便按日期排序
);