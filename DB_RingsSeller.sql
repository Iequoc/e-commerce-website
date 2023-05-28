
CREATE DATABASE DB_RingsWebsite
USE DB_RingsWebsite
GO
CREATE TABLE PRODUCTS (
    PR_ID INT IDENTITY(1,1) PRIMARY KEY,
    PR_NAME NVARCHAR(150) UNIQUE,
    PR_PRICE INT,
    PR_STOCK INT,
    PR_IMG NVARCHAR(100),
    PR_DESCRIP  NVARCHAR(MAX),
    

)

GO


INSERT INTO PRODUCTS (PR_NAME, PR_PRICE, PR_STOCK, PR_IMG, PR_DESCRIP)
VALUES ( N'Nhẫn bạc đính đá STYLE by PNJ Feminine XMXMW060041', 545000, 10,'Pr_01.png','ADC');

INSERT INTO PRODUCTS (PR_NAME, PR_PRICE, PR_STOCK, PR_IMG, PR_DESCRIP)
VALUES ( N'Cặp Nhẫn bạc PNJSilver 00059-00129', 713000, 10,'Pr_02.png','ADC');

INSERT INTO PRODUCTS (PR_NAME, PR_PRICE, PR_STOCK, PR_IMG, PR_DESCRIP)
VALUES ( N'Nhẫn nam bạc PNJSilver 0000K000059', 375000,10, 'Pr_03.png','ADC');

INSERT INTO PRODUCTS (PR_NAME, PR_PRICE, PR_STOCK, PR_IMG, PR_DESCRIP)
VALUES ( N'Nhẫn bạc đính đá PNJSilver XM00K000129', 338000,10, 'Pr_04.png','ADC');

Go

CREATE TABLE CUSTOMER (
    ID INT IDENTITY(1,1) PRIMARY KEY ,
    HOTEN NVARCHAR(MAX),
    UNAME VARCHAR(50) UNIQUE,
    PASS VARCHAR(50),
    AVT NVARCHAR(MAX),
    GT NVARCHAR(10),
    DIACHI NVARCHAR(MAX),
    SDT NVARCHAR(10) UNIQUE,
    EMAL NVARCHAR(100) UNIQUE,
    

)

CREATE TABLE ORDER_PR (
    ID_PR INT IDENTITY(1,1) PRIMARY KEY ,
    PRODUCT NVARCHAR(MAX),
)


GO
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT,GT, DIACHI, SDT, EMAL)
VALUES ( N'LE QUOC','lequoc','lequoc','avt_lequoc.png',N'Nam',N'Vân Quật, Duy Thành, Duy Xuyên, Quảng Nam', '0789925580', 'quoc@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT,GT, DIACHI, SDT, EMAL)
VALUES ( N'TEN HAY','tenhay','tenhay','avt_tenhay.png',N'Nữ', N' Thanh Khê, Đà Nẵng', '0899924433', 'tenhay@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT, GT,DIACHI, SDT, EMAL)
VALUES ( N'KHONG CO TEN','khongcoten','khongcoten','avt_khongcoten.png',N'Nam', N'Hải Châu, Đà Nẵng', '0866925580', 'khongcoten@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT,GT, DIACHI, SDT, EMAL)
VALUES ( N'ME THIEN HA','methienha','methienha','avt_methienha.png',N'Nam', N'Sơn trà, Đà nẵng', '0234567891', 'methienha@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT,GT, DIACHI, SDT, EMAL)
VALUES ( N'BO THIEN HA','bothienha','bothienha','avt_bothienha.png',N'Nam', N'Lê Duẩn, Hải Châu, Đà Nẵng', '0867825580', 'bothienha@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT, GT,DIACHI, SDT, EMAL)
VALUES ( N'TEN LA TEN','tenlaten','tenlaten','avt_tenlaten.png',N'Nữ',N'Châu Thị Vĩnh Tế, Ngũ Hành Sơn, Đà Nẵng', '0779925580', 'tenlaten@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT, GT,DIACHI, SDT, EMAL)
VALUES ( N'LE ABC','leaddd','leaddd','avt_leaddd.png',N'Nữ',N'Điện bàn, Quảng Nam', '0567243888', 'leaddd@gmail.com')
INSERT INTO CUSTOMER (HOTEN, UNAME, PASS, AVT,GT, DIACHI, SDT, EMAL)
VALUES ( N'NGUYEN DU','nguyendu','nguyendu','avt_nguyendu.png',N'Nữ', N'Hội An, Quảng Nam', '0878924580', 'nguyendu@gmail.com')

GO
